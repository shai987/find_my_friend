import { validationResult } from "express-validator";

import db_user_details from "../sql/sqlConnection.js";

// SignUp
export const handleSignUp = async (req, res) => {

        const { email, first_name, last_name, user_password } = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
                // Validation errors
                return res.status(400).json({ errors: errors.array() });
        }

        try {
                db_user_details.query('INSERT INTO users (email, first_name, last_name, user_password) VALUES (?,?,?,?)', [email, first_name, last_name, user_password], (err, result) => {
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

// SignIn
export const handleSignIn = async (req, res) => {
        const { email, user_password } = req.query;

        /*   const errors = validationResult(req);
        
          if (!errors.isEmpty()) {
            // Validation errors
            return res.status(400).json({ errors: errors.array() });
          } */

        try {
                db_user_details.query('SELECT * FROM users WHERE email = ? AND user_password = ?', [email, user_password], (err, result) => {
                        if (err) {
                                res.send(err.message);
                                console.log(err.message);
                        }

                        if (result.length > 0) {
                                res.send(result[0]);
                        } else {
                                res.send({ message: "User not found" });
                        }
                });

        }
        catch (err) {
                res.send(err.message);
                console.log(err.message);
        }
};

// Delete all
export const handleDeleteAllUser = async (req, res) => {

        db_user_details.query("DELETE FROM users", (err, result) => {
                if (err) {
                        res.send(err.message);
                        console.log(err.message);
                }
        });
}

// Get all users
export const handleGetAllUsers = async (req, res) => {
        try {
                db_user_details.query('SELECT * FROM users', (err, result) => {
                        if (err) {
                                res.send(err.message);
                                console.log(err.message);
                        }
                        res.send(result);
                });
        }
        catch (err) {
                console.log(err.message);
        }
}