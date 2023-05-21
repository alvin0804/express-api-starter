import { DataSource } from "typeorm";
import { User } from "./entity/user";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '192.168.xx.x',
  port: 3306,
  database: "xxx",
  username: 'xxxx',
  password: 'xx',
  entities: [User],
  synchronize: true,
  logging: true,
})