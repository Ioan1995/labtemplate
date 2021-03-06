'use strict';
module.exports = (sequelize, DataTypes) => {
  var Car = sequelize.define('Car', {
    model: DataTypes.STRING,
    marca: DataTypes.STRING,
    avalable:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Car;
};