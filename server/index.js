const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./db');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const app = express();

// Connect to MongoDB
connectDB();

const startServer = async () => {
  // Initialize Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers });
  
  // Start the server
  await server.start();

  // Apply Apollo GraphQL middleware and set the path to /graphql
  server.applyMiddleware({ app, path: '/graphql' });

  // Serve static files
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  });

  // Start Express server
  app.listen(4009, () => {
    console.log(`Server is running on port 4009..`);
    console.log(`GraphQL Server ready at http://localhost:4009${server.graphqlPath}`);
  });
};

// Run the async function to start the server
startServer();
