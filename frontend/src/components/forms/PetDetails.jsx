import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AlertError } from "../views/AlertError";
import { AlertSuccess } from "../views/AlertSuccess";
import Loader from '../Loader';
import UserContext from "../../context/UserContext";

axios.defaults.baseURL = "http://127.0.0.1:8080/route";

const PetDetails = (props) => {
  // להוסיף useEffect שמטרתו לשאול את המשתמש אם הוא בטוח שברצונו לצאת מהדף מבלי לשלוח את הטופס. אם כן למחוק את המסמך מהמונגו.
  const { user } = useContext(UserContext)
  const { pet_type, pet_breeds } = props;
  const initialFormData = {
    userEmail: user.email,
    petName: "",
    petType: pet_type,
    petGender: "",
    petBreeds: pet_breeds,
    location: "",
    note: "",
    status: user.status
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSuccess, setFormSuccess] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [similarPets, setSimilarPets] = useState([]);
  //const [message, setMessage] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (loading) { <Loader /> }
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
        navigate('/SimillarityResult', {
          state: {
            similarPets: res.data
          }
        })
      }
      else {
        navigate('/NoResults')
      }
    } catch (err) {
      setLoading(false);
      handleErrors(err);
    }
  }

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
    <>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <h1>טופס מילוי פרטים</h1>
          <AlertSuccess success={formSuccess} />
          <AlertError errors={formErrors} />
          <div>
            {/*אם found אז שם חיה לא חובה*/}
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
            <textarea disabled cols="20" rows="10"
              name="petBreeds"
              value={formData.petBreeds}
              onInput={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">{user.status === "lost" ? "המקום בו אבד" : "המקום בו נמצא"}</label>
            <input
              type="text"
              name="location"
              className="input"
              value={formData.location}
              onInput={handleChange}

            />
            <div>
              <label htmlFor="">הערות</label>
              <textarea cols="20" rows="10"
                name="note"
                value={formData.note}
                onInput={handleChange}
              />
            </div>
          </div>
          <input type="submit" className="button" value={user.status === "lost" ? "תמצא לי את הילד" : "חפש את ההורים"} />
        </form>
      </div>
    </>
  );
};

export default PetDetails;
