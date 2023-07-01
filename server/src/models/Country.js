const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        collate: "utf8_general_ci",
        charset: "utf8",
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.TEXT,
        allowNull: false,
        collate: "utf8_general_ci",
        charset: "utf8",
      },
      capital: {
        type: DataTypes.TEXT,
        collate: "utf8_general_ci",
        charset: "utf8",
      },
      subregion: {
        type: DataTypes.TEXT,
        collate: "utf8_general_ci",
        charset: "utf8",
      },
      area: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
