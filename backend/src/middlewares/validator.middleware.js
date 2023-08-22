import { body } from 'express-validator';

export const validate = (method) => {
        switch (method) {
                case 'handlePetImage': {
                        return [
                                body('name')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Name is required')
                                        .trim()
                                        .escape(),
                        ];
                }
                case "handlePetDetails": {
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
                                body('petGender')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Pet gender is required')
                                        .trim()
                                        .escape(),
                                body('petBreeds')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Pet breeds is required')
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
                case "handlePetDetailsFound": {
                        return [
                                body('petType')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Pet type is required')
                                        .trim()
                                        .escape(),
                                body('petGender')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Pet gender is required')
                                        .trim()
                                        .escape(),
                                body('petBreeds')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Pet breeds is required')
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
                case "handleSignUp": {
                        return [
                                body('first_name')
                                        .not()
                                        .isEmpty()
                                        .withMessage('First name is required')
                                        .trim()
                                        .escape(),
                                body('last_name')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Last name is required')
                                        .trim()
                                        .escape(),
                                body('email')
                                        .not()
                                        .isEmpty()
                                        .withMessage('E-mail is required')
                                        .isEmail()
                                        .withMessage('Please insert a valid e-mail')
                                        .normalizeEmail(),
                                body('user_password')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Password is required')
                                        .trim()
                                        .escape()
                                        .isLength({ min: 4, max: 26 })
                                        .withMessage('Min 4 digit for Password'),
                                body('phone_number')
                                        .optional()
                                        .trim()
                                        .escape()
                                        .custom((value) => {
                                                if (value && !/^[0-9]+$/.test(value)) {
                                                        throw new Error('ניתן להכניס רק מספרים');
                                                }
                                                if (value && value.length !== 10) {
                                                        throw new Error('Exactly 10 digits are required for the phone number');
                                                }
                                                return true;
                                        })
                        ];
                }

                case "handleSignIn": {
                        return [
                                body('email')
                                        .not()
                                        .isEmpty()
                                        .withMessage('E-mail is required')
                                        .isEmail()
                                        .withMessage('Please insert a valid e-mail')
                                        .normalizeEmail(),
                                body('user_password')
                                        .not()
                                        .isEmpty()
                                        .withMessage('Password is required')
                                        .trim()
                                        .escape()
                                        .isLength({ min: 4, max: 26 })
                                        .withMessage('Min 4 digit for Password'),
                        ];
                }
        }
};

