// import from react
import { useState, useContext } from 'react';
// import react-router-dom
import { Link, useNavigate } from 'react-router-dom';
// import libraries from material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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
import { AuthContext } from '../../context/AuthContext';
import Alert from '@mui/material/Alert';

// import our components
import { AlertError } from "../views/AlertError";
import { AlertSuccess } from "../views/AlertSuccess";
// import libraries
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8080/route';

const theme = createTheme();

const SignUp = () => {

        const initialFormData = {
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                user_password: ""
        };

        const [formData, setFormData] = useState(initialFormData);
        const [formSuccess, setFormSuccess] = useState("");
        const [formErrors, setFormErrors] = useState([]);
        const [showPassword, setShowPassword] = useState(false);
        const { user, signUp } = useContext(AuthContext);
        const [firtNameError, setFirstNameError] = useState(false);
        const [lastNameError, setLastNameError] = useState(false);
        const [emailError, setEmailError] = useState(false);
        const [phoneError, setPhoneError] = useState(false);
        const [passwordError, setPasswordError] = useState(false);
        const [textErr, setText] = useState("");
        const [flag, setFlag] = useState(false);

        const navigate = useNavigate();

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
                setFlag(true)
                setFirstNameError(false)
                setLastNameError(false)
                setEmailError(false)
                setPasswordError(false)
                setPhoneError(false)
                if (err.response.data && err.response.data.errors) {
                        // Handle validation errors
                        const errors = err.response.data.errors

                        let errMsg = "";
                        
                        if(errors.length>1){
                                for (let error of errors) {
                                        // const { msg } = error;
                                        const errorMsg = error.msg
                                        console.log(error.param)
                                        if(error.param === "first_name"){
                                                setFirstNameError(true);
                                                errMsg +=`${errorMsg}\n`
                                        }
                                        else if(error.param === "last_name"){
                                                setLastNameError(true);
                                                errMsg +=`${errorMsg}\n`

                                        }
                                        else if(error.param === "email"){
                                                setEmailError(true);
                                                errMsg +=`${errorMsg}\n`
                                        }
                                        else if(error.param==="user_password"){
                                                setPasswordError(true);
                                                errMsg += `${errorMsg}\n`;
                                        }
                                        //phone number
                                        else{
                                                setPhoneError(true);
                                                errMsg +=`${errorMsg}\n`
                                        }
                                }
                                
                                
                        }
                        else{
                                if(errors[0].param === "first_name"){
                                        setFirstNameError(true);
                                }
                                else if(errors[0].param === "last_name"){
                                        setLastNameError(true);
                                }
                                else if(errors[0].param === "email"){
                                        setEmailError(true);
                                }
                                else if(errors[0].param==="user_password"){
                                        setPasswordError(true);
                                }
                                //phone number
                                else{
                                        setPhoneError(true);
                                }
                                errMsg=errors[0].msg
                        }
                        setText(errMsg)
                } else {
                        // Handle generic error
                        setText(["אופס! משהו השתבש"]);

                }
        };

        const handleSubmit = async (e) => {
                e.preventDefault();

                setFirstNameError(!formData.first_name);
                setLastNameError(!formData.last_name);
                setPasswordError(!formData.user_password);
                setEmailError(!formData.email);

                if (!formData.first_name || !formData.last_name || !formData.user_password || !formData.email) {
                        setText("אוי! נראה שחלק מהשדות ריקים")
                        setFlag(true)
                        return
                      }

                try {
                        // Send POST request
                        await axios.post("/userSignUp", formData).then((response) => {
                                if (response.data.message === "User already exists") {
                                        setFlag(true)
                                        return setText("אוי! נראה שהמשתמש כבר קיים במערכת");

                                } else {
                                        signUp(formData.first_name, formData.last_name, formData.email, formData.phone_number, formData.password);
                                        console.log(`User found, name: ${formData.first_name} ${formData.last_name} `);
                                        //setFormSuccess(`User found, name: ${response.data.first_name} ${response.data.last_name} `);
                                        return navigate("/SignIn");
                                }
                        });

                        // Reset form data
                        // setFormData(initialFormData);
                } catch (err) {
                        handleErrors(err);
                        // console.log(err.message);
                }
        };

        return (
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  הרשמה לאתר
                </Typography>

                {flag && (
                  <div>
                    <br></br>
                    <br></br>{" "}
                    <Alert severity="error" sx={{ whiteSpace: "pre-line" }}>
                      {textErr}
                    </Alert>
                  </div>
                )}

                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
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
                        autoComplete="given-name"
                        name="first_name"
                        required
                        fullWidth
                        id="firstName"
                        label="שם פרטי"
                        autoFocus
                        error={firtNameError}
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                        required
                        fullWidth
                        id="lastName"
                        label="שם משפחה"
                        name="last_name"
                        autoComplete="family-name"
                        error={lastNameError}
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
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
                        required
                        fullWidth
                        id="email"
                        label="כתובת אימייל"
                        name="email"
                        autoComplete="email"
                        error={emailError}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        sx={{
                          width: "50ch",
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
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          סיסמא
                        </InputLabel>
                        <OutlinedInput
                          required
                          spellCheck="false"
                          margin="dense"
                          fullWidth
                          name="user_password"
                          label="סיסמא"
                          autoComplete="current-password"
                          error={passwordError}
                          value={formData.user_password}
                          onChange={handleChange}
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
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
                        dir="ltr"
                        fullWidth
                        id="phone_number"
                        label="(אופציונלי) מספר טלפון"
                        name="phone_number"
                        error={phoneError}
                        autoComplete="phone"
                        value={formData.phone_number}
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
                      <Link to="/SignIn" variant="body2">
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