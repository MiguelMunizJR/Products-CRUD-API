const productsControllers = require("./products.controllers");

const getAllProducts = (req, res) => {
  productsControllers
    .getAllProducts()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const getProductById = (req, res) => {
  const id = req.params.id;

  productsControllers
    .getProductById(id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: err.message,
      });
    });
};

const createProduct = (req, res) => {
  const { name, category, price } = req.body;

  if (name && category && price) {
    productsControllers
      .createProduct({
        name,
        category,
        price,
      })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  } else {
    res.status(400).json({
      message: "Missing Data!",
      fields: {
        name: "string",
        category: "string",
        price: 1276,
      },
    });
  }
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, category, price, isAvailable } = req.body;

  productsControllers
    .patchProduct(id, {
      name,
      category,
      price,
      isAvailable,
    })
    .then((response) => {
      if (response[0]) {
        res.status(200).json({
          message: `User with ID: ${id}, edited succesfully!`,
        });
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;

  productsControllers
    .deleteProduct(id)
    .then((response) => {
      if (response) {
        res.status(204).json();
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
