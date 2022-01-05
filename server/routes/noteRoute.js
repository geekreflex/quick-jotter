const express = require('express');

const {
  createNote,
  getNotes,
  updateNoteColor,
} = require('../controllers/noteController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', protect, getNotes);
router.post('/', protect, createNote);
router.put('/:id/color', protect, updateNoteColor);

module.exports = router;
