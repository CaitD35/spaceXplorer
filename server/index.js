const express = require('express');
const path = require('path');
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

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});


app.listen(4009, () => {
  console.log('Server is running on port 4009..');
});



