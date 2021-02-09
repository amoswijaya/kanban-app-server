'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Taks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Taks.belongsTo(models.User,{foreignKey:'UserId'} )
    }
  };
  Taks.init({
    title: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'title taks cannot be empty'
        }
      }
    },
    description: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'description cannot be empty'
        }
      }
    },
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Taks',
  });
  return Taks;
};