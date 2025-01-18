"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        role: "PROJECT_OWNER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { role: "SCRUM_MASTER", createdAt: new Date(), updatedAt: new Date() },
      { role: "PRODUCT_OWNER", createdAt: new Date(), updatedAt: new Date() },
      { role: "TEAM_MEMBER", createdAt: new Date(), updatedAt: new Date() },
      { role: "VIEWER", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
