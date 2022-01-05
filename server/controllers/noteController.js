const Note = require('../models/noteModel');
const asyncHandler = require('express-async-handler');

const createNote = asyncHandler(async (req, res) => {
  const { title, content, color } = req.body;

  const note = new Note({
    title: title || '',
    content: content || '',
    color: color || '#fff',
    user: req.user._id,
  });

  const createdNote = await note.save();
  return res.status(201).json(createdNote);
});

const getNotes = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  const notes = await Note.find({ user: _id }).sort({ createdAt: -1 });

  if (notes) {
    return res.status(200).json(notes);
  } else {
    res.status(404);
    throw new Error('Notes not found');
  }
});

const updateNoteColor = asyncHandler(async (req, res) => {
  const { color } = req.body;

  const note = await Note.findById(req.params.id);

  console.log(note);

  if (note) {
    note.color = color;
    await note.save();
    res.json({ message: 'Color updated' });
  } else {
    res.status(404);
    throw new Error('Error updating color');
  }
});

module.exports = {
  createNote,
  getNotes,
  updateNoteColor,
};
