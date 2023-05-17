// קונטקסט - משתמש נכנס כבר היום/לא
// במידה ולא - מעבר לטופס כניסה
// במידה וכן - מעבר לקומפוננטה הבאה

// update status - context

// import react-router-dom
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import * as React from 'react';
import { Button, Container, Grid} from '@mui/material';

const RequestStatus = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.email) {
      navigate("/UserStatus");
    }
  }, [user, navigate]);

  return (
    <>
      <Container sx={{ mt: "200px" }}>
        <Grid container justifyContent="center" spacing={12}>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                width: "200px",
                height: "80px",
                backgroundColor: "hsl(113, 34%, 42%)",
                fontSize: "25px",
              }}
              component={Link}
              to="/ImageForm"
              state={{ status: "lost" }}
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

/*
<div>
                                <button>
                                        <Link className='link' to='/ImageForm' state={{ status: "lost" }}>איבדתי</Link>
                                </button>
                                <br />

                                <button>
                                        <Link className='link' to='/ImageForm' state={{ status: "found" }}>מצאתי</Link>
                                </button>
                        </div>*/
