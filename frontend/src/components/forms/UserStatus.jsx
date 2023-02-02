// import react-router-dom
import { Link } from 'react-router-dom';

const UserStatus = () => {

        return (
                <>
                        <div>
                                <button>
                                        <Link className='link' to='/SignIn'>חדש</Link>
                                </button>
                                <br />

                                <button>
                                        <Link className='link' to='/SignUp'>קיים</Link>
                                </button>
                        </div>
                </>
        );
}

export default UserStatus;