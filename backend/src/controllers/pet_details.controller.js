import { validationResult } from "express-validator";
import mongoose from "mongoose";
import { pet_details_schema } from "../models/pet_details.js";

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


