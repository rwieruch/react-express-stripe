import Stripe from 'stripe';

const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Ping from Checkout Server',
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV,
    });
  });

  app.post('/payment/session-initiate', async (req, res) => {
    const {
      clientReferenceId,
      customerEmail,
      lineItem,
      successUrl,
      cancelUrl,
    } = req.body;

    const stripe = Stripe('YOUR_STRIPE_SECRET_KEY');

    let session;

    try {
      session = await stripe.checkout.sessions.create({
        client_reference_id: clientReferenceId,
        customer_email: customerEmail,
        payment_method_types: ['card'],
        line_items: [lineItem],
        payment_intent_data: {
          description: `${lineItem.name} ${lineItem.description}`,
        },
        success_url: successUrl,
        cancel_url: cancelUrl,
      });
    } catch (error) {
      res.status(500).send({ error });
    }

    return res.status(200).send(session);
  });

  app.post('/payment/session-complete', async (req, res) => {
    const stripe = Stripe('YOUR_STRIPE_SECRET_KEY');

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        req.headers['stripe-signature'],
        'YOUR_STRIPE_WEBHOOK_SECRET'
      );
    } catch (error) {
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      try {
        // complete your customer's order
        // e.g. save the purchased product into your database
        // take the clientReferenceId to map your customer to a product
      } catch (error) {
        return res.status(404).send({ error, session });
      }
    }

    return res.status(200).send({ received: true });
  });

  return app;
};

export default paymentApi;
