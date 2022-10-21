const express = require("express");
const db = require("./utils/database");
const productsRouter = require("./products/products.router");

const app = express();

app.use(express.json());

//? Database Conection
db.authenticate()
  .then(() => {
    console.log("Database Authenticate!");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database Synced!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/products", productsRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server ok!",
  });
});

app.listen(9000, () => {
  console.log("Server listen at port 9000!");
});
