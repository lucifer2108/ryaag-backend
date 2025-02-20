const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    cart: [{ name: String, price: Number, variant: String }],
    wishlist: [{ name: String, price: Number }],
    loyaltyPoints: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);