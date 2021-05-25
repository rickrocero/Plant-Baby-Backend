const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    plants: {
        type: Schema.Types.ObjectId,
        ref: 'Plant'
    }
});

const Cart = mongoose.model('Cart', categorySchema);

module.exports = Cart;