const { sendGridKey } = require("./dev");

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURL: process.env.MONGO_URL,
    cookieKey: process.env.COOKIEE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SEND_GRID_KEY,
    redirectToDomain: process.env.REDIRECT_TO_DOMAIN
};
