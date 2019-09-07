# Stripe Server Checkout with React and Express

[![Build Status](https://travis-ci.org/rwieruch/react-express-stripe.svg?branch=master)](https://travis-ci.org/rwieruch/react-express-stripe) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/)

<img width="1275" alt="Screenshot 2019-09-07 at 11 35 07" src="https://user-images.githubusercontent.com/2479967/64469390-b6c76880-d163-11e9-9656-467d6920655c.png">

- **Deprecated due to SCA:** ~[A full walkthrough tutorial of implementing this boilerplate project.](https://www.robinwieruch.de/react-express-stripe-payment/)~

- SCA ready Tutorials: 
  - [Stripe Server Checkout](https://stripe.com/docs/payments/checkout/server#create-one-time-payments)
  - [Stripe Webhook Fulfillment](https://stripe.com/docs/payments/checkout/fulfillment#webhooks)

## Installation

- `git clone git@github.com:rwieruch/react-express-stripe.git`
- `cd react-express-stripe`

**Important:** Setup works only with backend hosted somewhere reachable via an IP or domain. Stripe's Webhooks are not going to work on a localhost backend. The frontend application can run locally though.

### Stripe Registration and API Keys

- Register at [Stripe](https://stripe.com/) and Setup a Payment Account to access the Dashboard
- Find your API Keys:
- Replace frontend 
  - API keys: `YOUR_STRIPE_PUBLIC_KEY`
- Replace backend 
  - API keys: `YOUR_STRIPE_SECRET_KEY`
  - Webhook secret: `YOUR_STRIPE_WEBHOOK_SECRET`
    - needs a [Webhook setup on your Stripe dashboard](https://stripe.com/docs/payments/checkout/fulfillment#webhooks)

### Frontend

- `cd frontend`
- `npm install`
- `npm start`
- visit http://localhost:3000/

### Backend

- `cd backend`
- `npm install`
- `npm start`
- visit http://localhost:8888/

## Usage

When using it in production, you have to use a real credit card. Otherwise, in development mode, you can use a [Stripe's test credit cards](https://stripe.com/docs/testing#cards):

- Email: Any Email
- Number: 4242 4242 4242 4242
- Date: Any Date in the Future
- CVC: Any 3 Numbers
