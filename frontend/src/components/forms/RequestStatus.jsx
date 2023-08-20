// קונטקסט - משתמש נכנס כבר היום/לא
// במידה ולא - מעבר לטופס כניסה
// במידה וכן - מעבר לקומפוננטה הבאה

// update status - context

// import react-router-dom
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import { Button, Container, Grid } from '@mui/material';
import { UserRequestContext } from '../../context/UserRequestContext';

const RequestStatus = () => {

        const { user } = useContext(AuthContext);
        const { updateStatus, request } = useContext(UserRequestContext);
        console.log(request)
        const navigate = useNavigate();


        useEffect(() => {
                if (!user.isLoggedIn) {
                        navigate('/UserStatus');
                }
        }, [user, navigate]);

        return (
                <>
                        <Container sx={{ mt: "200px" }}>
                                <Grid container justifyContent="center" spacing={12}>
                                        <Grid item>
                                                <Button
                                                        variant="contained"
                                                        color="success"
                                                        sx={{
                                                                width: "200px",
                                                                height: "80px",
                                                                backgroundColor: "hsl(113, 34%, 42%)",
                                                                fontSize: "25px",
                                                        }}
                                                        onClick={() => updateStatus("lost")}
                                                        component={Link}
                                                        to="/ImageForm"
                                                >
                                                        איבדתי
                                                </Button>
                                        </Grid>
                                        <Grid item>
                                                <Button
                                                        variant="contained"
                                                        sx={{
                                                                width: "200px",
                                                                height: "80px",
                                                                backgroundColor: "hsl(213, 34%, 52%)",
                                                                fontSize: "25px",
                                                        }}
                                                        onClick={() => updateStatus("found")}
                                                        component={Link}
                                                        to="/ImageForm"
                                                >
                                                        מצאתי
                                                </Button>
                                        </Grid>
                                </Grid>
                        </Container>
                </>
        );
};

export default RequestStatus;