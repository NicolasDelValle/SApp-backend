"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("roles_permissions", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      idRole: {
        type: Sequelize.UUID,
        references: {
          model: "Roles",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      idPermission: {
        type: Sequelize.UUID,
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
    await queryInterface.addConstraint("roles_permissions", {
      fields: ["idRole", "idPermission"],
      type: "unique",
      name: "unique_role_permission",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("roles_permissions");
  },
};
