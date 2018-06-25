# Minimal Boilerplate for Stripe used in React and Express

[![Build Status](https://travis-ci.org/rwieruch/react-express-stripe.svg?branch=master)](https://travis-ci.org/rwieruch/react-express-stripe) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/)

* [A full walkthrough tutorial of implementing this boilerplate project.](https://www.robinwieruch.de/react-express-stripe-payment/)
* Found in [the Road to learn React](https://roadtoreact.com/)

## Installation

* `git clone git@github.com:rwieruch/react-express-stripe.git`
* `cd react-express-stripe`

### Stripe Registration and API Keys

* Register at [Stripe](https://stripe.com/) and Setup a Payment Account to access the Dashboard
* Find your API Keys (test_, live_)
* Replace frontend API keys: frontend/src/constants/
* Replace backend API keys: backend/constants/

### Frontend

* `cd frontend`
* `npm install`
* `npm start`
* visit http://localhost:3000/

### Backend

* `cd backend`
* `npm install`
* `node index.js`
* visit http://localhost:8080/

## Usage

When using it in production, you have to use a real credit card. Otherwise, in development mode, you can use a [Stripe's test credit cards](https://stripe.com/docs/testing#cards):

* Email: Any Email
* Number: 4242 4242 4242 4242
* Date: Any Date in the Future
* CVC: Any 3 Numbers
