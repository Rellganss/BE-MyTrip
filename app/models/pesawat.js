'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pesawat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pesawat.init({
    pesawat_name: DataTypes.STRING,
    pesawat_desc: DataTypes.STRING,
    pesawat_addres: DataTypes.STRING,
    pesawat_dari: DataTypes.STRING,
    pesawat_ke: DataTypes.STRING,
    pesawat_harga: DataTypes.INTEGER,
    pesawat_rating: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'pesawat',
  });
  return pesawat;
};