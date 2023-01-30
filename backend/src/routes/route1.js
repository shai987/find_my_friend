import express from 'express';
import request from 'request';
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
                const ext = path.extname(file.originalname);
                cb(null, `${req.body.name}${ext}`);
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

const uploadFile = multer({ storage: storage, fileFilter: fileFilter }).single('upfile');

router.post('/add', async (req, res) => {
        try {
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
                                        console.log(req.body);
                                        let obj = {
                                                name: req.body.name,
                                                // name: req.file.originalname,
                                                //TODO Later change to fs.readFile
                                                img: {
                                                        data: fs.readFileSync(`C:/Users/USER/Desktop/final_project_react/find_my_friend/backend/pets/${req.file.filename}`),
                                                        contentType: 'image/png'
                                                }
                                        }
                                        const newPet = new newPet_model(obj);
                                        await newPet.save();

                                        request(`http://127.0.0.1:5000/flask/pets_details?name=${req.body.name}`, (error, response, body) => {
                                                // request(`http://127.0.0.1:5000/flask/pets_details?name=${req.file.originalname}`, (error, response, body) => {

                                                // request(`http://127.0.0.1:5000/flask/pets_details?name=${req.file.originalname}`, (error, response, body) => {
                                                //TODO CHANGE TO GENERY FORM
                                                fsExtra.emptyDirSync("C:/Users/USER/Desktop/final_project_react/find_my_friend/backend/pets");
                                                res.send({ body: body });
                                        });
                                }

                                catch (err) {
                                        res.json(err.message);
                                }
                        }
                })

        }

        catch {
                res.sendStatus(500);
        }
});


export default router;