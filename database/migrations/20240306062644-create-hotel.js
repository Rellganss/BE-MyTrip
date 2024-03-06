'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotel_name: {
        type: Sequelize.STRING
      },
      hotel_desc: {
        type: Sequelize.STRING
      },
      hotel_addres: {
        type: Sequelize.STRING
      },
      hotel_city: {
        type: Sequelize.STRING
      },
      hotel_photo: {
        type: Sequelize.STRING
      },
      hotel_harga: {
        type: Sequelize.INTEGER
      },
      hotel_rating: {
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
    await queryInterface.dropTable('hotels');
  }
};