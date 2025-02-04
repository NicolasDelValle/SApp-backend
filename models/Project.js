"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsToMany(models.User, {
        through: models.User_Project,
        foreignKey: "project_id",
      });
    }
  }

  Project.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      projectName: { type: DataTypes.TEXT, allowNull: false },
      projectDescription: { type: DataTypes.TEXT, allowNull: true },
    },
    {
      sequelize,
      modelName: "Project",
    }
  );

  return Project;
};
