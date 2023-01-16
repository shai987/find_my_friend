import express from 'express';
import request from 'request';
import axios from 'axios';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import fs from 'fs'
const router = express.Router();
import { newPet_schema } from '../models/new_pet.js';
import * as fsExtra from "fs-extra";

const newPet_model = mongoose.model("newPet", newPet_schema);

const storage = multer.diskStorage({
        destination: 'pets',
        filename: (req, file, cb) => {
                cb(null, file.originalname);
        }
});

const fileFilter = (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.jpg' && ext !== ".jpeg" && ext !== ".png") {
                cb(null, false);
        }
        else {
                cb(null, true);
        }
};

const uploadFile = multer({ storage: storage, fileFilter: fileFilter }).single('file');

router.post('/add', async (req, res) => {
        try {
                console.log("ron")
                // console.log(req.file.originalname);
                uploadFile(req, res, async (err) => {
                        if (err instanceof multer.MulterError) {
                                if (!err.message) {
                                        err.message = err.code;
                                }
                                res.send("User not saved, file upload failed" + err.message);
                        } else if (err) {
                                res.send("User not saved, file upload failed");
                        }

                        else {

                                try {
                                        console.log(req.file.originalname);
                                        let obj = {
                                                img: {
                                                        data: fs.readFileSync(`pets/${req.file.originalname}`),
                                                        contentType: 'image/png'
                                                }
                                        }
                                        const newPet = new newPet_model(obj);
                                        await newPet.save();
                                        //const url = req.protocol + '://' + req.get('host');
                                        //imageadr = url + '/pets/' + req.file.originalname;
                                        axios
                                        .get(`http://127.0.0.1:5000/flask/pets_details?name=${req.file.originalname}`, {
                                                responseType: "json",
                                        })
                                        .then( (response) => {
                                                console.log(response.data);
                                                res.json(response.data);
                                        });

                                        /*request(`http://127.0.0.1:5000/flask/pets_details?name=${req.file.originalname}`, (error, response, body) => {
                                                fsExtra.emptyDirSync("pets");
                                                body = JSON.parse(body);
                                                console.log({ body: body })
                                                //response.send({ body: body });
                                        });*/
                                }

                                catch (err) {
                                        res.json(err.message);
                                }
                        }
                });

        }

        catch {
                res.sendStatus(500);
        }
});


export default router;