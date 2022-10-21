require("dotenv").config();

const config = {
  port: process.env.PORT,
  nodeENv: process.env.NODE_ENV || "development",
  db: {
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "postgres",
    database: process.env.DB_NAME || "Products",
  },
};

module.exports = config;
