import { PrismaClient } from "@prisma/client"

// Extend globalThis type so TS knows about prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"], // only log errors in prod
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  })

// Ensure only 1 PrismaClient instance in dev
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

// Optional: Test connection on startup (logs once)
if (process.env.NODE_ENV === "development") {
  prisma
    .$connect()
    .then(() => {
      console.log("[DB] Connected successfully")
    })
    .catch((err) => {
      console.error("[DB] Connection failed:", err)
    })
}
