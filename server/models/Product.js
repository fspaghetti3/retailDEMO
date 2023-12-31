const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Product price cannot be negative']
    },
    color: {
        type: String,
        required: [true, 'Product color is required'],
        trim: true
    },
    weight: {
        type: Number,
        required: [true, 'Product weight is required'],
        min: [0, 'Product weight cannot be negative']
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;