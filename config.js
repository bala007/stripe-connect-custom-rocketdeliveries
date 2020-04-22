'use strict';

module.exports = {
  // App name
  appName: 'Rocket Deliveries',

  // Public domain of Rocket Deliveries
  publicDomain: process.env.DS_PUBLIC_DOMAIN,

  // Whether to register webhook events. For a local development environment, 
  // you can also forward webhook events with the Stripe CLI:
  //   stripe listen -f localhost:3000/pilots/stripe/webhooks
 registerWebhooks: true,

  // Server port
  port: 3000,

  // Secret for cookie sessions
  secret: 'asdadasd2qddasddad2asdad',

  // Configuration for Stripe
  // API Keys: https://dashboard.stripe.com/account/apikeys
  // Connect Settings: https://dashboard.stripe.com/account/applications/settings
  stripe: {
    secretKey: process.env.DS_STRIPE_SECRET_KEY,
    publishableKey: process.env.DS_STRIPE_PUBLISHABLE_KEY,
    clientId: process.env.DS_STRIPE_CLIENT_ID
  },

  // Configuration for MongoDB
  mongoUri: 'mongodb://localhost/rocketdeliveries',

  // Configuration for Google Cloud (only useful if you want to deploy to GCP)
  gcloud: {
    projectId: 'YOUR_PROJECT_ID'
  }
};
