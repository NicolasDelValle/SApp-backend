"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permissions.belongsTo(models.Role, {
        foreignKey: "id",
      });
    }
  }
  Permissions.init(
    {
      permission: DataTypes.STRING,
      idRole: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Permissions",
    }
  );
  return Permissions;
};
