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
                          body("petName")
                            .not()
                            .isEmpty()
                            .withMessage("אוי, נראה ששכחת להזין את שם החיה")
                            .trim()
                            .isLength({ min: 2, max: 26 })
                            .withMessage("שם החיה צריך להכיל בין 2 ל-26 תווים")
                            .escape(),
                          body("petGender")
                            .not()
                            .isEmpty()
                            .withMessage("אוי! נראה ששכחת להזין את שם החיה")
                            .trim()
                            .escape(),
                          body("location")
                            .not()
                            .isEmpty()
                            .withMessage("אוי, נראה ששכחת להזין מיקום גאוגרפי ")
                            .trim()
                            .isLength({ min: 3, max: 26 })
                            .withMessage("מיקום צריך להכיל בין 3 ל-26 תווים")
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
                                        .trim()
                                        .withMessage('אוי, נראה ששכחת להזין שם פרטי')
                                        .escape(),
                                body('last_name')
                                        .not()
                                        .isEmpty()
                                        .withMessage('אוי, נראה ששכחת להזין שם משפחה')
                                        .trim()
                                        .escape(),
                                body('email')
                                        .not()
                                        .isEmpty()
                                        .withMessage('אוי, נראה ששכחת להזין כתובת אימייל')
                                        .isEmail()
                                        .withMessage('אופס! כתובת מייל לא תקינה')
                                        .normalizeEmail(),
                                body('user_password')
                                        .not()
                                        .isEmpty()
                                        .withMessage('אוי, נראה ששכחת לזין סיסמא')
                                        .trim()
                                        .escape()
                                        .isLength({ min: 4, max: 26 })
                                        .withMessage('סיסמה צריכה להכיל בין 4 ל-26 תווים'),
                                body('phone_number')
                                        .optional()
                                        .trim()
                                        .escape()
                                        .custom((value) => {
                                                if (value && !/^[0-9]+$/.test(value)) {
                                                        throw new Error('ניתן להכניס רק מספרים');
                                                }
                                                if (value && value.length !== 10) {
                                                        throw new Error('ניתן להזין 10 ספרות בדיוק בשדה טלפון');
                                                }
                                                return true;
                                        })
                        ];
                }

                case "handleSignIn": {
                        return [
                          body("email")
                            .not()
                            .isEmpty()
                            .withMessage("אוי, נראה ששכחת להזין כתובת אימייל")
                            .isEmail()
                            .withMessage("אוי, כתובת האימייל שהזנת לא תקינה")
                            .normalizeEmail(),
                          body("user_password")
                            .not()
                            .isEmpty()
                            .withMessage("אוי, נראה ששכחת לזין סיסמא")
                            .trim()
                            .escape()
                            .isLength({ min: 4, max: 26 })
                            .withMessage("סיסמה צריכה להכיל בין 4 ל-26 תווים"),
                        ];
                }
        }
};

