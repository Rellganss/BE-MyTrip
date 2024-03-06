"use strit";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    static associate(models) {
      profile.belongsTo(models.user, {
        foreignKey: {
          name: "id_profile",
        },
      });
    }
  }
  profile.init(
    {
      id_profile: DataTypes.INTEGER,
      profile_name: DataTypes.STRING,
      profile_email: DataTypes.STRING,
      profile_notelp: DataTypes.INTEGER,
      profile_dana: DataTypes.INTEGER,
      profile_photos: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};