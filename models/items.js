module.exports = function (sequelize, DataTypes) {
  var items = sequelize.define("items", {
    sellerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  });
  return items;
};
