const  mongoose =  require( "mongoose");

const menuSchema = new mongoose.Schema(
  {
    title: {
      type: String,
  
    },
    price: {
      type: Number,
     
    },
    description: {
      type: String,
     
    },
    image: {
      type:String,
    
    },
    time: {
      type:Number,
    
    },
    Chef: {
      type:String,
    
    },
    Category: {
      type:String,
    
    },
    CategoryAll: {
      type:String,
    
    },
    cuisine: {
      type:String,
    
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