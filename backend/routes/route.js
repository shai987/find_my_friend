import express from 'express';
import request from 'request';
// import axios from 'axios';
const router = express.Router();
// const userModel = require('../models/user');

import path from 'path';

import multer from 'multer';

const storage = multer.diskStorage({
        destination: (req, file, cb) => {
                cb(null, 'pets')
        },
        filename: (req, file, cb) => {
                const filename = `${req.body.company}.jpg`;
                cb(null, filename);
        }
})

const fileFilter = (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".jpg" || ext !== ".jpeg") {
                cb(null, false)
        }
        else {
                cb(null, true);
        }
}


const uploadFile = multer({ storage: storage, fileFilter: fileFilter }).single('upfile');

// GET - router      
router.get('/', async (req, res) => {
        try {
                request('http://127.0.0.1:5000/flask/pets_details', (error, response, body) => {
                        console.error('error:', error); // Print the error
                        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                        console.log('message:', body); // Print the data received
                        res.json({ body: body }); //Display the response on the website
                });
        }
        catch (err) {
                res.json(err.message);
        }
});


router.post('/add', async (req, res) => {
        try {
                console.log(req.body);
                uploadFile(req, res, async (err) => {
                        if (err instanceof multer.MulterError) {
                                if (!err.message) {
                                        err.message = err.code;
                                }
                                //res.send("User not saved, file upload failed" + err.message);
                        } else if (err) {
                                //res.send("User not saved, file upload failed");
                        }
                        else {
                                try {
                                        fileName = req.body.name
                                        request(`http://127.0.0.1:5000/flask/pets_details?${fileName}.jpg`, (error, response, body) => {
                                                console.error('error:', error); // Print the error
                                                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                                                console.log('message:', body); // Print the data received
                                                res.json({ body: body }); //Display the response on the website
                                        });
                                }
                                catch (err) {
                                        res.json(err.message);
                                }

                                /*const user = new userModel(req.body);
                                await user.save();
                                /*const html = `<p>User saved successfully</p>
                                        <p><a href="http://localhost:8080/user">return to the main page</a></p>`*/
                                //res.send(html)*/
                        }
                })

        }

        catch {
                res.sendStatus(500);
        }
});


export default router;