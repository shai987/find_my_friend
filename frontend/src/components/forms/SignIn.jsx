import { UserProvider } from '../../context/UserContext';

import { useState } from 'react';

import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AlertError } from "../views/AlertError";
import { AlertSuccess } from "../views/AlertSuccess";

axios.defaults.baseURL = 'http://127.0.0.1:8080/route';

const theme = createTheme();

const SignIn = () => {

        const initialFormData = {
                email: "",
                user_password: "",
        };

        const [formData, setFormData] = useState(initialFormData);
        const [formSuccess, setFormSuccess] = useState("");
        const [formErrors, setFormErrors] = useState([]);

        const handleChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,

                });
                // setFormErrors([]);
                // setFormSuccess("");
        };

        /*  const handleErrors = (err) => {
                 if (err.response.data && err.response.data.errors) {
                         // Handle validation errors
                         const { errors } = err.response.data;
 
                         let errorMsg = [];
                         for (let error of errors) {
                                 const { msg } = error;
 
                                 errorMsg.push(msg);
                         }
 
                         setFormErrors(errorMsg);
                 } else {
                         // Handle generic error
                         setFormErrors(["Oops, there was an error!"]);
                 }
         }; */

        const handleSubmit = async (e) => {
                e.preventDefault();

                try {
                        // Send POST request
                        await axios.post(`/userSignIn?email=${formData.email}&user_password=${formData.user_password}`).then((response) => {
                                if (response.data.message === "User not found") {
                                        console.log("User not found");
                                        setFormSuccess("User not found");
                                } else {
                                        console.log(`User found, name: ${response.data.first_name} ${response.data.last_name} `);
                                        setFormSuccess(`User found, name: ${response.data.first_name} ${response.data.last_name} `);
                                }
                        });

                        // Reset form data
                        setFormData(initialFormData);
                } catch (err) {
                        // handleErrors(err);
                        console.log(err.message);
                }
        };

        return (
                <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                                <CssBaseline />
                                <Box
                                        sx={{
                                                marginTop: 8,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                        }}
                                >
                                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                                <LockOutlinedIcon />
                                        </Avatar>
                                        <Typography component="h1" variant="h5">
                                                כניסה
                                        </Typography>

                                        <AlertSuccess success={formSuccess} />
                                        <AlertError errors={formErrors} />

                                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                                <TextField
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="כתובת מייל"
                                                        name="email"
                                                        autoComplete="email"
                                                        autoFocus
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                />
                                                <TextField
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        name="user_password"
                                                        label="סיסמא"
                                                        type="password"
                                                        id="password"
                                                        autoComplete="current-password"
                                                        value={formData.user_password}
                                                        onChange={handleChange}
                                                />
                                                <FormControlLabel
                                                        control={<Checkbox value="remember" color="primary" />}
                                                        label="זכור אותי"
                                                />
                                                <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{ mt: 3, mb: 2 }}
                                                >
                                                        התחברות
                                                </Button>
                                                <Grid container>
                                                        <Grid item xs>
                                                                <Link href="#" variant="body2">
                                                                        {"אין לך חשבון? הירשם"}
                                                                </Link>
                                                        </Grid>

                                                        <Grid item>
                                                                <Link href="#" variant="body2">
                                                                        שכחת סיסמא?
                                                                </Link>
                                                        </Grid>
                                                </Grid>
                                        </Box>
                                </Box>
                        </Container>
                </ThemeProvider >
        );
}

export default SignIn;