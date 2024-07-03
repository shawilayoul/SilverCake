const  mongoose =  require( "mongoose");

const productsSchema = new mongoose.Schema(
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
    chef: {
      type:String,
    
    },
    category: {
      type:String,
    
    },
    allCategory: {
      type:String,
    
    },
    cuisine: {
      type:String,
    
    },
    count:{
      type:Number
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product",productsSchema);

module.exports = Product