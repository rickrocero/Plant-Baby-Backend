const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Cart.init(
{
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    plants: {
        type: Schema.Types.ObjectId,
        ref: 'Plant'
    }
}),

{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'Cart',
};

module.exports = Cart;