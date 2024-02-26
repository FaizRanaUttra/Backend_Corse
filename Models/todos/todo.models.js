import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    contant:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    Subtodoes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subtodos"
        }
    ]
    
    },{timestamps:true})


export const Todo =mongoose.model("Todo",todoSchema)