const  mongoose = require( "mongoose");

  const dbConnect = async() =>{
  try {
    await mongoose.connect("mongodb://localhost:27017/cakeArt");
    console.log('db connected sucessfully')
  } catch (error) {
    console.log(error);
  }
}
module.exports ={
  dbConnect
}
