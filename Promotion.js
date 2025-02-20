const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discount: { type: Number, required: true, min: 0, max: 100 }
});

module.exports = mongoose.model('Promotion', promotionSchema);