import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
// import PublicRouter from "./routes/public";
import MongoDb from "./database/mongoose";
import RedisDb from "./database/redis";

const app = express();

/* devDependencies start */
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

MongoDb();
RedisDb();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(PublicRouter);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log(`Running at ${PORT}`));

export default app;