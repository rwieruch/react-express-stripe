import paymentRoute from './payment';

const configureRoutes = app => {
  paymentRoute(app);
};

export default configureRoutes;
