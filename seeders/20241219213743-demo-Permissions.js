"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Permissions",
      [
        {
          permission: "CREATE_DELETE_PROJECT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          permission: "EDIT_NAME_DESCRIPTION_PROJECT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          permission: "ADD_DELETE_USERS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          permission: "ASSIGN_CHANGE_ROLES",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          permission: "MANAGE_SPRINTS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          permission: "PRIORITE_BACKLOG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          permission: "MANAGE_TASKS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          permission: "CHANGE_TASKS_STATE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          permission: "VIEW_PROJECT_STATE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permissions", null, {});
  },
};
