// import react-router-dom
import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link
} from 'react-router-dom';
// import libraries from material-ui
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import HomepageContainer from '../components/homePage/HomepageContainer';
import UserAccount from '../components/navBar/UserAccount';
import ContactUs from '../components/navBar/ContactUs';
import About from '../components/navBar/About';
import Footer from '../components/footer/Footer';
import LogOut from '../components/navBar/LogOut';
import Image from '../components/Image';
import NavBar from '../components/navBar/NavBar';

import '../assets/css/MyRouter.css';

const MyRouter = () => {
        const pages = ["אזור אישי", "אודות", "צור קשר"];
        const settings = ["אזור אישי", "התנתקות"];

        const image = {
                src: require('../assets/images/dog.jpg'),
                alt: "dog_image",
                title: "This is a dog img",
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

        const [anchorElNav, setAnchorElNav] = useState(null);
        const [anchorElUser, setAnchorElUser] = useState(null);

        const handleOpenNavMenu = (event) => {
                setAnchorElNav(event.currentTarget);
        };
        const handleOpenUserMenu = (event) => {
                setAnchorElUser(event.currentTarget);
        };

        const handleCloseNavMenu = () => {
                setAnchorElNav(null);
        };

        const handleCloseUserMenu = () => {
                setAnchorElUser(null);
        };

        return (
                <>
                        <Router>
                                <AppBar className="appBar" position="static">
                                        <Container maxWidth="xl" sx={{ mr: 2 }}>
                                                <Toolbar disableGutters>
                                                        <Link to='/'>
                                                                <Typography
                                                                        sx={{
                                                                                display: "block",
                                                                                my: 2, // margin-top
                                                                        }}
                                                                >
                                                                        <Image img={image} />
                                                                </Typography>
                                                        </Link> &nbsp; &nbsp;
                                                        {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}> */}
                                                        <Link className='link' to='/UserAccount'>
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

                                                        <Link className='link' to='/About'>
                                                                <Button
                                                                        onClick={handleCloseNavMenu}
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        {pages[2]} &nbsp;
                                                                </Button>
                                                        </Link>

                                                        <Tooltip title="הגדרות" sx={{ ml: 10 }}>
                                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                                        <Avatar alt="s" src="" />
                                                                </IconButton>
                                                        </Tooltip>

                                                        <Menu
                                                                sx={{ mt: "45px" }}
                                                                id="menu-appbar"
                                                                anchorEl={anchorElUser}
                                                                anchorOrigin={{
                                                                        vertical: "top",
                                                                        horizontal: "right",
                                                                }}
                                                                keepMounted
                                                                transformOrigin={{
                                                                        vertical: "top",
                                                                        horizontal: "right",
                                                                }}
                                                                open={Boolean(anchorElUser)}
                                                                onClose={handleCloseUserMenu}
                                                        >
                                                                <MenuItem onClick={handleCloseUserMenu}>
                                                                        <Link className='link' to='/About'>
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
                                        <Tooltip title="הגדרות" sx={{ ml: 2 }} placement='left-end'>
                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                        <Avatar alt="s" src="" />
                                                </IconButton>
                                        </Tooltip>

                                        <Menu
                                                sx={{ mt: "45px" }}
                                                id="menu-appbar"
                                                anchorEl={anchorElUser}
                                                anchorOrigin={{
                                                        vertical: "top",
                                                        horizontal: "right",
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                        vertical: "top",
                                                        horizontal: "right",
                                                }}
                                                open={Boolean(anchorElUser)}
                                                onClose={handleCloseUserMenu}
                                        >
                                                <MenuItem onClick={handleCloseUserMenu}>
                                                        <Link className='link' to='/About'>
                                                                <Typography textAlign="center">{settings[0]}</Typography>
                                                        </Link>
                                                </MenuItem>
                                                <MenuItem onClick={handleCloseUserMenu}>
                                                        <Link className='link' to='/LogOut'>
                                                                <Typography textAlign="center">{settings[1]}</Typography>
                                                        </Link>
                                                </MenuItem>
                                        </Menu>
                                </AppBar>
                                <Routes>
                                        <Route path='/' element={<HomepageContainer />}></Route>
                                        <Route path='/UserAccount' element={<UserAccount />}></Route>
                                        <Route path='/ContactUs' element={<ContactUs />}></Route>
                                        <Route path='/About' element={<About />}></Route>
                                        <Route path='/LogOut' element={<LogOut />}></Route>
                                </Routes>
                        </Router >
                        <Footer />
                </>
        );
}

export default MyRouter;
