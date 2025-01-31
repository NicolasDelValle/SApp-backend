"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users_projects extends Model {
    static associate(models) {
      Users_projects.belongsTo(models.User, { foreignKey: "user_id" });
      Users_projects.belongsTo(models.Projects, { foreignKey: "project_id" });
      Users_projects.belongsTo(models.Role, { foreignKey: "role_id" });
    }
  }

  Users_projects.init(
    {
      user_id: DataTypes.INTEGER,
      project_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users_projects",
    }
  );

  return Users_projects;
};
