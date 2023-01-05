import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ParmFooter from './ParmFooter';
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
        return (
                <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', mt: '-500px' }}>

                                <CssBaseline />

                                <Box component="footer"
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