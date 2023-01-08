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


const requests = [
        { type: 'כלב',
          name: 'ניקו',
          image: '',
          race: 'פודל',
          date: '8.1.23',
          found_lost: 'נמצא',
          status: 'אותר'      
        },
        { type: '1',
        name: '1',
        image: '',
        race: '1',
        date: '1',
        found_lost: '1',
        status: '1'      
      },
      { type: '1',
      name: '1',
      image: '',
      race: '1',
      date: '1',
      found_lost: '1',
      status: '1'      
    },
    { type: '1',
    name: '1',
    image: '',
    race: '1',
    date: '1',
    found_lost: '1',
    status: '1'      
  }

]
const UserAccount = () => {
        return (
                <Fragment>
                        <div> <img src={cutecatdog} alt="cats_dogs" /> ברוך הבא User</div>
                       
             <TableContainer component={Paper}>
             <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          טבלת פניות
        </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
               
                <TableHead>
                        <TableRow>
                        <TableCell align="right">סוג החיה</TableCell>
                        <TableCell align="right">שם החיה</TableCell>
                        <TableCell align="right">תמונה</TableCell>
                        <TableCell align="right">גזע החיה</TableCell>
                        <TableCell align="right">נמצאה/אבדה</TableCell>
                        <TableCell align="right">תאריך העלאת הפנייה</TableCell>
                        <TableCell align="right">סטטוס</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
          {requests.map((request) => (
            <TableRow
              key={request.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{request.type}</TableCell>
              <TableCell align="right">{request.name}</TableCell>
              <TableCell align="right">{request.image}</TableCell>
              <TableCell align="right">{request.race}</TableCell>
              <TableCell align="right">{request.found_lost}</TableCell>
              <TableCell align="right">{request.date}</TableCell>
              <TableCell align="right">{request.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>למעבר ל</div>

          </Fragment>
        );
}
export default UserAccount; 