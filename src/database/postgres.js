import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("[Database Postgres] Status: on");
    return prisma;
  } catch (error) {
    console.log("[Database Postgres] Error: " + error.message);
    throw error;
  }
}

export default main;
