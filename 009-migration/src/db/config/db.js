import { Sequelize } from "sequelize";
import "dotenv/config"

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: false,
        dialectOptions: {
            requestTimeout: 30000,
            encrypt: true,
        }
    }
)

export default sequelize