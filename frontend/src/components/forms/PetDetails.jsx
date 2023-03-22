import { useState } from "react";
import axios from "axios";

import { AlertError } from "../views/AlertError";
import { AlertSuccess } from "../views/AlertSuccess";
axios.defaults.baseURL = "http://127.0.0.1:8080/route";

const PetDetails = (props) => {
  // להוסיף useEffect שמטרתו לשאול את המשתמש אם הוא בטוח שברצונו לצאת מהדף מבלי לשלוח את הטופס. אם כן למחוק את המסמך מהמונגו.
  const { pet_type, pet_breeds, documentID } = props;
  const initialFormData = {
    documentID: documentID,
    petName: "",
    petType: pet_type,
    petGender: "",
    petBreeds: pet_breeds,
    location: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSuccess, setFormSuccess] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request
      const res = await axios.post("/petDetails", formData);
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
            value="cat"
            checked={formData.petType === "cat"}
            onChange={handleChange}

          />
          <label htmlFor="">כלב</label>
          <input
            type="radio"
            name="petType"
            value="dog"
            checked={formData.petType === "dog"}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>מין החיה</p>
          <label htmlFor="">נקבה</label>
          <input
            type="radio"
            name="petGender"
            value="F"
            onChange={handleChange}
          />
          <label htmlFor="">זכר</label>
          <input
            type="radio"
            name="petGender"
            className="input"
            value="M"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">גזע החיה</label>
          <textarea cols="30" rows="10"
            name="petBreeds"
            value={formData.petBreeds}
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
        <input type="submit" className="button" value="תמצא לי את  החיה" />
      </form>
    </div>
  );
};

export default PetDetails;
