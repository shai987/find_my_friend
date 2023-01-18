import express from 'express';
const router = express.Router();

import { handlePet } from '../controllers/pet.controller.js';
import { validate } from '../middlewares/validator.middleware.js';

router.post("/add", validate('handlePet'), handlePet);

export default router;