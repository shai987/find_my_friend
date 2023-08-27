import { forwardRef, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Box from '@mui/material/Box';
import axios from "axios";
import "../../assets/css/Similarity2.css";
import { AuthContext } from '../../context/AuthContext';
import { Buffer } from "buffer";

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SimillarityResults = () => {
  const location = useLocation();
  const [userDetails, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
  });
  const [fail, setFail] = useState(false);

  const [sliders] = useState(location.state.similarPets);
  console.log(sliders);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    sliders.length > 1 &&
      setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
      }, 6000);
    // % moves to the beginning of the array when it reaches the end of the array
    return () => clearInterval();
  }, []);
  // whenever there's a change in the length of the results the setinterval is executed

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };
  // % for returning to the beginning when it reaches the end of the array

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliders.length - 1 : prevIndex - 1
    );
  };
  // if the first item is presented move to the last item of the array
  const handleClick = async (e) => {
    //e.preventDefault();
    //let formData = new FormData();
    //formData.append('file', image.data);
    setOpen(true);
    try {
      // const res = await axios.post('http://127.0.0.1:8080/route/add', formData);
      console.log(sliders[currentIndex].userEmail);
      const res = await axios.post('/conactParents', { email: sliders[currentIndex].userEmail });
      console.log(res.data);
      if (res.data === "user not found") {
        setFail(true);
      }
      else {
        setUser(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <article className="con">
        <div>

          {sliders.length > 1 && (
            <button onClick={nextSlide} className="right-button"><i className="fa fa-angle-double-right" /></button>
          )}
        </div>
        <div>
          {sliders.length > 0 && (
            <div>
              <img
                src={`data:${sliders[currentIndex].img.contentType};base64,${Buffer.from(sliders[currentIndex].img.data.data).toString('base64')}`}
                title={sliders[currentIndex].petName}
                alt={sliders[currentIndex].petName}
                className="person-img"
                width="30"
              />
              <h2>{sliders[currentIndex].petName}</h2>
              <p>סוג החיה: {sliders[currentIndex].petType == "dog" ? "כלב" : "חתול"}</p>
              <p >מין: {sliders[currentIndex].petGender == "M" ? "זכר" : "נקבה"}</p>
              <pre>גזע: {sliders[currentIndex].petBreeds}</pre>
              <p> מיקום: {sliders[currentIndex].location} </p>
              {sliders[currentIndex].note && <p >{sliders[currentIndex].note}</p>}
              <div>
                <Button onClick={handleClick}>
                  צור קשר
                </Button>
                {fail ?
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description">
                    <DialogTitle>פרטי המשתמש לא נמצאו</DialogTitle>
                  </Dialog> :
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>{`שם: ${userDetails.first_name} ${userDetails.last_name}`}</DialogTitle>
                    <DialogTitle>{`דוא"ל: `}
                      <a href={`mailto:${userDetails.email}`}>{userDetails.email}</a>
                    </DialogTitle>
                    {userDetails.phone_number &&
                      <DialogTitle>{`טלפון: `}
                        <a href={`tel:${userDetails.phone_number}`}>{userDetails.phone_number}</a>
                      </DialogTitle>
                    }
                  </Dialog>
                }

              </div>
            </div>
          )}
        </div>
        <div>
          {sliders.length > 1 && (
            <button onClick={prevSlide} className="left-button"><i className="fa fa-angle-double-left" /></button>
          )}
        </div>
      </article>
      <br></br>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {user.isLoggedIn && <Link to='/UserAccount'>
          <Button variant="contained" >למעבר לאזור האישי</Button>
        </Link>}
      </Box >
    </>
  )

};

export default SimillarityResults;
