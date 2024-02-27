import mongoose from "mongoose";

const hospitalSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    adressLine1:{
        type:String,
        required:true
    },
    adressLine2:{
        type:String,
    
    },
    city:{
        type:String,
        required:true
    },

    Pincode:{
        type:String,
        required:true
    },
   specialized:[
    {
        type:String 
    },
   ],


},{timestaps:true})


export const Hospital=mongoose.model("Hospital",hospitalSchema)