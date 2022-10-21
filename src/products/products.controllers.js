const Products = require("../models/products.model");
const uuid = require("uuid");

const getAllProducts = async () => {
  const data = await Products.findAll();
  return data;
};

const getProductById = async (id) => {
  const data = await Products.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createProduct = async (data) => {
  const newProduct = await Products.create({
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price,
    isAvailable: data.isAvailable,
  });
  return newProduct;
};

const patchProduct = async (id, data) => {
  const product = await Products.update(data, {
    where: {
      id,
    },
  });
  return product;
};

const deleteProduct = async (id) => {
  const data = await Products.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  patchProduct,
  deleteProduct,
};
