"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    static associate(models) {
      Projects.belongsToMany(models.User, {
        through: models.Users_projects,
        foreignKey: "project_id",
      });
    }
  }

  Projects.init(
    {
      projectName: { type: DataTypes.TEXT, allowNull: false },
      projectDescription: { type: DataTypes.TEXT, allowNull: true },
    },
    {
      sequelize,
      modelName: "Projects",
    }
  );

  return Projects;
};
