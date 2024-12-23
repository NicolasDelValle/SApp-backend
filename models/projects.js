"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
