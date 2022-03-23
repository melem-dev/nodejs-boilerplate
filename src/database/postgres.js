import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log("[Database] Postgres status: on");
  })
  .catch((err) => {
    throw Error(err.message);
  });

export default prisma;
