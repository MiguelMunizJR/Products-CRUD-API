const db = require("../utils/database");
const DataTypes = require("sequelize").DataTypes;

const Products = db.define("products", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: "is_available",
  },
});

module.exports = Products;
