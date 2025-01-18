"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("projects", "projectName", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn("projects", "projectDescription", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    return Promise.all([queryInterface.removeColumn("projects", "project")]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
