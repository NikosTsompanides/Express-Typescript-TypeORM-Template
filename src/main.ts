import "reflect-metadata";
import express from "express";
import cors from "cors";
import expressPinoLogger from "express-pino-logger";
import { logger } from "./utils/Logger";
import { getConnection } from "./db";
import { config } from "./config";

export const runApp = async (): Promise<void> => {
  // Connect to Postgres
  await getConnection();

  // Initialize Express Server
  const app = express();
  app.use("*", cors());
  app.use(expressPinoLogger({ logger }));
  app.listen({ port: config.server.port });
};

process.on("uncaughtException", (error: Error): void => {
  logger.error(error);
  process.exit(1);
});

process.on("unhandledRejection", (error: Error): void => {
  logger.error(error);
  process.exit(1);
});

runApp();
