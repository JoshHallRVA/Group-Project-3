module.exports = function (sequelize, DataTypes) {
  let wishList = sequelize.define("wishList", {
    buyerId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
  });
  return wishList;
};
