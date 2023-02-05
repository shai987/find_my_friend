import express from 'express';
const router = express.Router();

import { handlePet } from '../controllers/pet.controller.js';
import { handlePetDetails } from '../controllers/pet_details.controller.js';

import { validate } from "../middlewares/validator.middleware.js";


router.post("/add", validate('handlePet'), handlePet);

router.post("/petDetails", validate('handlePetDetails'), handlePetDetails);


export default router;