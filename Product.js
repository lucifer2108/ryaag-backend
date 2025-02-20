const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    variants: { type: String },
    swatches: { type: String }, // Comma-separated color values (e.g., "Rose,Plum")
    stock: { type: Number, default: 0 },
    sales: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);