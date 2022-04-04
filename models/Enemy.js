const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Enemy extends Model {}

Enemy.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        enemy_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlpha: true,
            },
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
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
        mana: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
        agility: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'enemy',
    }
);

module.exports = Enemy;