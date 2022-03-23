import mongoose from "mongoose";

const main = async () => {
  try {
    const PORT = process.env.MONGO_PORT;
    const HOST = process.env.MONGO_HOST;

    if (!PORT) {
      throw Error("Mongo PORT is required");
    }

    if (!HOST) {
      throw Error("Mongo HOST is required");
    }

    const URI = `mongodb://${HOST}:${PORT}/boilerplate`;
    await mongoose.connect(URI);

    console.log("[Database Mongodb] status: on");
    return mongoose;
  } catch (error) {
    console.log("[Database Mongodb] error : " + error.message);
    throw error;
  }
};

export default main;
