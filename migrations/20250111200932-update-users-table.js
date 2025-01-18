"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users", "id", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    });

    await queryInterface.changeColumn("Users", "auth0Id", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });

    // Agregar la columna "picture" si no existe
    await queryInterface.addColumn("Users", "picture", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Agregar la columna "email" si no existe
    await queryInterface.addColumn("Users", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Revertir la columna "auth0Id" al tipo INTEGER
    await queryInterface.changeColumn("Users", "auth0Id", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    // Remover la columna "picture"
    await queryInterface.removeColumn("Users", "picture");

    // Remover la columna "email"
    await queryInterface.removeColumn("Users", "email");
  },
};
