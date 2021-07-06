const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comics extends Model {}

//will need to change values and names below

Comics.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comments: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    main_charachter: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comics',
});

module.exports = Comics;