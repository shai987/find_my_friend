import axios from 'axios';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import * as fsExtra from "fs-extra";
import { pet_details_schema } from '../models/pet_details.js';
import { validationResult } from 'express-validator';
import { } from 'dotenv/config';


const localhost = process.env.LOCAL_HOST;
const flask_port = process.env.FLASK_PORT || 5000;

const newPet_model = mongoose.model("newPet", pet_details_schema);

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

export const handlePetImage = async (req, res) => {
        /*  const errors = validationResult(req);
         if (!errors.isEmpty()) {
                 // Validation errors
                 console.log("ops")
                 return res.status(400).json({ errors: errors.array() });
         } */
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
                                        //console.log(req.file.originalname);
                                        let obj = {
                                                img: {
                                                        data: fs.readFileSync(`pets/${req.file.originalname}`),
                                                        contentType: 'image/png'
                                                }
                                        }

                                        const newPet = new newPet_model(obj);
                                        await newPet.save();

                                        axios
                                                .get(`http://${localhost}${flask_port}/flask/pets_details?name=${req.file.originalname}`, {
                                                        responseType: "json",
                                                })
                                                .then((response) => {
                                                        fsExtra.emptyDirSync("pets");
                                                        console.log(response.data);
                                                        res.json(response.data);
                                                });
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
};


export const handlePetDetails = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          // Validation errors
          return res.status(400).json({ errors: errors.array() });
        }
      
        const { petName, petType, petGender, petBreeds, location } = req.body;
        //image mongo
      
        // Handle the data:
      
        try {
          const newPet = new newPet_model(req.body);
          await newPet.save();
        } catch (err) {
          res.json(err.message);
        }
      
        res.status(200).json({ message: "The server received the data" });
      };