// קונטקסט - משתמש נכנס כבר היום/לא
// במידה ולא - מעבר לטופס כניסה
// במידה וכן - מעבר לקומפוננטה הבאה

// import react-router-dom
import { Link } from 'react-router-dom';

const RequestStatus = () => {

        return (
                <>
                        <div>
                                <button>
                                        <Link className='link' to='/ImageForm'>איבדתי</Link>
                                </button>
                                <br />

                                <button>
                                        <Link className='link' to='/ImageForm'>מצאתי</Link>
                                </button>
                        </div>
                </>
        );
}

export default RequestStatus;