"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users", "id", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    });

    await queryInterface.changeColumn("Users", "auth0Id", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });

    await queryInterface.addColumn("Users", "picture", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users", "auth0Id", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.removeColumn("Users", "picture");

    await queryInterface.removeColumn("Users", "email");
  },
};
