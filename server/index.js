const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./db');

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


app.listen(4002, () => {
  console.log('Server is running on port 4002..');
});



