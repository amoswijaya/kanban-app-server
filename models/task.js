'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, {foreignKey:'UserId'})
    }
  };
  Task.init({
    title: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'title name cannot be empty'
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
    category: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'category cannot be empty'
        }
      }
    },
    writtenBy: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
    hooks: {
      beforeCreate:user => {
        user.writtenBy = user.writtenBy || 'anonymous'
      }
    }
  });
  return Task;
};