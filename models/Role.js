"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.Permissions, {
        through: models.Roles_Permissions,
        foreignKey: "role_id",
      });

      Role.belongsToMany(models.User, {
        through: models.Users_projects,
        foreignKey: "role_id",
      });
    }
  }

  Role.init(
    {
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
    }
  );

  return Role;
};
