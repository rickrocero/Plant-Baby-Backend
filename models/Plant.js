// Drinks schema (image, name, price, categories)

const mongoose = require ('mongoose');

const { Schema };

const plantSchema = new Schema({
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
})

const Drink = mongoose.model('Plant', plantSchema);

module.exports = Plant;