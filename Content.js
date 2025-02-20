const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    siteTitle: { type: String, default: 'RYAAG' },
    homeTitle: { type: String, default: 'Unleash Your Inner Glamour' },
    homeContent: { type: String, default: 'Discover RYAAG’s curated collection of luxury cosmetics, beauty essentials, and chic accessories.' },
    contactEmail: { type: String, default: 'support@ryaag.com' },
    theme: { type: String, default: 'light' },
    faq: { type: String }
});

module.exports = mongoose.model('Content', contentSchema);