const User = require('./User');
const Category = require('./Category');
const Plant = require('./Plant');
const Cart = require('./Cart');

User.belongsToMany(Plant, {
    // Define the third table needed to store the foreign keys
    through: {
        model: Cart,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: ''
});

Plant.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: {
        model: Cart,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: ''
});





module.exports = { User, Category, Plant, Cart };