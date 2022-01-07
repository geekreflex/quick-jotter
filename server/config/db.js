const mongoose = require('mongoose');

const uri =
  process.env.NODE_ENV === 'development'
    ? process.env.MONGO_URI_LOCAL
    : process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
