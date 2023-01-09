import { Fragment } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import cutecatdog from '../../assets/images/cutecatdog.png';
import '../../assets/css/UserAccount.css';
  
const requests = [
        { type: 'כלב',
          name: 'ניקו',
          image: require('../../assets/images/catOwner.jpg'),
          race: 'פודל',
          date: '8.1.23',
          found_lost: 'נמצא',
          status: 'אותר'      
        },
        { type: 'כלב',
        name: 'ניקו',
        image: require('../../assets/images/catOwner.jpg'),
        race: 'פודל',
        date: '8.1.23',
        found_lost: 'נמצא',
        status: 'אותר'      
      },    { type: 'כלב',
      name: 'ניקו',
      image: require('../../assets/images/catOwner.jpg'),
      race: 'פודל',
      date: '8.1.23',
      found_lost: 'נמצא',
      status: 'אותר'      
    },    { type: 'כלב',
    name: 'ניקו',
    image: require('../../assets/images/catOwner.jpg'),
    race: 'פודל',
    date: '8.1.23',
    found_lost: 'נמצא',
    status: 'אותר'      
  }
]
const UserAccount = () => {
        return (
                <Fragment>
                        <div className="d"> 
                          <img width="600" height="300" src={cutecatdog} alt="cats_dogs" /> ברוך הבא User
                          <button>להוספת פנייה</button>
                        </div>
                       
             <TableContainer className="tableWrapper" component={Paper}>
             <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          align= "center"
          component="div"
        >
          טבלת פניות
        </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
               
                <TableHead>
                        <TableRow>
                        <TableCell align="center">סוג החיה</TableCell>
                        <TableCell align="center">שם החיה</TableCell>
                        <TableCell align="center">תמונה</TableCell>
                        <TableCell align="center">גזע החיה</TableCell>
                        <TableCell align="center">נמצאה/אבדה</TableCell>
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
              <TableCell align="center"><img className="imgTable" src={request.image} /></TableCell>
              <TableCell align="center">{request.race}</TableCell>
              <TableCell align="center">{request.found_lost}</TableCell>
              <TableCell align="center">{request.date}</TableCell>
              <TableCell align="center">{request.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    

          </Fragment>
        );
}
export default UserAccount; 