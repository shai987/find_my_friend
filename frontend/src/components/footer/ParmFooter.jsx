// import libraries from material-ui
import Typography from '@mui/material/Typography';
// import icons from icons-material
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import ContactPageIcon from '@mui/icons-material/ContactPage';
// import css
import '../../assets/css/ParmFooter.css';
//import image
import pen from '../../assets/images/pen.png';
import email from '../../assets/images/email.png';
import social_media from '../../assets/images/social_media.png';
import { color } from '@mui/system';
import { Link } from 'react-router-dom';

const ParmFooter = () => {
        return (
                <>
                        <div id="div_position">
                                <div className='position-ContactUs'>
                                        <Link to="/ContactUs">
                                                <figure className='figure_style'>
                                                        <img className='footer_img' src={pen} alt="pen" />
                                                        <figcaption>צרו איתנו קשר</figcaption>
                                                </figure>
                                        </Link>
                                </div>
                                <div className='position-email'>
                                        <a href="mailto:findmyfriend10@gmail.com">
                                                <figure className='figure_style'>
                                                        <img className='footer_img' src={email} alt="pen" />
                                                        <figcaption>כתבו לנו</figcaption>
                                                </figure>
                                        </a>
                                </div>
                                <div className='position-social_media'>
                                        <a href="https://github.com/shai987/find_my_friend">
                                                <figure className='figure_style'>
                                                        <img className='footer_img' src={social_media} alt="pen" />
                                                        <figcaption>חפשו אותנו ברשתות החברתיות</figcaption>
                                                </figure>
                                        </a>
                                </div>

                        </div>
                        <span className='copyright'>
                                <br></br>
                                Copyright ©  Find My Friend{' ' + new Date().getFullYear()}
                        </span>
                </>

                // <>         
                //         {/* About */}
                //         <Typography className='he' variant="body1">
                //                 {'מוזמנים לכתוב לנו כאן לכל שאלה'}
                //                 <Link className='try' href="/ContactUs" underline="none" rel="noopener noreferrer">
                //                         <ContactPageIcon color="primary" fontSize="small" />
                //                         {/* <img src={require('../assets/images/pen.png')} alt="pen"></img> */}
                //                 </Link>
                //         </Typography>

                //         {/* Contact-Mail */}
                //         <Typography className='he' variant="body1">
                //                 {'נשמח לשמוע מכם '}
                //                 <Link color="inherit" href="mailto:findmyfriend10@gmail.com">
                //                         <MarkEmailReadTwoToneIcon color="primary" fontSize="small" />
                //                 </Link>
                //         </Typography>

                //         {/* Social Media */}
                //         <Typography className='he' variant="body1" >
                //                 {'חפשו אותנו ברשתות החברתיות '}
                //                 <Link color="inherit" href="">
                //                         <FacebookSharpIcon sx={{ color: 'blue' }} fontSize="small" />
                //                         <WhatsAppIcon color="success" fontSize="small" />
                //                         <InstagramIcon sx={{ color: '#C13584' }} fontSize="small" />
                //                         <TwitterIcon color="primary" fontSize="small" />
                //                 </Link>
                //         </Typography>

                //         {/* Copyright  */}
                //         <Typography className='copyright' variant="body1">
                //                 <span>


                //                 {'Copyright © '}
                //                 <Link href="https://github.com/shai987/find_my_friend" target="_blank" rel="noopener noreferrer" underline="none">
                //                         <b className='bold'>Find My Friend</b>
                //                 </Link>
                //                 {' ' + new Date().getFullYear()}
                //                  </span>
                //         </Typography>
                // </>
        );
}

export default ParmFooter;