"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users_projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_projects.belongsTo(models.Users, { foreignKey: "user_id" });
      Users_projects.belongsTo(models.Projects, { foreignKey: "project_id" });
      Users_projects.belongsTo(models.Roles, { foreignKey: "role_id" });
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
