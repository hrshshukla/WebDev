import mongoose from "mongoose";

const dummyDataschema = new mongoose.Schema({
    name: String ,
    salary: Number,
    language: String,
    city:String ,
    isManager: Boolean 
})

export const dummyData = mongoose.model('employee', dummyDataschema)