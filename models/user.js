'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword} = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {foreignKey:'UserId'})
    }
  };
  User.init({
    email: {
      type:DataTypes.STRING,
      unique:{
        args:true,
        msg:'email already exist'
      },
      validate:{
        isEmail:{
          args:true,
          msg:'Invalid format email'
        }
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate: user => {
        console.log(user);
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};