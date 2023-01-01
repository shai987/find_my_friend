import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import ScrollToTop from "./ScrollToTop";

import ParmFooter from './footer/ParmFooter';


const Footer = () => {
        return (
                <>
                        <Box
                                sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        minHeight: '100vh',
                                }}
                        >
                                <CssBaseline />

                                <Box
                                        component="footer"
                                        sx={{
                                                py: 3,
                                                px: 2,
                                                mt: 'auto',
                                                backgroundColor: '#eeeeee'
                                        }}
                                >
                                        <Container maxWidth="sm">
                                                <ParmFooter />
                                        </Container>
                                </Box>
                        </Box>
                        <ScrollToTop />
                </>
        );
}
export default Footer;