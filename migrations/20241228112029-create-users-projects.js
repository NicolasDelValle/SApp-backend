"use strict";

const { ENUM } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users_projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      role_id: {
        allowNull: false,
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

    await queryInterface.addConstraint("users_projects", {
      fields: ["user_id", "project_id", "role_id"],
      type: "unique",
      name: "unique_relation",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("users_projects", "unique_relation");
    await queryInterface.dropTable("users_projects");
  },
};
