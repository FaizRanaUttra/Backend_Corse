import mongoose from "mongoose";

const medicalRedcordSchema=mongoose.Schema({},{timestaps:true})


export const MedicalRecord=mongoose.model("Medical",medicalRedcordSchema)