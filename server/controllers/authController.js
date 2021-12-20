const { OAuth2Client } = require('google-auth-library');
const User = require('../models/authModel');
const client = new OAuth2Client(process.env.CLIENT_ID);

const googleLogin = async (req, res) => {
  const { token } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });

  const { name, email, picture } = ticket.getPayload();

  const user = await User.findOne({ email });

  if (user) {
    res.status(201).json(user);
  } else {
    const newUser = await User.create({
      name,
      email,
      picture,
    });

    if (newUser) {
      return res.status(201).json(newUser);
    }
  }
};

module.exports = {
  googleLogin,
};
