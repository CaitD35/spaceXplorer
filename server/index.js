const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./db');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const cors = require('cors'); 

const app = express();

// Enable cors
app.use(cors({
  origin: 'http://localhost:5174',  
  credentials: true  
}));

// Connect to MongoDB
connectDB();

const startServer = async () => {
  // Initialize Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers });
  
  // Start the server
  await server.start();

  // Apply Apollo GraphQL middleware and set the path to /graphql
  server.applyMiddleware({ app, path: '/graphql', cors: false }); // Disable Apollo's built-in cors to use the package

  // Serve static files
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  });

  // Start Express server
  app.listen(3000, () => {
    console.log(`Server is running on port 3000..`);
    console.log(`GraphQL Server ready at http://localhost:3000${server.graphqlPath}`);
  });
};


startServer();
