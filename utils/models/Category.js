// Categories would include "Pet friendly" "Low Maintenance" "Exotic" "Large" "Medium""Small"
// Categories schema
const { Model } = require('sequelize');
const sequelize = require('../config/connection');





Category.init(
    {
    name: {
        type: String,
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