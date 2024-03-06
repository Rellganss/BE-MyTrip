'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotel.init({
    hotel_name: DataTypes.STRING,
    hotel_desc: DataTypes.STRING,
    hotel_addres: DataTypes.STRING,
    hotel_city: DataTypes.STRING,
    hotel_photo: DataTypes.STRING,
    hotel_harga: DataTypes.INTEGER,
    hotel_rating: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};