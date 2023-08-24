const express = require('express');

const connectDB = require('./db');

const app = express();

// Connect to MongoDB
connectDB();

app.listen(4002, () => {
  console.log('Server is running on port 4002..');
});
