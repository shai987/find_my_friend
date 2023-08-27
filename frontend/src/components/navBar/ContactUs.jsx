import { useState } from "react";
import '../../assets/css/ContactUs.css';
import dog_computer from '../../assets/images/dog_computer.jpg';
import axios from  'axios';
import Alert from '@mui/material/Alert';
axios.defaults.baseURL = 'http://127.0.0.1:8080/route';



const ContactForm = () => {

  const initialFormData = {
    userName: "",
    userEmail: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState('שלח טופס');
  const [textErr, setText] = useState("");
  const [flag, setFlag] = useState(false);
  const [alertType, setAlertType] = useState("")
  


  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('שולח...');

    if(!formData.userName || !formData.userEmail || !formData.message){
      setFlag(true);
      setAlertType("error");
      setText("אוי! אחד מהשדות ריקים")
      return
    }
    const details = {
      userName: formData.userName,
      userEmail: formData.userEmail,
      message: formData.message
    };

    try {
      const response = await axios.post("/contact", details, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });

      setFormStatus('שלח טופס'); // Reset the button text
      const result = response.data;
      setFlag(true);
      setAlertType("success");
      setText("איזה כיף! המייל נשלח בהצלחה!")
      setFormData(initialFormData)
    } catch (error) {
      // Handle error here
      setAlertType("error");
      handleErrors(error);
    }
  };

  const handleErrors = (err) => {
    setFlag(true)
    if (err.response?.data && err.response?.data.errors) {
      // Handle validation errors
      const errors = err.response.data.errors
      
      let errMsg = "";

      if (errors.length > 1) {
        for (let error of errors) {
          // const { msg } = error;
          const errorMsg = error.msg
          console.log(error.param)
          if (error.param === "userName") {
            // setNameError(true);
            errMsg += `${errorMsg}\n`
          }
          else if (error.param === "userEmail") {
            // setGenderError(true);
            errMsg += `${errorMsg}\n`;
          }
          //message
          else {
            //setLocationError(true);
            errMsg += `${errorMsg}\n`;
          }
        }


      }
      else {
        if (errors[0].param === "userName") {
          // setNameError(true);
        } else if (errors[0].param === "userEmail") {
          // setGenderError(true);
        }
        //message
        else {
          // setLocationError(true);
        }
        errMsg = errors[0].msg
      }
      setText(errMsg)
    } else {
      // Handle generic error
      setText(["אופס! משהו השתבש"]);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contactUs" dir="rtl">
      <div className="baner"></div>
      <h1>צור קשר</h1>
      <div className="line"></div>
      <p>
        מוזמנים לפנות אלינו כדי לשתף, לחוות דעה, להעלות בעיות או בכל עניין אחר
      </p>
      <section className="contact_wrapper">
        <div className="form_contact">
          <form onSubmit={onSubmit}>
            {flag && (
              <div>
                <br></br>
                <br></br>{" "}
                <Alert severity={alertType} sx={{ whiteSpace: "pre-line" }}>
                  {textErr}
                </Alert>
                <br></br>
                <br></br>
              </div>
            )}
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="שם"
              required
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="אימייל"
              id="userEmail"
              name="userEmail"
              required
              value={formData.userEmail}
              onChange={handleChange}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="תוכן ההודעה"
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">{formStatus}</button>
          </form>
        </div>
        <div className="dog_image">
          <img width="500" height="300" src={dog_computer} alt="dog_phone" />
        </div>
      </section>
    </div>
  );
};

export default ContactForm;

