import { useState } from "react";
import axios from "axios";

import { AlertError } from "../views/AlertError";
import { AlertSuccess } from "../views/AlertSuccess";
axios.defaults.baseURL = "http://127.0.0.1:8080/route";

const PetDetails = (props) => {

  const {pet_type, pet_breeds} = props;
  const initialFormData = {
    petName: "",
    petType: "",
    petGender: "",
    petBreeds: "",
    location: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSuccess, setFormSuccess] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request
      const res = await axios.post("/add", formData);
      // HTTP req successful
      setFormSuccess("Data received correctly");

      // Reset form data
      setFormData(initialFormData);
    } catch (err) {
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
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h1>טופס מילוי פרטים</h1>
        <AlertSuccess success={formSuccess} />
        <AlertError errors={formErrors} />
        <div>
          {/*רק למי שאיבד חיה context ==="lost"? <input type=text>*/}
          <label htmlFor="">שם החיה</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onInput={handleChange}
          />
        </div>
        <div>
           <p>סוג החיה</p>     
          <label htmlFor="">חתול</label>
          <input
            type="radio"
            name="petType"
            value={formData.petType}
            onInput={handleChange}
            checked={pet_type==="cat"? true: false} 
          />
          <label htmlFor="">כלב</label>
          <input
            type="radio"
            name="petType"
            value={formData.petType}
            onInput={handleChange}
            checked={pet_type==="dog"? true: false} 
          />
        </div>
        <div>
          <p>מין החיה</p>
          <label htmlFor="">נקבה</label>
          <input
            type="radio"
            name="petGender"
            value={formData.age}
            onInput={handleChange}
          />
          <label htmlFor="">זכר</label>
          <input
            type="radio"
            name="petGender"
            className="input"
            value={formData.age}
            onInput={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">גזע החיה</label>
          <textarea cols="30" rows="10"
            name="petBreeds"
            value={pet_breeds}
            onInput={handleChange}
          />
        </div>
        <div>
          {/*context==="lost"? מיקום גאוגרפי בו נמצא : מיקום גאוגרפי בו אבד*/}
          <label htmlFor="">מיקום גיאוגרפי</label>
          <input
            type="text"
            name="location"
            className="input"
            value={formData.location}
            onInput={handleChange}

          />
        </div>
        <input type="submit" className="button" value="שלח" />
      </form>
    </div>
  );
};

export default PetDetails;
