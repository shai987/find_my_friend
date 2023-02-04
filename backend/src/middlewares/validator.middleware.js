import { body } from 'express-validator';

export const validate = (method) => {
        switch (method) {
                case 'handlePet': {
                        return [
                                body('name')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Name is required')
                                        .trim()
                                        .escape(),
                        ];
                }
                case "handlePetDetails":{
                        return [
                                body('petName')
                                  .not()
                                  .isEmpty()
                                  .withMessage('Pet name is required')
                                  .trim()
                                  .escape(),
                                body('petType')
                                  .not()
                                  .isEmpty()
                                  .withMessage('Pet type is required')
                                  .trim()
                                  .escape(),
                                body('gender')
                                  .not()
                                  .isEmpty()
                                  .withMessage('Pet gender is required')
                                  .trim()
                                  .escape(),
                                body('breed')
                                  .not()
                                  .isEmpty()
                                  .withMessage('Pet name is required')
                                  .trim()
                                  .escape(),
                                body('location')
                                  .not()
                                  .isEmpty()
                                  .withMessage('Location is required')
                                  .trim()
                                  .escape(),
                              ];
                }
        }
};

