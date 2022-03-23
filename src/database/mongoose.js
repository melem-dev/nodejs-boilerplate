import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("[Database] Mongodb status: on");
  })
  .catch(({ message }) => {
    throw Error(message);
  });

export default mongoose;
