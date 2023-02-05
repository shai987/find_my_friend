// import react-router-dom
import { Link } from 'react-router-dom';

import '../../assets/css/basic.css';
const UserStatus = () => {

        return (
                <>
                        <div>
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