const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Veiculos = sequelize.define('Veiculos', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    locadora: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    motor: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    portas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cambio: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    ar_condicionado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

module.exports = Veiculos;
