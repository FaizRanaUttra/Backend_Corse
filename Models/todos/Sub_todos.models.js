import mongoose from "mongoose";

const SubtodoSchema=new mongoose.Schema(
    {

content:{
    type:String,
    required:true,
},

complet:{
    type:Boolean,
    default:false
},
createBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},

    },
    
    {timestamps:true})

    export const subtodos=mongoose.model("Subtodos",SubtodoSchema)