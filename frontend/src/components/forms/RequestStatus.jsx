// קונטקסט - משתמש נכנס כבר היום/לא
// במידה ולא - מעבר לטופס כניסה
// במידה וכן - מעבר לקומפוננטה הבאה

// update status - context

// import react-router-dom
import { Link } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import { useContext } from 'react';

const RequestStatus = () => {
        const { user } = useContext(UserContext);
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