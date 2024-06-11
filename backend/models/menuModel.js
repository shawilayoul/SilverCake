const  mongoose =  require( "mongoose");

const menuSchema = new mongoose.Schema(
  {
    title: {
      type: String,
     // required: true,
    },
    price: {
      type: Number,
      //required: true,
    },
    description: {
      type: String,
      //required: true,
    },
    image: {
      type:String
      //data:Buffer,
     // contentType: String,
      //required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = {
  Menu 
}