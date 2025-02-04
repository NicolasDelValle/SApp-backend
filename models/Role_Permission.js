"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role_Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role_Permission.init(
    {
      idRole: DataTypes.UUID,

      idPermission: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Role_Permission",
    }
  );
  return Role_Permission;
};
