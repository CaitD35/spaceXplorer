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


app.listen(4007, () => {
  console.log('Server is running on port 4007..');
});



