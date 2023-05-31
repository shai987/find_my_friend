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
        const { updateStatus } = useContext(UserRequestContext);
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
                                                        component={Link}
                                                        to="/ImageForm"
                                                        state={{ status: "lost" }}
                                                        onClick={updateStatus("איבדתי")}
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
                                                        component={Link}
                                                        to="/ImageForm"
                                                        state={{ status: "found" }}
                                                        onClick={updateStatus("מצאתי")}
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