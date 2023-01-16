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
import RonShai from '../components/RonShai';
import Shai from '../components/Shai';
import ShaiNew from '../components/ShaiNew';


// import css
import '../assets/css/MyRouter.css';

const MyRouter = () => {
        const pages = ["אודות", "צור קשר", "רון שי", "s", "as"];
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

                                                        {/* <Link className='link' to='/UserAccount'>
                                                                <Button
                                                                        onClick={handleCloseNavMenu}
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        {pages[]} &nbsp;
                                                                </Button>
                                                        </Link> */}

                                                        <Link className='link' to='/About'>
                                                                <Button
                                                                        onClick={handleCloseNavMenu}
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        {pages[0]} &nbsp;
                                                                </Button>
                                                        </Link>

                                                        <Link className='link' to='/ContactUs'>
                                                                <Button
                                                                        onClick={handleCloseNavMenu}
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        {pages[1]}
                                                                        &nbsp;&nbsp;
                                                                </Button>
                                                        </Link>

                                                        <Link className='link' to='/RonShai'>
                                                                <Button
                                                                        onClick={handleCloseNavMenu}
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        {pages[2]}
                                                                        &nbsp;&nbsp;
                                                                </Button>
                                                        </Link>
                                                        <Link className='link' to='/Shai'>
                                                                <Button
                                                                        onClick={handleCloseNavMenu}
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        {pages[3]}
                                                                        &nbsp;&nbsp;
                                                                </Button>
                                                        </Link>

                                                        <Link className='link' to='/ShaiNew'>
                                                                <Button
                                                                        onClick={handleCloseNavMenu}
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        {pages[4]}
                                                                        &nbsp;&nbsp;
                                                                </Button>
                                                        </Link>


                                                        <Tooltip title="הגדרות" sx={{ position: 'relative' }}>
                                                                <IconButton onClick={handleOpenUserMenu} sx={{
                                                                        p: 0, mr: 'auto', ml: 'auto', display: "block", position: 'absolute', left: '0px',
                                                                }}>
                                                                        <Avatar alt="Shaika" src={require("../assets/images/Shaika.jpg")} />
                                                                </IconButton>
                                                        </Tooltip>

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
                                                                <MenuItem onClick={handleCloseUserMenu}>
                                                                        <Link className='link' to='/UserAccount'>
                                                                                <Typography textAlign="center">{settings[0]}</Typography>
                                                                        </Link>
                                                                </MenuItem>

                                                                <MenuItem onClick={handleCloseUserMenu}>
                                                                        <Link className='link' to='/LogOut'>
                                                                                <Typography textAlign="center">{settings[1]}</Typography>
                                                                        </Link>
                                                                </MenuItem>
                                                        </Menu>
                                                </Toolbar>
                                        </Container>
                                </AppBar>
                                <Routes>
                                        <Route path='/' element={<HomepageContainer />}></Route>
                                        <Route path='/UserAccount' element={<UserAccount />}></Route>
                                        <Route path='/ContactUs' element={<ContactUs />}></Route>
                                        <Route path='/About' element={<About />}></Route>
                                        <Route path='/LogOut' element={<LogOut />}></Route>
                                        <Route path='/RonShai' element={<RonShai />}></Route>
                                        <Route path='/Shai' element={<Shai />}></Route>
                                        <Route path='/ShaiNew' element={<ShaiNew />}></Route>

                                        {/* If the user go to not exsist path it would take him back to "/" */}
                                        <Route path="*" element={<Navigate to="/" />}></Route>
                                </Routes>
                        </Router >
                        <Footer />
                </>
        );
}

export default MyRouter;
