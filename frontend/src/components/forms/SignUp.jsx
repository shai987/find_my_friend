import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';

import { AlertError } from "../views/AlertError";
import { AlertSuccess } from "../views/AlertSuccess";

axios.defaults.baseURL = 'http://127.0.0.1:8080/route';

const theme = createTheme();

const SignUp = () => {

        const initialFormData = {
                first_name: "",
                last_name: "",
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
                setFormErrors([]);
                setFormSuccess("");
        };

        const handleErrors = (err) => {
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
        };

        const handleSubmit = async (e) => {
                e.preventDefault();

                try {
                        // Send POST request
                        await axios.post("/userSignUp", formData);

                        // HTTP req successful
                        setFormSuccess("Data received correctly");

                        // Reset form data
                        setFormData(initialFormData);
                } catch (err) {
                        handleErrors(err);
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
                                                הרשמה לאתר
                                        </Typography>

                                        <AlertSuccess success={formSuccess} />
                                        <AlertError errors={formErrors} />

                                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                                <Grid container spacing={2}>
                                                        <Grid item xs={12} sm={6}>
                                                                <TextField
                                                                        autoComplete="given-name"
                                                                        name="first_name"
                                                                        required
                                                                        fullWidth
                                                                        id="firstName"
                                                                        label="שם פרטי"
                                                                        autoFocus
                                                                        value={formData.first_name}
                                                                        onChange={handleChange}
                                                                />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                                <TextField
                                                                        required
                                                                        fullWidth
                                                                        id="lastName"
                                                                        label="שם משפחה"
                                                                        name="last_name"
                                                                        autoComplete="family-name"
                                                                        value={formData.last_name}
                                                                        onChange={handleChange}
                                                                />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                                <TextField
                                                                        required
                                                                        fullWidth
                                                                        id="email"
                                                                        label="כתובת אימייל"
                                                                        name="email"
                                                                        autoComplete="email"
                                                                        value={formData.email}
                                                                        onChange={handleChange}
                                                                />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                                <TextField
                                                                        required
                                                                        fullWidth
                                                                        name="user_password"
                                                                        label="סיסמא"
                                                                        type="password"
                                                                        id="password"
                                                                        autoComplete="new-password"
                                                                        value={formData.user_password}
                                                                        onChange={handleChange}
                                                                />
                                                        </Grid>
                                                </Grid>
                                                <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{ mt: 3, mb: 2 }}
                                                >
                                                        הרשמה
                                                </Button>
                                                <Grid container justifyContent="flex-end">
                                                        <Grid item xs>
                                                                <Link href="#" variant="body2">
                                                                        יש לך כבר חשבון באתר? לחץ כאן והתחבר
                                                                </Link>
                                                        </Grid>
                                                </Grid>
                                        </Box>
                                </Box>
                        </Container>
                </ThemeProvider>
        );
}

export default SignUp;