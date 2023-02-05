import express from 'express';
const router = express.Router();

import { handlePetImage } from '../controllers/pet.controller.js';
import { handlePetDetails } from '../controllers/pet.controller.js';
import { handleSignUp, handleSignIn, handleDeleteAllUser, handleGetAllUsers } from '../controllers/user.controller.js';
import { validate } from "../middlewares/validator.middleware.js";

router.post("/uploadImage", validate('handlePetImage'), handlePetImage);

router.post("/petDetails", validate('handlePetDetails'), handlePetDetails);

router.post("/userSignUp", validate('handleSignUp'), handleSignUp);

router.post("/userSignIn",/*  validate('handleSignIn'), */ handleSignIn);

router.post("/deleteAll", handleDeleteAllUser);

router.get("/getAll", handleGetAllUsers);

export default router;