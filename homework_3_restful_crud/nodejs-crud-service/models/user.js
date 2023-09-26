'use strict';
const {
  Model,
  DataTypes,
  DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  };
  User.init({
    username: DataTypes.STRING(32),
    first_name: DataTypes.STRING(32),
    last_name: DataTypes.STRING(32),
    email: DataTypes.STRING(64),
    phone: DataTypes.STRING(32),
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    schema: 'otus_3',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return User;
};