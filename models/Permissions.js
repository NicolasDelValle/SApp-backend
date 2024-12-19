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
      Permissions.belongsToMany(models.Role, {
        through: models.Roles_Permissions,
      });
    }
  }
  Permissions.init(
    {
      permission: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Permissions",
    }
  );
  return Permissions;
};
