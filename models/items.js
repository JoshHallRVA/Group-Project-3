module.exports = function (sequelize, DataTypes) {
  var items = sequelize.define("items", {
    sellerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    details: DataTypes.STRING,
    price: DataTypes.DECIMAL
  });

 
  
  items.associate = function(models) {
    // We're saying that a items should belong to an seller
    // A items can't be created without an seller due to the foreign key constraint
        items.belongsTo(models.seller, {
          foreignKey: {
            allowNull: false
          }
        });
    items.belongsToMany( models.wishList, {
      as: 'wishList',
      through: { model: models.wishList, unique: false }, //this can be string or a model,
      foreignKey: 'itemId'
  });
  
  
   
    items.belongsTo(models.wishList, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return items;
};
