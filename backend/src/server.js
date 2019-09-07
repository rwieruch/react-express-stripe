import express from 'express';

const configureServer = app => {
  app.use(
    express.json({
      // Because Stripe needs the raw body, we compute it but only when hitting the Stripe callback URL.
      verify: (req, res, buf) => {
        if (req.originalUrl.startsWith('/payment/session-complete')) {
          req.rawBody = buf.toString();
        }
      },
    })
  );
};

export default configureServer;
