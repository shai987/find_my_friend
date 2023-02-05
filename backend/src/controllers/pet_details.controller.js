import { validationResult } from "express-validator";
import mongoose from "mongoose";
import { pet_details_schema } from "../models/pet_details.js";
import db_user_details from "../sql/sqlConnection.js";

const newPet_model = mongoose.model("newPet", pet_details_schema);

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

// Add user
export const handleSignUp = async (req, res) => {

  const { email, firt_name, last_name, password } = req.query;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    db_user_details.query('INSERT INTO users (email, firt_name, last_name, password) VALUES (?,?,?,?)', [email, firt_name, last_name, password], (err, result) => {
      if (err) {
        res.send(err.message);
        console.log(err.message);
      }

      if (result.length > 0) {
        res.send(result[0]);
      }

      else {
        res.send({ message: "User not found" });
      }
    });

  }
  catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
};

// Get  user
export const handleSignIn = async (req, res) => {
  const { email, password } = req.query;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    db_user_details.query('SELECT email, user_password FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
      if (err) {
        res.send(err.message);
        console.log(err.message);
      }
      res.send(result);
    });

  }
  catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
};