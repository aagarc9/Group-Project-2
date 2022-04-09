const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlayerChar extends Model {}

PlayerChar.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        character_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        classType: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlpha: true,
            },
        },
        classDesc: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        // health: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         isNumeric: true,
        //     },
        // },
        // mana: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         isNumeric: true,
        //     },
        // },
        // strength: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         isNumeric: true,
        //     },
        // },
        // agility: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         isNumeric: true,
        //     },
        // },
        // defense: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         isNumeric: true,
        //     },
        // },
        // speed: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         isNumeric: true,
        //     },
        // },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'playerchar',
    }
);

module.exports = PlayerChar;