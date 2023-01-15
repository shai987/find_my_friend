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
        }
};