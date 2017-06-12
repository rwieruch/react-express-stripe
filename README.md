# Minimal Boilerplate for Stripe used in React and Express

Tutorial can be found [here](https://www.robinwieruch.de/react-express-stripe/).

## Installation

* `git clone git@github.com:rwieruch/react-express-stripe.git`
* `cd react-express-stripe`

## Installation: Stripe Registration and API Keys

* Register at [Stripe](https://stripe.com/) and Setup a Payment Account to access the Dashboard
* Find your API Keys (test_, live_)
* Replace frontend API keys: frontend/src/constants
* Replace backend APIU keys: backend/constants/

## Installation: Frontend

* `cd frontend`
* `npm install`
* `npm start`
* visit http://localhost:3000/

## Installation: Backend

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
