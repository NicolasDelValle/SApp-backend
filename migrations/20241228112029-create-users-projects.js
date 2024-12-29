"use strict";

const { ENUM } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users_projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      project_id: {
        type: Sequelize.INTEGER,
      },
      role_id: {
        type: Sequelize.INTEGER,
      },

      state: {
        type: Sequelize.ENUM({ values: ["Active", "Inactive", "Requested"] }),
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

    await queryInterface.addConstraint("Users_Projects", {
      fields: ["user_id", "project_id", "role_id"],
      type: "unique",
      name: "unique_relation", // Nombre opcional para la restricción
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Users_Projects", "unique_relation");
    await queryInterface.dropTable("Users_Projects");
  },
};
