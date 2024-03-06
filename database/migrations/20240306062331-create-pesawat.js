'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pesawat', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pesawat_name: {
        type: Sequelize.STRING
      },
      pesawat_desc: {
        type: Sequelize.STRING
      },
      pesawat_addres: {
        type: Sequelize.STRING
      },
      pesawat_dari: {
        type: Sequelize.STRING
      },
      pesawat_ke: {
        type: Sequelize.STRING
      },
      pesawat_harga: {
        type: Sequelize.INTEGER
      },
      pesawat_rating: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pesawat');
  }
};