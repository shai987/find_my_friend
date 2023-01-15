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
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import '../../assets/css/NavBar.css';

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
        const pages = ["אזור אישי", "מי אנחנו?"];
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
                <AppBar className="appBar" position="static">
                        <Container maxWidth="xl">
                                <Toolbar disableGutters>
                                        {/* the title that is a button to home page */}
                                        <Typography
                                                component="a"
                                                href="/"
                                                sx={{
                                                        mr: 2,
                                                        display: { xs: "none", md: "flex" },
                                                }}
                                        >
                                                {/* img = add the icon */}
                                                <img className="dog" src={require('../../assets/images/dog.jpg')} alt="dog_image" />
                                        </Typography>

                                        {/* zoom in menu burger */}
                                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                                                <IconButton
                                                        size="large"
                                                        aria-label="account of current user"
                                                        aria-controls="menu-appbar"
                                                        aria-haspopup="true"
                                                        onClick={handleOpenNavMenu}
                                                        color="inherit"
                                                >
                                                        <MenuIcon />
                                                </IconButton>
                                                <Menu
                                                        id="menu-appbar"
                                                        anchorEl={anchorElNav}
                                                        anchorOrigin={{
                                                                vertical: "bottom",
                                                                horizontal: "left",
                                                        }}
                                                        keepMounted
                                                        transformOrigin={{
                                                                vertical: "top",
                                                                horizontal: "left",
                                                        }}
                                                        open={Boolean(anchorElNav)}
                                                        onClose={handleCloseNavMenu}
                                                        sx={{
                                                                display: { xs: "block", md: "none" },
                                                        }}
                                                >
                                                        {pages.map((page) => (
                                                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                                        <Typography textAlign="right">{page}</Typography>
                                                                </MenuItem>
                                                        ))}
                                                </Menu>
                                        </Box>
                                        {/* zoom in menu burger */}
                                        {/* <Typography
                                                variant="h5"
                                                noWrap
                                                component="a"
                                                href=""
                                                sx={{
                                                        mr: 2,
                                                        display: { xs: "flex", md: "none" },
                                                        flexGrow: 1,
                                                        fontFamily: "monospace",
                                                        fontWeight: 700,
                                                        letterSpacing: ".3rem",
                                                        color: "inherit",
                                                        textDecoration: "none",
                                                }}
                                        >
                                                img = add the icon
                                                <img className="dog" src={require('../../assets/images/dog.jpg')} alt="dog_image" />
                                        </Typography> */}

                                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                                                {pages.map((page) => (
                                                        <Button
                                                                key={page}
                                                                onClick={handleCloseNavMenu}
                                                                sx={{ my: 2, color: "white", display: "block" }}
                                                        >
                                                                {page}
                                                        </Button>
                                                ))}
                                        </Box>

                                        {/* settings of the user */}
                                        <Box sx={{ flexGrow: 0 }}>
                                                <Tooltip title="הגדרות" placement="top-end">
                                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                                                </Menu>
                                        </Box>
                                </Toolbar>
                        </Container>
                </AppBar>
        );
};
export default NavBar;
