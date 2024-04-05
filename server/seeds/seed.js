const connection = require('../config/connection');
const { Pet, User } = require('../models/');

// mongoDB connection
connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

connection.once('open', async () => {
  console.log('Connected to MongoDB!');

  let petCheck = await connection.db.listCollections({ name: 'pets '}).toArray();
  if (petCheck.length) {
    await connection.dropCollection('pets');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

});