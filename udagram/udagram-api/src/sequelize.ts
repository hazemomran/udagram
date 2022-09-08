import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  host: config.host,
  username: config.username,
  password: 'thispass',
  database: config.database,

  dialect: "postgres",
  storage: ":memory:",
});
