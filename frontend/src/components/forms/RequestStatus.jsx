// קונטקסט - משתמש נכנס כבר היום/לא
// במידה ולא - מעבר לטופס כניסה
// במידה וכן - מעבר לקומפוננטה הבאה

// update status - context

// import react-router-dom
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect } from 'react';

const RequestStatus = () => {
        const { user } = useContext(AuthContext);
        const navigate = useNavigate();

        useEffect(() => {
                if (!user.email) {
                        navigate('/UserStatus');
                }
        }, [user, navigate]);

        return (
                <>
                        <div>
                                <h1>hi {user.first_name}</h1>
                                <button>
                                        <Link className='link' to='/ImageForm' state={{ status: "lost" }}>איבדתי</Link>
                                </button>
                                <br />

                                <button>
                                        <Link className='link' to='/ImageForm' state={{ status: "found" }}>מצאתי</Link>
                                </button>
                        </div>
                </>
        );
}

export default RequestStatus;