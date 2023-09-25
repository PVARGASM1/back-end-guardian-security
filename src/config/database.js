const mongoose = require('mongoose');

let connection;

const connect = async () => {
  if (connection) return;

  const URI_MONGO = `${process.env.URL_MONGO_DB}`;

  connection = mongoose.connection;

  connection.once('open', () => {
    console.log('Connected to MongoDB');
  });

  connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

  connection.on('error', (error) => {
    console.log('Error connecting to MongoDB', error);
  });

  await mongoose.connect(URI_MONGO);
}

module.exports = connect;