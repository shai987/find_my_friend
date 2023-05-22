import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PetsIcon from "@mui/icons-material/Pets";
import Avatar from "@mui/material/Avatar";
import { AuthContext } from "../../context/AuthContext";
import { UserRequestContext } from "../../context/UserRequestContext";
import Alert from '@mui/material/Alert';

axios.defaults.baseURL = "http://127.0.0.1:8080/route";

const PetDetails2 = (props) => {
  const theme = createTheme();
  /*const onSubmit = (e) => {
      e.preventDefault()
      const { name, email, message, radio } = e.target.elements
    }*/

  const { user } = useContext(AuthContext);
  const { request } = useContext(UserRequestContext);
  const { pet_type, pet_breeds } = props;

  const initialFormData = {
    userEmail: user.email,
    petName: "",
    petType: pet_type,
    petGender: "",
    petBreeds: pet_breeds,
    location: "",
    note: "",
    status: request.status,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSuccess, setFormSuccess] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [textErr, setText] = useState("");
  //const [similarPets, setSimilarPets] = useState([]);
  //const [message, setMessage] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate('/UserStatus');
    }
  }, [user, navigate]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.petName || !formData.location || !formData.petGender) {
      if (!formData.petName) {
        setText("אוי, נראה ששכחת להזין שם חיה")
        setNameErr(true)
      }
      else if (!formData.location) {
        setText("אוי, נראה ששכחת להזין מיקום")
        setLocationError(true)
      }
      else if (!formData.petGender) {
        setText("אוי, נראה ששכחת להזין את מין החיה")
        setGenderError(true)
      }
      setFlag(true)
      return
    }

    setLoading(true);
    if (loading) {
      <Loader />;
    }

    try {
      // Send POST request
      const res = await axios.post("/petDetails", formData);
      // HTTP req successful
      setFormSuccess("Data received correctly");

      // Reset form data
      setFormData(initialFormData);
      if (res.data.length !== 0) {
        //setSimilarPets(res.data);
        //setMessage("V")
        console.log(res.data);
        navigate("/SimillarityResult2", {
          state: {
            similarPets: res.data,
          },
        });
      } else {
        navigate("/NoResults", {
          state: {
            petType: pet_type,
          },
        });
      }
    } catch (err) {
      setLoading(false);
      handleErrors(err);
    }
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });  
    setFormErrors([]);
    setFormSuccess("");
  };

  return (
    <article dir="rtl">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xs">
          <Box
            sx={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <PetsIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              מילוי פרטים מזהים
            </Typography>
            {flag && <div><br></br><br></br> <Alert severity="error">{textErr}</Alert></div>}


            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >

              <TextField
                sx={{
                  "& label": {
                    left: "unset",
                    right: "1.75rem",
                    transformOrigin: "right",
                  },
                  "& legend": {
                    textAlign: "right",
                    fontSize: "0.7rem",
                  },
                }}
                error={nameErr}
                margin="normal"
                required
                fullWidth
                id="petName"
                label="שם החיה"
                name="petName"
                autoComplete="petName"
                autoFocus
                value={formData.petName}
                onChange={handleChange}
              />

              <FormControl required>
                <FormLabel id="petType">סוג החיה</FormLabel>
                <RadioGroup aria-labelledby="petType" name="petType">
                  <FormControlLabel
                    value="cat"
                    control={<Radio />}
                    checked={formData.petType === "cat"}
                    onChange={handleChange}
                    label="חתול"
                  />
                  <FormControlLabel
                    value="dog"
                    control={<Radio />}
                    checked={formData.petType === "dog"}
                    onChange={handleChange}
                    label="כלב"
                  />
                </RadioGroup>
              </FormControl>
              <br></br>
              <FormControl required>
                <FormLabel id="petGender">מין החיה</FormLabel>
                <RadioGroup aria-labelledby="petGender" name="petGender">
                  <FormControlLabel
                    value="M"
                    control={<Radio />}
                    label="זכר"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="F"
                    control={<Radio />}
                    label="נקבה"
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>

              <TextField
                sx={{
                  "& label": {
                    left: "unset",
                    right: "1.75rem",
                    transformOrigin: "right",
                  },
                  "& legend": {
                    textAlign: "right",
                    fontSize: "0.7rem",
                  },
                }}
                variant="outlined"
                multiline
                rows={3}
                maxRows={8}
                fullWidth
                label="גזע החיה"
                required
                value={formData.petBreeds}
                onChange={handleChange}
                aria-readonly
              />

              <TextField
                sx={{
                  "& label": {
                    left: "unset",
                    right: "1.75rem",
                    transformOrigin: "right",
                  },
                  "& legend": {
                    textAlign: "right",
                    fontSize: "0.7rem",
                  },
                }}
                margin="normal"
                required
                fullWidth
                id="location"
                label={
                  request.status === "lost" ? "המקום בו אבד" : "המקום בו נמצא"
                }
                name="location"
                autoComplete="location"
                autoFocus
                value={formData.location}
                onChange={handleChange}
              />

              <TextField
                sx={{
                  "& label": {
                    left: "unset",
                    right: "1.75rem",
                    transformOrigin: "right",
                  },
                  "& legend": {
                    textAlign: "right",
                    fontSize: "0.65rem",
                  },
                }}
                margin="normal"
                fullWidth
                id="note"
                label="הערות"
                name="note"
                autoComplete="note"
                autoFocus
                value={formData.note}
                onChange={handleChange}
              />
              <br></br> <br></br>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, display: "block", margin: "0 auto", backgroundColor: "hsl(113, 34%, 42%)" }}>
                {request.status === "lost"
                  ? "תמצא לי את הילד"
                  : "חפש את ההורים"}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </article>
  );
};
export default PetDetails2;
