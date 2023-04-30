// import react-router-dom
import { Link,useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from "react";

// import css
import '../../assets/css/basic.css';
import '../../assets/css/UserStatus.css';
import UserContext from "../../context/UserContext";


const UserStatus = () => {

        const { user } = useContext(UserContext)
        const navigate = useNavigate();

        useEffect(() => {
                if (user.email) {
                  navigate('/RequestStatus');
                }
        }, [user, navigate]);


        return (
                <>
                        <div id='test'>
                                <button>
                                        <Link className='link' to='/SignUp'>חדש</Link>
                                </button>
                                <br />

                                <button>
                                        <Link className='link' to='/SignIn'>קיים</Link>
                                </button>
                        </div>
                </>
        );
}

export default UserStatus;