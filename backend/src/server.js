/**
 * Entry point of the Emajens backend API.
 *
 * This module loads the environment configuration, creates the Express
 * application, connects to MongoDB, and only then starts listening for
 * HTTP requests.
 */
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables before anything else, so that every part of
// the application that reads process.env (including connectDB) sees the
// configured values.
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Temporary root route used to verify that the API is up and running.
app.get('/', (req, res) => {
  res.json({ message: 'Emajens API is running' });
});

/**
 * Starts the backend server.
 *
 * The database connection is established BEFORE the server starts
 * listening, so the API never accepts requests while the database
 * is unavailable.
 */
const startServer = async () => {
 await connectDB(); 

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
