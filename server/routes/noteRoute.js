const express = require('express');

const { createNote, getNotes } = require('../controllers/noteController');

const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/', protect).post(createNote).get(getNotes);

module.exports = router;
