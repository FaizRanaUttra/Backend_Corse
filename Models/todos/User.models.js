import mongoose  from "mongoose";

const UserSchema = new mongoose.Schema(
    {
User:{
    type:string,
    require:true,
    unique:true,
    lowecase:true
},
email:{
    type:string,
    require:true,
    unique:true,
    lowecase:true
},

password:{
    type:Number,
    require:true,
    unique:true
},
confirmpassword:{
    type:Number,
    require:true,
    unique:true
}

}

)

export const User = mongoose.model("User",UserSchema)