const express = require('express');
const { googleLogin } = require('../controllers/authController');

const router = express.Router();

router.route('/google').post(googleLogin);

module.exports = router;
