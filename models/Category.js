// Categories would include "Pet friendly" "Low Maintenance" "Exotic" "Large" "Medium""Small"
// Categories schema


const mongoose = require('./mongoose');

const { Schema } = mongoose

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;