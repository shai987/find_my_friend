//good article - https://programmingfields.com/redirect-to-component-with-props-using-usenavigate-hook/
import React, {forwardRef ,useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../assets/css/Slider.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8080/route';

//import {BSON} from 'bson';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SimillarityResult = () => {
  const location = useLocation();
  const [userDetails, setUser] = useState({email: "", first_name: "", last_name: ""});
  const [response, setResponse] = useState("");

  const [open, setOpen] = useState(false);

  const [results] = useState(location.state.similarPets);
  console.log(results);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = results.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, results]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const handleClick = async (e) => {
    //e.preventDefault();
    //let formData = new FormData();
    //formData.append('file', image.data);
    setOpen(true);
    try {
            // const res = await axios.post('http://127.0.0.1:8080/route/add', formData);
            const res = await axios.post('/conactParents', userDetails.email); 
            setResponse(res.data);
            console.log(res.data);
            setUser(res.data);
    } catch (err) {
            console.log(err);
    }
};

const handleClose = () => {
setOpen(false);
};

  // <img src={`data:image/png;base64,${location.state.similarPets[0].img.data}`} />

  return (
    <section className="section">
      <div className="title">
        <h2>התוצאות שחזרו</h2>
      </div>
      <div className="section-center">
        {results.map((item, indexResults) => {
          console.log(indexResults)
          console.log(item)
          let {
            petName,
            petType,
            petGender,
            petBreeds,
            location,
            img,
            note,
            userEmail
          } = item;
          userDetails.email = userEmail;
          //setUser(userDetails);

          let position = "nextSlide";
          if (indexResults === index) {
            position = "activeSlide";
          }
          if (
            indexResults === index -1 ||
            (index === 0 && indexResults === results.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={`basicArticle ${position}`} key={indexResults}>
              {/*<img src={`data:image/png;base64,${img.data}`} alt={petName} className="person-img"/>*/}
              <h4>{petName}</h4>
              <p className="text">{petType}</p>
              <p className="text">{petGender}</p>
              <p className="text">{petBreeds}</p>
              <p className="text">{location}</p>
              <p className="text">{note}</p>
              <div>
                        <Button onClick={handleClick}>
                                צור קשר
                        </Button>
                        <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                        >
                                <DialogTitle>{`שם: ${userDetails.first_name} ${userDetails.last_name}`}</DialogTitle>
                                {userDetails.phone_number&&
                                 <DialogTitle>{`טלפון: ${userDetails.phone_number}`}</DialogTitle>
                                }
                                
                         </Dialog>
                </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fa fa-angle-double-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fa fa-angle-double-right" />
        </button>
      </div>
    </section>

    /*<div>{location.state.similarPets[0].petName}     
                <img src={`data:image/png;base64,${location.state.similarPets[0].img.data}`} />          
                </div>*/
  );
};
export default SimillarityResult;




/*
const staticSliders = [
    {
      name: 'Slider 1'
    },
    {
      name: 'Slider 2'
    },
    {
      name: 'Slider 3'
    },
  ];

  const [sliders] = useState(staticSliders);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    sliders.length > 1 &&
      setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
      }, 6000); 
// % moves to the beginning of the array when it reaches the end of the array
    return () => clearInterval();
  }, [sliders.length]); 
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
  console.log(sliders[currentIndex]);

  return (
    <>
   <div className="con">
      <div>
        {sliders.length > 1 && (
          <button onClick={nextSlide} className="right-button"><i className="fa fa-angle-double-right" /></button>
        )}
        </div>
        <div>
        {sliders.length > 0 && (
          <div>
            <h2>{sliders[currentIndex].name}</h2>
          </div>
        )}
        </div>
        <div>
        {sliders.length > 1 && (
          <button onClick={prevSlide}  className="left-button"><i className="fa fa-angle-double-left" /></button>
        )}
      </div>
   </div>
    </>
  );


*/



