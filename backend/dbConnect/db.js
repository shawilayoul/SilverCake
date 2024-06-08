import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/cakeArt");
    console.log('db connected sucessfully')
  } catch (error) {
    console.log(error);
  }
}
export default dbConnect;
