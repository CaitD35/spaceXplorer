const Mission = require('.models/Mission');
const User = require('.models/User');

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./db');
const schema = require('./schemas');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use (
  '/graphql',
   graphqlHTTP({
  schema,
  graphiql: true,
  })
);


app.listen(4003, () => {
  console.log('Server is running on port 4003..');
});



