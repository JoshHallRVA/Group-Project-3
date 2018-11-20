module.exports = function (sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    created_at: DataTypes.DATE
  });
  return items;
};
