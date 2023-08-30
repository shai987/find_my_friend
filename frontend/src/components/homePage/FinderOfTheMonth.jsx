import { useEffect, useState } from "react";
import axios from 'axios';
import '../../assets/css/FinderOfTheMonth.css';
axios.defaults.baseURL = 'http://127.0.0.1:8080/route';

const FinderOfTheMonth = () => {
        const [userWithMostFoundPets, setUserWithMostFoundPets] = useState(null);
        const [errMassage, setErrMassage] = useState("");

        const fetchData = async () => {
                try {
                        const response = await axios.get("/MostFoundPets");
                        setUserWithMostFoundPets(response.data);
                } catch (err) {
                        setErrMassage(err.message);
                        console.log(err);
                }
        }

        useEffect(() => {
                fetchData();
        }, []);

        return (
                <div className='divFind'>
                        <h2 className="h2Class">מוצא החודש🏆</h2>
                        {userWithMostFoundPets ? (
                                <p>
                                        {userWithMostFoundPets._id} מצא הכי הרבה חיות (
                                        {userWithMostFoundPets.foundPetsCount} חיות נמצאו).
                                </p>
                        ) : (
                                <p>טוען...</p>
                        )}
                        {errMassage && <p>{errMassage}</p>}
                </div>
        );
}
export default FinderOfTheMonth;