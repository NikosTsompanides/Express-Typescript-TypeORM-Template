import dotenv from "dotenv";

dotenv.config();

export const config = {
  app: {
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
  },
  server: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    isProduction: process.env.NODE_ENV === "production",
    isSeed: process.env.NODE_ENV === "seed",
    isDevelopment: process.env.NODE_ENV !== "production",
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB,
  },
};
