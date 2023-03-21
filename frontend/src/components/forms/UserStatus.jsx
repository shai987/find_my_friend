// import react-router-dom
import { Link } from 'react-router-dom';
// import css
import '../../assets/css/basic.css';
import '../../assets/css/UserStatus.css';

const UserStatus = () => {

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