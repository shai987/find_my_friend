import mongoose from 'mongoose';

export const pet_details_schema = new mongoose.Schema({
        name: String,
        petName: String,
        petType: String,
        petGender: String,
        petBreeds: String,
        location: String, 
        img:
        {
                data: Buffer,
                contentType: String
        }
})

// const newPet = mongoose.model("newPet", newPet_schema);
// module.exports = user;