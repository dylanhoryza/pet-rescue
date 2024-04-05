const connection = require('../config/connection');

// mongoDB connection
connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

connection.once('open', async () => {
  console.log('Connected to MongoDB!');
});