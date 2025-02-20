const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    pageViews: { type: Number, default: 0 },
    totalSales: { type: Number, default: 0 },
    cartAdds: { type: Number, default: 0 }
});

module.exports = mongoose.model('Analytics', analyticsSchema);