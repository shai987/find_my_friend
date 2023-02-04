// import react-router-dom
import {
        BrowserRouter as Router,
        Routes,
        Navigate,
        Route,
        Link
} from 'react-router-dom';
// import libraries from material-ui
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import our components
import HomepageContainer from '../components/homePage/HomepageContainer';
import UserAccount from '../components/navBar/UserAccount';
import ContactUs from '../components/navBar/ContactUs';
import About from '../components/navBar/About';
import Footer from '../components/footer/Footer';
import LogOut from '../components/navBar/LogOut';
import Image from '../components/Image';
import FindMyPetBreeds from '../components/navBar/FindMyPetBreeds';
import UserStatus from '../components/forms/UserStatus';
import SignIn from '../components/forms/SignIn';
import SignUp from '../components/forms/SignUp';
import RequestStatus from '../components/forms/RequestStatus';
import ImageForm from '../components/forms/ImageForm';
// import PetDetails from '../components/forms/PetDetails';

// import css
import '../assets/css/MyRouter.css';

const MyRouter = () => {
        const pages = ["אודות", "צור קשר", "אזור משחקים", "צא לדרך", "RequestStatus"];
        const settings = ["אזור אישי", "התנתקות"];

        const image = {
                src: require('../assets/images/dog.jpg'),
                alt: "dog_image",
                title: "חזרה לדף הבית",
                style: {
                        height: '50px',
                        width: '50px',
                        borderRadius: '50%',
                        border: '2px solid #333',
                        backgroundColor: '#fff',
                        color: 'blue',
                        cursor: 'pointer',
                }
        }

        const [nav, setNav] = useState(null);
        const [user, setUser] = useState(null);

        const handleOpenUserMenu = (event) => {
                setUser(event.currentTarget);
        };

        const handleCloseNavMenu = () => {
                setNav(null);
        };

        const handleCloseUserMenu = () => {
                setUser(null);
        };

        //לכפתור התנתקות
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
                setOpen(true);
        };

        return (
                <>
                        <Router>
                                {/* sticky position allows the menu to be displayed even when scrolling */}
                                <AppBar className="appBar" position="sticky">
                                        <Container maxWidth="xl" sx={{ mr: '2px', ml: '2px', display: 'grid' }}>
                                                <Toolbar disableGutters>
                                                        <Link to='/'>
                                                                <Image img={image} />
                                                        </Link> &nbsp; &nbsp;

                                                        {pages.map((page) => (
                                                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                                        <Link className='link' to={`/${page}`}>
                                                                                <Button
                                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                                >
                                                                                        {page}
                                                                                </Button>
                                                                        </Link>
                                                                </MenuItem>
                                                        ))}

                                                        <div id='iconPosition'>
                                                                <Tooltip title="הגדרות" sx={{ position: 'relative' }}>
                                                                        <IconButton onClick={handleOpenUserMenu} sx={{
                                                                                p: 0, mr: 'auto', ml: 'auto', display: "block", position: 'absolute', left: '0px',
                                                                        }}>
                                                                                <Avatar alt="Shaika" src={require("../assets/images/Shaika.jpg")} />
                                                                        </IconButton>
                                                                </Tooltip>
                                                        </div>

                                                        <Menu
                                                                sx={{ mt: "45px" }}
                                                                id="menu-appbar"
                                                                anchorEl={user}
                                                                anchorOrigin={{
                                                                        vertical: "top",
                                                                        horizontal: "right",
                                                                }}
                                                                keepMounted
                                                                transformOrigin={{
                                                                        vertical: "top",
                                                                        horizontal: "right",
                                                                }}
                                                                open={Boolean(user)}
                                                                onClose={handleCloseUserMenu}
                                                        >
                                                                {settings.map((setting) => (
                                                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                                                <Link className='link' to={`/${setting}`}>
                                                                                        <Typography sx={{ color: "black" }}> {setting}</Typography>
                                                                                </Link>
                                                                        </MenuItem>
                                                                ))}
                                                        </Menu>
                                                </Toolbar>
                                        </Container>
                                </AppBar>
                                <Routes>
                                        <Route path='/' element={<HomepageContainer />}></Route>
                                        <Route path='/אזור אישי' element={<UserAccount />}></Route>
                                        <Route path='/צור קשר' element={<ContactUs />}></Route>
                                        <Route path='/אודות' element={<About />}></Route>
                                        <Route path='/התנתקות' element={<LogOut />}></Route>
                                        <Route path='/אזור משחקים' element={<FindMyPetBreeds />}></Route>
                                        <Route path='/צא לדרך' element={<UserStatus />}></Route>
                                        <Route path='/SignIn' element={<SignIn />}></Route>
                                        <Route path='/SignUp' element={<SignUp />}></Route>
                                        <Route path='/RequestStatus' element={<RequestStatus />}></Route>
                                        <Route path='/ImageForm' element={<ImageForm />}></Route>
                                        {/* <Route path='/PetDetails' element={<PetDetails />}></Route> */}

                                        {/* If the user go to not exsist path it would take him back to "/" */}
                                        <Route path="*" element={<Navigate to="/" />}></Route>
                                </Routes>
                        </Router >
                        <Footer />
                </>
        );
}

export default MyRouter;
