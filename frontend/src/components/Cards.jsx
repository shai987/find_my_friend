// import libraries from material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AbcIcon from '@mui/icons-material/Abc';
import Button from '@mui/material/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Cards = (props) => {

        return (
                <>
                        <Card sx={{ maxWidth: 245 }}>
                                <CardMedia
                                        sx={{
                                                // borderRadius: '25%',
                                                // height: 140
                                                width: '100%',
                                                // bottom: -1,
                                                height: '70%',
                                        }}
                                        // height='150'
                                        // width='40'
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
                                        <Box pb={2} mt="auto" mr="auto">
                                                <Link sx={{ color: 'black', fontSize: 25 }} href={props.githubLink} target="_blank" rel="noopener noreferrer" >
                                                        <FaGithub />
                                                </Link>
                                                &nbsp;
                                                <Link color="primary" sx={{ fontSize: 25 }} href={props.linkedinLink} target="_blank" rel="noopener noreferrer" >
                                                        <FaLinkedin />
                                                </Link>
                                        </Box>
                                </CardActions>
                        </Card >
                </>
        );
}

export default Cards; 