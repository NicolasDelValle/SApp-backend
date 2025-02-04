"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User_Project extends Model {
    static associate(models) {
      User_Project.belongsTo(models.User, { foreignKey: "user_id" });
      User_Project.belongsTo(models.Projects, { foreignKey: "project_id" });
      User_Project.belongsTo(models.Role, { foreignKey: "role_id" });
    }
  }

  User_Project.init(
    {
      user_id: DataTypes.UUID,
      project_id: DataTypes.UUID,
      role_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "User_Project",
    }
  );

  return User_Project;
};
