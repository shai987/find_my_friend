import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import '../../assets/css/UserAccount.css';
import requests from '../../services/UserAccountData';
import cat_dog_hug from '../../assets/images/cat_dog_hug.jpg';
  
const UserAccount = () => {
        return (
                <>
                <div className="userWrapper"> 
                  <div className="userHeading">
                    <section className="userText">
                     <h1>
                        <img alt="hugcatdog" src={cat_dog_hug} />
                        ברוך הבא USER
                        <br></br>
                        <Button variant="contained">להוספת פנייה</Button>
                     </h1>
                    </section>
                  </div>
                <TableContainer className="tableWrapper" component={Paper}>
                    <Typography
                      sx={{ flex: '1 1 100%' }}
                      variant="h5"
                      id="tableTitle"
                      align= "center"
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
                          <TableCell align="center">סטטוס</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {requests.map((request) => (
                          <TableRow
                            key={request.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell align="center">{request.type}</TableCell>
                            <TableCell align="center">{request.name}</TableCell>
                            <TableCell align="center">
                              <img className="imgTable" src={request.image} alt="tableimage"/>
                            </TableCell>
                            <TableCell align="center">{request.race}</TableCell>
                            <TableCell align="center">{request.found_lost}</TableCell>
                            <TableCell align="center">{request.date}</TableCell>
                            <TableCell align="center">{request.status}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                </>
              );
            }
export default UserAccount; 