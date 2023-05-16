// import from react
import { useState, useContext } from 'react';
// import react-router-dom
import { Link, useNavigate } from 'react-router-dom';
// import libraries from material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import our components
import { AlertError } from "../views/AlertError";
import { AlertSuccess } from "../views/AlertSuccess";
import { AuthContext } from '../../context/AuthContext';
// import axios
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8080/route';

const theme = createTheme();

const SignIn = () => {

        const initialFormData = {
                email: "",
                user_password: "",
                phone_number: "",
                first_name: "",
                last_name: "",
        };

        const [formData, setFormData] = useState(initialFormData);
        const [formSuccess, setFormSuccess] = useState("");
        const [formErrors, setFormErrors] = useState([]);
        const [showPassword, setShowPassword] = useState(false);
        const navigate = useNavigate();
        const { user, login } = useContext(AuthContext);

        const handleChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,

                });
                setFormErrors([]);
                setFormSuccess("");
        };

        const handleClickShowPassword = () => {
                setShowPassword((show) => !show);
        }

        const handleMouseDownPassword = (event) => {
                event.preventDefault();
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
                        // await axios.post(`/userSignIn?email=${formData.email}&user_password=${formData.user_password}`).then((response) => {
                        await axios.post('/userSignIn', formData).then((response) => {
                                console.log(`User found, name: ${formData.first_name} ${formData.last_name} `);
                                if (response.data.message === "User not found") {
                                        console.log(formData.user_password);
                                        console.log("User not found");
                                        setFormSuccess("User not found");
                                }
                                else if (response.data.message === "Password is not the same") {
                                        setFormSuccess("Password is not the same");
                                }
                                else {
                                        console.log(`User found, name: ${response.data.first_name} ${response.data.last_name} `);
                                        setFormData(response.data);
                                        /*user.first_name = response.data.first_name;
                                        user.last_name = response.data.last_name;
                                        user.email = response.data.email;
                                        user.user_password = response.data.user_password;
                                        setUser(user)*/

                                        login(response.data.first_name, response.data.last_name, response.data.email, response.data.phone_number/* , response.data.user_password */)

                                        /*setUser({
                                                first_name: response.data.first_name,
                                                last_name: response.data.last_name,
                                                email: response.data.email
                                        });*/
                                        console.log(user);
                                        // setFormSuccess(`User found, name: ${ response.data.first_name } ${ response.data.last_name } `);
                                        return navigate("/RequestStatus");
                                }
                        });

                        // Reset form data
                        // setFormData(initialFormData);
                } catch (err) {
                        handleErrors(err);
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
                                                        sx={{
                                                                "& label": {
                                                                        left: "unset",
                                                                        right: "1.75rem",
                                                                        transformOrigin: "right",
                                                                },
                                                                "& legend": {
                                                                        textAlign: "right",
                                                                        fontSize: "0.6rem",
                                                                },
                                                        }}
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
                                                <br /> <br />
                                                <FormControl
                                                        sx={{
                                                                width: '50ch',
                                                                "& label": {
                                                                        left: "unset",
                                                                        right: "1.75rem",
                                                                        transformOrigin: "right",
                                                                },
                                                                "& legend": {
                                                                        textAlign: "right",
                                                                        fontSize: "0.6rem",
                                                                },
                                                        }} variant="outlined">
                                                        <InputLabel htmlFor="outlined-adornment-password">סיסמא</InputLabel>
                                                        <OutlinedInput
                                                                spellCheck="false"
                                                                margin="dense"
                                                                required
                                                                fullWidth
                                                                name="user_password"
                                                                label="סיסמא"
                                                                autoComplete="current-password"
                                                                value={formData.user_password}
                                                                onChange={handleChange}
                                                                id="outlined-adornment-password"
                                                                type={showPassword ? 'text' : 'password'}
                                                                endAdornment={
                                                                        <InputAdornment position="end">
                                                                                <IconButton
                                                                                        aria-label="toggle password visibility"
                                                                                        onClick={handleClickShowPassword}
                                                                                        onMouseDown={handleMouseDownPassword}
                                                                                        edge="end"
                                                                                >
                                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                                </IconButton>
                                                                        </InputAdornment>
                                                                }
                                                        />
                                                </FormControl>
                                                {/* <TextField
                                                        sx={{
                                                                "& label": {
                                                                        left: "unset",
                                                                        right: "1.75rem",
                                                                        transformOrigin: "right",
                                                                },
                                                                "& legend": {
                                                                        textAlign: "right",
                                                                        fontSize: "0.6rem",
                                                                },
                                                        }}
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
                                                /> */}
                                                <br />
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
                                                                <Link to='/SignUp' variant="body2">
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