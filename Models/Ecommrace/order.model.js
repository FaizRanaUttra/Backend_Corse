import mongoose from "mongoose";


const orderItemSchema=new mongoose.Schema({
    ProdutId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    }
})

const OrderSchema=new mongoose.Schema(
    {
orderPrice:{
    type:Number,
    required:true
},

customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",

},
orderItems:{
    type:[orderItemSchema]
},
adress:{
    type:String,
    required:true
},
status:{
    type:String,
    enum:["PENDING","CANCELLED","DELIVRED"],
    default:"PENDING"
}
}
,{timestamps:true})

export const Order=mongoose.model("Order",OrderSchema)