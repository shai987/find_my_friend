import request from 'request';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import fs from 'fs'
import * as fsExtra from "fs-extra";
import { newPet_schema } from '../models/new_pet.js';
import { validationResult } from 'express-validator';

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

export const uploadFile = multer({ storage: storage, fileFilter: fileFilter }).single('upfile');


export const handlePet = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
                // Validation errors
                console.log("ops")
                return res.status(400).json({ errors: errors.array() });
        }

        const { name } = req.body;

        // Handle the data...

        try {
                // console.log(req.body);
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
                                let obj = {
                                        name: req.body.name,
                                        //TODO Later change to fs.readFile
                                        img: {
                                                data: fs.readFileSync(`C:/Users/USER/Desktop/final_project_react/find_my_friend/backend/pets/${req.file.filename}`),
                                                contentType: 'image/png'
                                        }
                                }

                                const newPet = new newPet_model(obj);
                                await newPet.save();

                                try {
                                        request(`http://127.0.0.1:5000/flask/pets_details?name=${req.body.name}`, (error, response, body) => {
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

        catch (err) {
                res.sendStatus(500);
        }
};