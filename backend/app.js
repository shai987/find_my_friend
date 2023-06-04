import express from 'express';
import router from './src/routes/route.js';
import cors from 'cors';
import { } from 'dotenv/config';
import mongoose from 'mongoose';

const port = process.env.PORT || 8080;
const uri_mongo = process.env.MONGODB_URI_LOCAL;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./pets'));
app.use(express.json());

app.use('/route', router);

/*
// Error handling middleware for Multer errors
app.use((err, req, res, next) => {
        if (err instanceof multer.MulterError) {
          // Multer error occurred
          if (err.code === 'NO_FILE') {
            res.status(400).send('No file was uploaded.');
          } else if (err.code === 'INVALID_FILE_TYPE') {
            res.status(400).send('Invalid file type. Please upload a JPEG or PNG image.');
          } else {
            res.status(500).send('An error occurred during file upload.');
          }
        } else {
          // Other errors
          res.status(500).send(err.message);
        }
      });*/

const connection = async () => {
        const uri = uri_mongo;
        await mongoose.connect(uri);
        app.listen(port, () => console.log(`Listen on port ${port}`));
}
connection().catch(err => console.log(err.message));