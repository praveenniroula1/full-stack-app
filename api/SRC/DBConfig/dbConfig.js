import mongoose from "mongoose";

const dbConfig = () => {
  try {
    const mongoString = "mongodb://localhost:27017/needtofinish";
    const connection = mongoose.connect(mongoString);
    mongoString && connection
      ? console.log("successfully connected MONGODB")
      : console.log("Error connected MONGODB");
  } catch (error) {
    console.log(error);
  }
};
export default dbConfig;
