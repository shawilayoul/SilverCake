import mongoose  from "mongoose";

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgURL:{
        type:String,
        required:false
    },
},{
    timestamps:true
})

const Menu = mongoose.model("Menu",menuSchema);
export default Menu

