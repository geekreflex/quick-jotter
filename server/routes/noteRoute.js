const express = require('express');

const {
  createNote,
  getNotes,
  updateNoteColor,
  updateNote,
} = require('../controllers/noteController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', protect, getNotes);
router.post('/', protect, createNote);
router.put('/:id/color', protect, updateNoteColor);
router.put('/:id', protect, updateNote);

module.exports = router;
