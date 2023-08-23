// import libraries from react
import { useState, useEffect, useContext } from 'react';
// import react-router-dom
import { Link, useNavigate } from 'react-router-dom';
// import libraries from material-ui
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// import axios
import axios from 'axios';
// import our components
import { AlertError } from "../views/AlertError";
import { AlertSuccess } from "../views/AlertSuccess";
import { AuthContext } from '../../context/AuthContext';
// import our images
import dog_with_cat from '../../assets/images/dog_with_cat.jpg';

// import css
import '../../assets/css/UserAccount.css';
import { Buffer } from "buffer";

axios.defaults.baseURL = 'http://127.0.0.1:8080/route';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  return formattedDate;
}

const UserAccount = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [formErrors, setFormErrors] = useState([]);
  const [formSuccess, setFormSuccess] = useState("");

  useEffect(() => {
    axios.get('/userInfo', {
      params: {
        email: user.email
      }
    })
      .then(response => setRequests(response.data))
      .catch(error => console.error(error));
  }, []);

  console.log(requests.length);

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleDelete = async () => {
    const confirmed = window.confirm(`היי ${user.first_name} ${user.last_name} האם אתה/את בטוחים שברצונכם למחוק את המשתמש? פעולה זו היא סופית ולא ניתנת לשחזור! `);
    if (confirmed) {
      try {
        const response = await axios.post('/deleteUser', { email: user.email });
        if (response.data.message) {
          setFormSuccess("problem");
        } else {
          logout();
          navigate("/UserStatus");
        }
      } catch (error) {
        handleErrors(error);
        console.log(error.message);
      }
    }
  };

  const handleErrors = (err) => {
    if (err.response.data && err.response.data.errors) {
      // Handle validation errors
      const { errors } = err.response.data;

      let errorMsg = [];
      for (let error of errors) {
        const { msg } = error;

        errorMsg.push(msg);
      }

      setFormErrors(errorMsg);
    } else {
      // Handle generic error
      setFormErrors(["Oops, there was an error!"]);
    }
  };
  return (
    <>
      <AlertSuccess success={formSuccess} />
      <AlertError errors={formErrors} />
      <div className="userWrapper">
        <div className="userHeading">
          <section className="userText">
            <h1>ברוך הבא {user.first_name}</h1>
            <img alt="hugcatdog" src={dog_with_cat} />
            <br></br>
            {user.email && <Link to='/RequestStatus'>
              <Button variant="contained">להוספת פנייה</Button>
            </Link>}
            <br /><br />
            <Button onClick={handleDelete} variant="contained">מחיקת המשתמש</Button>
          </section>
        </div>
        {requests.length > 0 &&
          <TableContainer className="tableWrapper" component={Paper}>
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h5"
              id="tableTitle"
              align="center"
              component="div">
              טבלת פניות
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="requestTableHead">
                <TableRow>
                  <TableCell align="center">סוג החיה</TableCell>
                  <TableCell align="center">שם החיה</TableCell>
                  <TableCell align="center">תמונה</TableCell>
                  <TableCell align="center">גזע החיה</TableCell>
                  <TableCell align="center">מצאתי/איבדתי</TableCell>
                  <TableCell align="center">תאריך העלאת הפנייה</TableCell>
                  <TableCell align="center">מיקום</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((request, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{request.petType === 'cat' ? 'חתול' : 'כלב'}</TableCell>
                    <TableCell align="center">{request.petName}</TableCell>
                    {console.log(request.img)}
                    <TableCell align="center"><img
                      src={`data:${request.img.contentType};base64,${Buffer.from(request.img.data.data).toString('base64')}`}
                      title={request.petName}
                      alt={request.petName}
                      className="person-img"
                      width="30"
                    /></TableCell>
                    <TableCell align="center">{request.petBreeds}</TableCell>
                    <TableCell align="center">{request.status == "lost" ? "איבדתי" : "מצאתי"}</TableCell>
                    <TableCell align="center">{formatDate(request.date)}</TableCell>
                    <TableCell align="center">{request.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>}
      </div >
    </>
  );
}
export default UserAccount; 