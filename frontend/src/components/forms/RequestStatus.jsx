// קונטקסט - משתמש נכנס כבר היום/לא
// במידה ולא - מעבר לטופס כניסה
// במידה וכן - מעבר לקומפוננטה הבאה

// update status - context

// import react-router-dom
import { Link } from 'react-router-dom';

const RequestStatus = () => {

        return (
                <>
                        <div>
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