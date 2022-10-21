const router = require("express").Router();
const productsServices = require("./products.services");

router
  .route("/")
  .get(productsServices.getAllProducts)
  .post(productsServices.createProduct);

router
  .route("/:id")
  .get(productsServices.getProductById)
  .patch(productsServices.updateProduct)
  .delete(productsServices.deleteProduct);

module.exports = router;
