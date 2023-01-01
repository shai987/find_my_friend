import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link
} from 'react-router-dom';

import HomepageContainer from '../components/HomepageContainer';
import UserAccount from '../components/UserAccount';
import About from '../components/About';
import Image from '../components/Image';
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
import '../assets/css/MyRouter.css';

import Footer from '../components/Footer';

const MyRouter = () => {
        const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
                                                        <Link className='link' to='/UserAccount'>
                                                                <Button
                                                                        onClick={handleCloseNavMenu}
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        אזור אישי
                                                                        &nbsp;
                                                                </Button>
                                                                {/* settings of the user */}
                                                                {/* <Tooltip title="הגדרות" placement="top-end">
                                                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                                                        <Avatar alt="ss" src='' />
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
                                                                                {settings.map((setting) => (
                                                                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                                                                <Typography textAlign="center">{setting}</Typography>
                                                                                        </MenuItem>
                                                                                ))}
                                                                        </Menu> */}


                                                        </Link>
                                                        <Link className='link' to='/About'>
                                                                <Button
                                                                        onClick={handleCloseNavMenu}
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        מי אנחנו?
                                                                </Button>
                                                        </Link>
                                                </Toolbar>
                                        </Container>
                                </AppBar>
                                <Routes>
                                        <Route path='/' element={<HomepageContainer />}></Route>
                                        <Route path='/UserAccount' element={<UserAccount />}></Route>
                                        <Route path='/About' element={<About />}></Route>

                                </Routes>
                        </Router >
                        <Footer />
                </>
        );
}

export default MyRouter;
