module.exports = function (sequelize, DataTypes) {

let seller = sequelize.define("seller", {
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  created_at: DataTypes.DATE
});

return seller;
};
