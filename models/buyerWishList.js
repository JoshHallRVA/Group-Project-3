module.exports = function (sequelize, DataTypes) {
  let wishList = sequelize.define("wishList", {
    item: DataTypes.STRING,
    created_at: DataTypes.DATE
  });
  return wishList;
};
