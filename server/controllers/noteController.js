const Note = require('../models/noteModel');

const createNote = async (req, res) => {
  const { title, content } = req.body;

  const note = new Note({
    title: title || '',
    content: content || '',
    user: req.user._id,
  });

  const createdNote = await note.save();
  return res.status(201).json(createdNote);
};

const getNotes = async (req, res) => {
  const { _id } = req.user;

  const notes = await Note.find({ user: _id }).sort({ createdAt: -1 });

  if (notes) {
    return res.status(200).json(notes);
  } else {
    res.status(404).json({ message: 'Notes not found' });
  }
};

module.exports = {
  createNote,
  getNotes,
};
