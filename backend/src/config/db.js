/**
 * Database configuration module.
 *
 * Exports the connectDB() function, which the server entry point calls
 * to establish the MongoDB connection through Mongoose.
 */
const mongoose = require('mongoose');

/**
 * Connects the application to the MongoDB database.
 *
 * The connection URI is read from the MONGODB_URI environment variable,
 * keeping database credentials out of the source code and version control.
 *
 * If the connection fails, the process exits instead of letting the API
 * continue starting up without a working database (fail-fast behavior).
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Exit code 1 signals a failure: the server must not keep running
    // when the database connection could not be established.
    process.exit(1);
  }
};

module.exports = connectDB;
