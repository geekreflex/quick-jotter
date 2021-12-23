const express = require('express');

const { createNote, getNotes } = require('../controllers/noteController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', protect, getNotes);
router.post('/', protect, createNote);

module.exports = router;
