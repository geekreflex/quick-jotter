const { OAuth2Client } = require('google-auth-library');
const User = require('../models/authModel');
const generateToken = require('../utils/generateToken');
const client = new OAuth2Client(process.env.CLIENT_ID);
const asyncHandler = require('express-async-handler');

const googleLogin = asyncHandler(async (req, res) => {
  const { token } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });

  const { name, email, picture } = ticket.getPayload();

  const user = await User.findOne({ email });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      token: generateToken(user._id),
      xidf: 'existing',
    });
  } else {
    const newUser = await User.create({
      name,
      email,
      picture,
    });

    if (newUser) {
      return res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        picture: newUser.picture,
        token: generateToken(newUser._id),
        xidf: 'new',
      });
    }
  }
});

module.exports = {
  googleLogin,
};
