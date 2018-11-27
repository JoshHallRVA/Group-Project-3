module.exports = function (sequelize, DataTypes) {

let seller = sequelize.define("seller", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
  dates: DataTypes.STRING,
  message: DataTypes.STRING  
});

return seller;
};
 