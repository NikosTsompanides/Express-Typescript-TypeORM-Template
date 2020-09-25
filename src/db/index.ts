import { createConnection, Connection } from "typeorm";

export const getConnection = (): Promise<Connection> => createConnection();
