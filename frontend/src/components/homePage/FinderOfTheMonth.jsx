import { useEffect, useState } from "react";
import axios from 'axios';
import '../../assets/css/FinderOfTheMonth.css';
import Avatar from "@mui/material/Avatar";

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
                                <article>
                                        < Avatar
                                                alt="d"
                                                sx={{ width: '250px', height: '250px', my: -1.5, backgroundColor: '#FF8A00', border: '2px solid #fff', mr: 'auto', ml: 'auto' }}
                                                src={`https://anonymous-animals.azurewebsites.net/avatar/:${userWithMostFoundPets.userEmail}`} />
                                        <br />
                                        {userWithMostFoundPets.userEmail} מצא הכי הרבה חיות (
                                        {userWithMostFoundPets.foundPetsCount} חיות נמצאו).
                                </article>
                        ) : (
                                <p>טוען...</p>
                        )}
                        {errMassage && <p>{errMassage}</p>}
                </div>
        );
}
export default FinderOfTheMonth;