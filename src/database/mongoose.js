import mongoose from "mongoose";

const main = async () => {
  try {
    const URI = "mongodb://localhost:27017/";
    await mongoose.connect(URI);

    console.log("[Database Mongodb] status: on");
    return mongoose;
  } catch (error) {
    console.log("[Database Mongodb] error : " + error.message);
  }
};

export default main;
