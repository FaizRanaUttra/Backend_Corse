import mongoose from "mongoose";

const patientSchema=mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    diagnosewith:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
      enum:["M", "F" , "O"],
      required:true
    },
admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
}


},{timestaps:true})


export const Patient=mongoose.model("Patient",patientSchema)