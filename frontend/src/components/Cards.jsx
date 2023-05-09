// import libraries from material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Box from '@mui/material';
import { Link } from '@mui/material';
import IconButton from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';


const Cards = (props) => {
        return (
                <>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                        sx={{
                                                // borderRadius: '25%',
                                                // height: 140
                                                width: '100%',
                                                // bottom: -1,
                                                height: '80%',
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
                                        {/* <Link className='link' to={props.link}> */}
                                        {/* <Box px={2} pb={2} mt={-1}>
                                                <IconButton>
                                                        <AbcIcon />
                                                </IconButton>
                                                <IconButton>
                                                        <AbcIcon />
                                                </IconButton>
                                        </Box> */}
                                        {/* </Link> */}
                                </CardActions>
                        </Card>
                </>
        );
}

export default Cards; 