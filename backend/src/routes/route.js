import express from 'express';
const router = express.Router();

import { handlePet } from '../controllers/pet.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import { uploadFile } from '../controllers/pet.controller.js';

router.post("/add", validate('handlePet'), uploadFile, handlePet)

export default router;