import pino from "pino";
import { config } from "../config";

export const logger = pino({
  name: config.app.name,
  level: "debug",
  prettyPrint: config.server.isDevelopment,
});
