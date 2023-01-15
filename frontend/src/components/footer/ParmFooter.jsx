// import libraries from material-ui
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// import icons from icons-material
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import ContactPageIcon from '@mui/icons-material/ContactPage';
// import css
import '../../assets/css/ParmFooter.css';

const ParmFooter = () => {
        return (
                <>
                        {/* About */}
                        <Typography className='he' variant="body1">
                                {'מוזמנים לכתוב לנו כאן לכל שאלה'}
                                <Link className='try' href="/ContactUs" underline="none" rel="noopener noreferrer">
                                        <ContactPageIcon color="primary" fontSize="small" />
                                </Link>
                        </Typography>

                        {/* Contact-Mail */}
                        <Typography className='he' variant="body1">
                                {'נשמח לשמוע מכם '}
                                <Link color="inherit" href="mailto:findmyfriend10@gmail.com">
                                        <MarkEmailReadTwoToneIcon color="primary" fontSize="small" />
                                </Link>
                        </Typography>

                        {/* Social Media */}
                        <Typography className='he' variant="body1" >
                                {'חפשו אותנו ברשתות החברתיות '}
                                <Link color="inherit" href="">
                                        <FacebookSharpIcon sx={{ color: 'blue' }} fontSize="small" />
                                        <WhatsAppIcon color="success" fontSize="small" />
                                        <InstagramIcon sx={{ color: '#C13584' }} fontSize="small" />
                                        <TwitterIcon color="primary" fontSize="small" />
                                </Link>
                        </Typography>

                        {/* Copyright  */}
                        <Typography className='copyright' variant="body1">
                                {'Copyright © '}
                                <Link href="https://github.com/shai987/find_my_friend" target="_blank" rel="noopener noreferrer" underline="none">
                                        <b className='bold'>Find My Friend</b>
                                </Link>
                                {' ' + new Date().getFullYear()}
                        </Typography>
                </>
        );
}

export default ParmFooter;