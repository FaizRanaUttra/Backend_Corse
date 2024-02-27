import mongoose from "mongoose";

const DoctorSchema=mongoose.Schema({
    name:{
type:String,
required:true
    },
salary:{
    type:String,
    required:true
},
qalification:{
    required:true,
    type:String
},
experenceInyear:{
    type:Number,
    default:0
},
workInHospital:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    },
],


},{timestaps:true})


export const Doctor=mongoose.model("Doctor",DoctorSchema)