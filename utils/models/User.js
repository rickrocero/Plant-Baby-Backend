// BCrypt needed for User Data 
// Create User schema (first name, last name, email, password, user's cart)
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const cart = require('cart');

User.init(
    {
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    cart: [cart.Schema]
}),

{
hooks: {
    beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 15);
        return newUserData;
    },
        beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 15);
            return updatedUserData;
        }
}},

{
sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
};



module.exports = User;
