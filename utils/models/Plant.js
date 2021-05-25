// Drinks schema (image, name, price, categories)

const mongoose = require('mongoose');

const { Schema };

Plant.init(
    {
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
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