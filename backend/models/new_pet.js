import mongoose from 'mongoose';

export const newPet_schema = new mongoose.Schema({
        name: String,
        img:
        {
                data: Buffer,
                contentType: String
        }
})

// const newPet = mongoose.model("newPet", newPet_schema);
// module.exports = user;