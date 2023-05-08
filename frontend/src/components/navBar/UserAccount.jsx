// import libraries from react
import { useState, useEffect, useContext } from 'react';
// import react-router-dom
import { Link } from 'react-router-dom';
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
import { AuthContext } from '../../context/AuthContext';
// import our images
import cat_dog_hug from '../../assets/images/cat_dog_hug.jpg';
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
  const { user } = useContext(AuthContext);
  //const [imageUrl, setImageUrl] = useState(null);

  const [requests, setRequests] = useState([])
  //const [response, setResponse] = useState("");

  useEffect(() => {
    axios.get('/userInfo', {
      params: {
        email: user.email
      }
    })
      .then(response => setRequests(response.data))
      .catch(error => console.error(error));
  }, []);

  console.log(requests.length)

  return (
    <>
      <div className="userWrapper">
        <div className="userHeading">
          <section className="userText">
            <h1>ברוך הבא {user.first_name}</h1>
            <img alt="hugcatdog" src={cat_dog_hug} />
            <br></br>
            {user.email && <Link to='/RequestStatus'>
              <Button variant="contained">להוספת פנייה</Button>
            </Link>}
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
                    <TableCell align="center">{request.petType}</TableCell>
                    <TableCell align="center">{request.petName}</TableCell>
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