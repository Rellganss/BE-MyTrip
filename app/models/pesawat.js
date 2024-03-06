"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pesawat extends Model {
    static associate(models) {
      pesawat.belongsTo(models.user, {
        foreignKey: {
          name: "id_pesawat",
        },
      });
    }
  }
  pesawat.init(
    {
      id_pesawat: DataTypes.INTEGER,
      pesawat_name: DataTypes.STRING,
      pesawat_desc: DataTypes.STRING,
      pesawat_address: DataTypes.STRING,
      pesawat_city: DataTypes.STRING,
      pesawat_photos: DataTypes.STRING,
      pesawat_price: DataTypes.INTEGER,
      pesawat_rating: { type: DataTypes.INTEGER, min: 0, max: 5 },
    },
    {
      sequelize,
      modelName: "pesawat",
    }
  );
  return pesawat;
};