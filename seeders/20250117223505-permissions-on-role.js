"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = await queryInterface.sequelize.query(
      `SELECT id, role FROM Roles`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const permissions = await queryInterface.sequelize.query(
      `SELECT id, permission FROM Permissions`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const roleMap = Object.fromEntries(roles.map((r) => [r.role, r.id]));
    const permissionMap = Object.fromEntries(
      permissions.map((p) => [p.permission, p.id])
    );

    const projectOwnerPermissions = [
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["DELETE_PROJECT"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["EDIT_PROJECT"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["ADD_USERS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["REMOVE_USERS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["MANAGE_ROLES"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["MANAGE_SPRINTS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["PRIORITE_BACKLOG"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["MANAGE_TASKS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["CHANGE_TASKS_STATE"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PROJECT_OWNER"],
        idPermission: permissionMap["VIEW_PROJECT"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const scrumMasterPermissions = [
      {
        idRole: roleMap["SCRUM_MASTER"],
        idPermission: permissionMap["EDIT_PROJECT"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["SCRUM_MASTER"],
        idPermission: permissionMap["ADD_USERS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["SCRUM_MASTER"],
        idPermission: permissionMap["REMOVE_USERS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["SCRUM_MASTER"],
        idPermission: permissionMap["MANAGE_SPRINTS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["SCRUM_MASTER"],
        idPermission: permissionMap["PRIORITE_BACKLOG"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["SCRUM_MASTER"],
        idPermission: permissionMap["MANAGE_TASKS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["SCRUM_MASTER"],
        idPermission: permissionMap["CHANGE_TASKS_STATE"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["SCRUM_MASTER"],
        idPermission: permissionMap["VIEW_PROJECT"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const productOwnerPermissions = [
      {
        idRole: roleMap["PRODUCT_OWNER"],
        idPermission: permissionMap["PRIORITE_BACKLOG"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PRODUCT_OWNER"],
        idPermission: permissionMap["MANAGE_TASKS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PRODUCT_OWNER"],
        idPermission: permissionMap["CHANGE_TASKS_STATE"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["PRODUCT_OWNER"],
        idPermission: permissionMap["VIEW_PROJECT"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const teamMemberPermissions = [
      {
        idRole: roleMap["TEAM_MEMBER"],
        idPermission: permissionMap["MANAGE_TASKS"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["TEAM_MEMBER"],
        idPermission: permissionMap["CHANGE_TASKS_STATE"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idRole: roleMap["TEAM_MEMBER"],
        idPermission: permissionMap["VIEW_PROJECT"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const viwerPermissions = [
      {
        idRole: roleMap["VIEWER"],
        idPermission: permissionMap["VIEW_PROJECT"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert(
      "roles_permissions",
      [
        ...projectOwnerPermissions,
        ...scrumMasterPermissions,
        ...productOwnerPermissions,
        ...teamMemberPermissions,
        ...viwerPermissions,
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles_permissions", null, {});
  },
};
