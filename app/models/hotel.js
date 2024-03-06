"use strict";

const { Model } = require("sequelize")
module.exports = (Sequelize, DataTypes) => {
    class hotel extends Model {
        static associate(models) {
            hotel.belongsTo(models.user, {
                foreignKey: {
                    name: "id_hotel"
                }
            })
        }
    }
    auth.init(
        {
        id_hotel: DataTypes.INTEGER,
        hotel_name: DataTypes.STRING,
        hotel_desc: DataTypes.STRING,
        hotel_address: DataTypes.STRING,
        hotel_city: DataTypes.STRING,
        hotel_photos: DataTypes.STRING,
        hotel_price: DataTypes.INTEGER,
        hotel_rating: { type: DataTypes.INTEGER, min: 0, max: 5 },
        },
        {
            Sequelize,
            modelName: "hotel"
        }
    );
    return hotel;
};