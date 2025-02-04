"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          id: Sequelize.fn("uuid_generate_v4"),
          role: "PROJECT_OWNER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.fn("uuid_generate_v4"),
          role: "SCRUM_MASTER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.fn("uuid_generate_v4"),
          role: "PRODUCT_OWNER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.fn("uuid_generate_v4"),
          role: "TEAM_MEMBER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.fn("uuid_generate_v4"),
          role: "VIEWER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { ignoreDuplicates: true }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
