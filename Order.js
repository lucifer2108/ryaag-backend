const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: String },
    items: [{ name: String, price: Number, variant: String }],
    total: { type: Number, required: true },
    status: { type: String, default: 'Pending', enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'] },
    paymentMethod: { type: String, required: true, enum: ['stripe', 'paypal', 'square'] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);