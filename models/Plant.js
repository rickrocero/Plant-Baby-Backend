// Plant schema (image, name, price, categories)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.String,
        required: true,
        trim: true
    },
    image: {
        type: DataTypes.String,
    },
    price: {
        type: DataTypes.INTEGER,
        required: true,
    },
    category: {
        type: DataTypes.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}),

{
sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Plant',
};

module.exports = Plant;