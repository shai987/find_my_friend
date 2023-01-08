const mongoose = require('mongoose');

const newPet_schema = new mongoose.Schema({
        name: String,
        company: String
})

const user = mongoose.model("users", user_schema);
module.exports = user;