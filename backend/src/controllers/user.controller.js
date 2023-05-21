import { validationResult } from "express-validator";

import db_user_details from "../sql/sqlConnection.js";

import mongoose from "mongoose";

import { pet_details_schema } from "../models/pet_details.js";

import bcrypt from "bcrypt";

const newPet_model = mongoose.model("newPet", pet_details_schema);

// SignUp
export const handleSignUp = async (req, res) => {

        const { email, first_name, last_name, phone_number, user_password } = req.body;
        // const hash = await bcrypt.hash(user_password, 10);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
                // Validation errors
                return res.status(400).json({ errors: errors.array() });
        }

        try {
                db_user_details.query('SELECT COUNT(*) AS count FROM users WHERE email = ?', [email], async (err, result) => {
                        // db_user_details.query('SELECT COUNT(*) AS count FROM users WHERE email = ? OR user_password = ?', [email, user_password], (err, result) => {
                        if (err) {
                                res.send(err.message);
                                console.log(err.message);
                        }

                        if (result[0].count > 0) {
                                res.send({ message: "User already exists" });
                        }

                        else {
                                // Hash the user's password
                                const hash = await bcrypt.hash(user_password, 10);
                                console.log('shai check');
                                console.log(hash);
                                console.log(user_password);
                                db_user_details.query('INSERT INTO users (email, first_name, last_name, phone_number, user_password) VALUES (?,?,?,?,?)', [email, first_name, last_name, phone_number, hash], (err, result) => {
                                        // db_user_details.query('INSERT INTO users (email, first_name, last_name, user_password) VALUES (?,?,?,?)', [email, first_name, last_name, user_password], (err, result) => {
                                        if (err) {
                                                res.send(err.message);
                                                console.log(err.message);
                                        }
                                        res.send(result);
                                        console.log(result);
                                });
                        }
                });
        }
        catch (err) {
                res.send(err.message);
                console.log(err.message);
        }
};

// SignIn
export const handleSignIn = async (req, res) => {
        const { email, user_password } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
                // Validation errors
                return res.status(400).json({ errors: errors.array() });
        }

        try {
                // db_user_details.query('SELECT * FROM users WHERE email = ? AND user_password = ?', [email, user_password], (err, result) => {
                db_user_details.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
                        if (err) {
                                res.send(err.message);
                                console.log(err.message);
                        }

                        if (result.length > 0) {
                                const isMatch = await bcrypt.compare(user_password, result[0].user_password);
                                console.log(user_password, result[0].user_password);
                                if (isMatch) {
                                        res.send(result[0]);
                                        console.log(user_password, result[0].user_password);
                                }
                                else {
                                        res.send({ message: "Password is not the same" });
                                        console.log(user_password, result[0].user_password, isMatch);
                                }
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

// Delete all users
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

export const handleContactUser = async (req, res) => {
        console.log(req.body)
        const { email } = req.body;
        try {
                db_user_details.query('SELECT email, first_name, last_name, phone_number FROM users WHERE email = ?', [email], (err, result) => {
                        if (err) {
                                res.send(err.message);
                                console.log(err.message);
                        }
                        console.log(result[0])
                        res.send(result[0]);
                });
        }
        catch (err) {
                console.log(err.message);
        }
}

export const handleUserInfo = async (req, res) => {
        const email = req.query.email;
        console.log(req.query);
        console.log("email: " + email);
        try {
                //mongo
                const query = newPet_model.find({ userEmail: email })
                const result = await query.exec();
                // console.log(result);
                console.log(result)
                res.json(result);
        }
        catch (err) {
                console.log(err.message);
        }
}

