import { Sequelize } from "sequelize";
const db = new Sequelize('toko_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: () => {},
})

export default db;