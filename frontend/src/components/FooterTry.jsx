import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../assets/css/ParmFooter.css';

const FooterTry = () => {
        return (
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
                                        // backgroundColor: (theme) =>
                                        //         theme.palette.mode === 'light'
                                        //                 ? theme.palette.grey[200]
                                        //                 : theme.palette.grey[800],
                                }}
                        >
                                <Container maxWidth="sm">
                                        <Typography className='en' variant="body1">
                                                My sticky footer can be found here.
                                        </Typography>

                                        {/* Copyright english */}
                                        <Typography className='en' variant="body1" color="text.secondary">
                                                {'Copyright © '}
                                                <Link color="inherit" href="https://github.com/shai987/find_my_friend">
                                                        Find My Friend
                                                </Link>
                                                {' ' + new Date().getFullYear() + '.'}
                                        </Typography>

                                        {/* Copyright hebrew */}
                                        <Typography className='he' variant="body1" color="body1">
                                                {'זכויות יוצרים © '}
                                                <Link color="inherit" href="https://github.com/shai987/find_my_friend">
                                                        Find My Friend
                                                </Link>
                                                {' ' + new Date().getFullYear() + '.'}
                                        </Typography>

                                        {/* link to About page */}
                                        <Typography className='he' variant="body1" color="body1">
                                                {'מעבר ל'}
                                                <Link color="inherit" href="">
                                                        דף אודות
                                                </Link>
                                                {'.'}
                                        </Typography>

                                        {/* social media */}
                                        <Typography className='he' variant="body1" color="body1">
                                                {'רשתות חברתיות:'}
                                                <Link color="inherit" href="">
                                                        <FacebookIcon color="primary" fontSize="small" />
                                                        <InstagramIcon sx={{ color: 'pink' }} fontSize="small" />
                                                        <TwitterIcon color="primary" fontSize="small" />
                                                </Link>
                                        </Typography>

                                        {/* contact */}
                                        <Typography className='he' variant="body1" color="body1">
                                                {'יצירת קשר:'}
                                                <Link color="inherit" href="mailto:findmyfriend@gmail.com">
                                                        <MailOutlineIcon fontSize="small" />
                                                </Link>
                                        </Typography>

                                </Container>
                        </Box>
                </Box >
        );
}

export default FooterTry;