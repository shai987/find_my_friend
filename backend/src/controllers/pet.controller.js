import axios from "axios";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import fs from "fs";
import * as fsExtra from "fs-extra";
import mime from "mime-types";
import { pet_details_schema } from "../models/pet_details.js";
import { validationResult } from "express-validator";
import {} from "dotenv/config";
import { ObjectID } from "bson";

const localhost = process.env.LOCAL_HOST;
const flask_port = process.env.FLASK_PORT || 5000;

const newPet_model = mongoose.model("newPet", pet_details_schema);

const storage = multer.diskStorage({
  destination: "pets",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    cb(null, false);
  } else {
    cb(null, true);
  }
};

const uploadFile = multer({ storage: storage, fileFilter: fileFilter }).single(
  "file"
);

export const handlePetImage = async (req, res) => {
  fsExtra.emptyDirSync("pets");
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
      } else {
        try {
          axios
            .get(
              `http://${localhost}${flask_port}/flask/pets_details?name=${req.file.originalname}`,
              {
                responseType: "json",
              }
            )
            .then((response) => {
              console.log(response.data);
              res.json(response.data);
            });
        } catch (err) {
          res.json(err.message);
        }
      }
    });
  } catch {
    res.sendStatus(500);
  }
};

export const handlePetDetails = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    userEmail,
    petName,
    petType,
    petGender,
    petBreeds,
    location,
    status,
    note,
  } = req.body;

  // get photo file name
  const directoryPath = "pets";
  let filenames = [];
  let fileName = "";
  if (fs.existsSync(directoryPath)) {
    filenames = fs.readdirSync(directoryPath);
    fileName = filenames[0];
  } else {
    console.log("Directory does not exist");
  }

  const imagePath = `${directoryPath}/${fileName}`;
  const contentType = mime.lookup(path.extname(imagePath));

  let obj = {
    petName: petName,
    petType: petType,
    petGender: petGender,
    petBreeds: petBreeds,
    location: location,
    img: {
      data: fs.readFileSync(`pets/${fileName}`),
      contentType: contentType,
    },
    note: note,
    status: status,
    userEmail: userEmail,
    note: note,
  };

  const newPet = new newPet_model(obj);
  let result = await newPet.save();
  // extract the document id
  let documentID = result._id.valueOf();

  // Handle the data:
  try {
    // flask
    const response = await axios.get(
      `http://${localhost}${flask_port}/flask/imageSimilarity?petType=${petType}&docID=${documentID}&status=${status}`,
      {
        responseType: "json",
      }
    );
    console.log("length is" + response.data.length);
    // We got an array of docs IDs, so we need to retreive each one.
    // In order to achieve that, the most efficient way is by using the Promise.all func (because retreiving a doc returns a promise)
    // the method returns a single promise
    // at the the end we get an array of docs
    try {
      const docPromises = response.data.map(async (docId) => {
        const doc = await newPet_model.findById(docId);
        return doc ? doc : "Document not found";
      });
      const docs_arr = await Promise.all(docPromises);
      res.json(docs_arr);
    } catch (err) {
      res.json(err.message);
    }
  } catch (err) {
    res.json(err.message);
  }

  //res.status(200).json({ message: "The server received the data" });
};
