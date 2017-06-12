const paymentApi = require('./payment');

const configureRoutes = app => {
  paymentApi(app);
};

module.exports = configureRoutes;