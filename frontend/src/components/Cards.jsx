// import libraries from material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Cards = (props) => {

        return (
                <>
                        <Card sx={{ maxWidth: 245 }}>
                                <CardMedia
                                        sx={{
                                                width: '100%',
                                                height: '60%',
                                        }}
                                        image={props.imageSrc}
                                        title={props.title}
                                        alt={props.alt}
                                        component='img'
                                />
                                <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                                {props.studentName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                                {props.studentDescription}
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                        <div className='divIcons'>
                                                <Link className='icon' sx={{ color: 'black', fontSize: 25 }} href={props.githubLink} target="_blank" rel="noopener noreferrer" >
                                                        <FaGithub />
                                                </Link>
                                                &nbsp;
                                                <Link className='icon' color="primary" sx={{ fontSize: 25 }} href={props.linkedinLink} target="_blank" rel="noopener noreferrer" >
                                                        <FaLinkedin />
                                                </Link>
                                        </div>
                                </CardActions>
                        </Card>
                        &nbsp; &nbsp;
                </>
        );
}

export default Cards; 