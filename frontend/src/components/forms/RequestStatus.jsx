// קונטקסט - משתמש נכנס כבר היום/לא
// במידה ולא - מעבר לטופס כניסה
// במידה וכן - מעבר לקומפוננטה הבאה

// update status - context

// import react-router-dom
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UserRequestContext } from '../../context/UserRequestContext';
import { useContext, useEffect } from 'react';

const RequestStatus = () => {
        const { user } = useContext(AuthContext);
        const {request, updateStatus} = useContext(UserRequestContext);
        const navigate = useNavigate();

        useEffect(() => {
                if (!user.email) {
                        navigate('/UserStatus');
                }
        }, [user, navigate]);

        return (
                <>
                        <div>
                                <button>
                                        <Link className='link' to='/ImageForm' onClick={updateStatus("lost")} state={{ status: "lost" }}>איבדתי</Link>
                                </button>
                                <br />

                                <button>
                                        <Link className='link' to='/ImageForm' onClick={updateStatus("found")} state={{ status: "found" }}>מצאתי</Link>
                                </button>
                        </div>
                </>
        );
}

export default RequestStatus;