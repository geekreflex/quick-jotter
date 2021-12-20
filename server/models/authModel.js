const mongoose = require('mongoose');

const authSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;
