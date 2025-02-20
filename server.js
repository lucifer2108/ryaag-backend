const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const contentRoutes = require('./routes/content');
const reviewRoutes = require('./routes/reviews');
const orderRoutes = require('./routes/orders');
const analyticsRoutes = require('./routes/analytics');
const promotionRoutes = require('./routes/promotions');

const app = express();
app.use(cors({ origin: 'https://your-site-name.netlify.app' })); // Replace with your frontend URL
app.use(express.json());

// Enforce HTTPS in production
if (process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https') {
            return res.redirect(`https://${req.header('host')}${req.url}`);
        }
        next();
    });
}

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/ecommerce';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Seed admin user if not exists
const User = require('./models/User');
const bcrypt = require('bcryptjs');
User.findOne({ username: 'admin' }).then(async user => {
    if (!user) {
        const admin = new User({
            username: 'admin',
            password: await bcrypt.hash('admin123', 10),
            isAdmin: true
        });
        await admin.save();
        console.log('Admin user created');
    }
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/promotions', promotionRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));