import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const UserStatus = () => {

        return (
                <>
                        <div>
                                {/* <button>חדש */}
                                <Typography className='he' variant="body1">
                                        <Link className='try' href="/SignIn" underline="none" rel="noopener noreferrer">
                                                {/* <a href="/FindMyPetBreeds"></a> */}
                                                SignIn
                                        </Link>
                                </Typography>
                                {/* </button> */}
                                <br />
                                {/* <button>קיים */}
                                {/* <a href="/SignUp"></a> */}
                                <Typography className='he' variant="body1">
                                        <Link className='try' href="/SignUp" underline="none" rel="noopener noreferrer">
                                                {/* <a href="/FindMyPetBreeds"></a> */}
                                                SignUp
                                        </Link>
                                </Typography>
                                {/* </button> */}
                        </div>
                </>
        );
}

export default UserStatus;