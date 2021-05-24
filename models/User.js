// BCrypt needed for User Data 
// Create User schema (first name, last name, email, password)

const mongoose = require('./mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const cart = require('cart');

const userSchema = new Schema({
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
        minLength:8
    },
    cart: [cart.Schema]
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const encrypted = 15;
        this.password = await bcrypt.hash(this.password, encrypted);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User, userSchema');

module.exports = User;
