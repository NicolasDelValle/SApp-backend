"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Roles_Permissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idRole: {
        type: Sequelize.INTEGER,
        references: {
          model: "Roles",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      idPermission: {
        type: Sequelize.INTEGER,
        references: {
          model: "Permissions",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("Roles_Permissions", {
      fields: ["idRole", "idPermission"],
      type: "unique",
      name: "unique_role_permission", // Nombre opcional para la restricción
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Roles_Permissions",
      "unique_role_permission"
    );

    await queryInterface.dropTable("Roles_Permissions");
  },
};
