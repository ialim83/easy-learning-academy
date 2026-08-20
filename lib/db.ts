// import { PrismaClient } from "@prisma/client"
import { PrismaClient } from "../lib/generated/prisma/client"

import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});

declare global {
  // Use "var" so it merges with globalThis in TypeScript
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient({adapter})

if (process.env.NODE_ENV !== "production") globalThis.prisma = db
