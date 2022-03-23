import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./database/";
// import PublicRouter from "./routes/public";

const app = express();

/* devDependencies start */

async function main() {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // app.use(PublicRouter);

  const PORT = process.env.PORT || 8081;
  app.listen(PORT, () => console.log(`Running at ${PORT}`));
}

main().catch((err) => console.log(err));

export default app;
