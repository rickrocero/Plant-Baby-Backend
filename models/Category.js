// Categories would include "Pet friendly" "Low Maintenance" "Exotic" "Large" "Medium""Small"
// Categories schema
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}


Category.init(
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
    }
}),

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category',
    };

module.exports = Category;