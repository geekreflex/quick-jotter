require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');
const path = require('path');

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const authRoute = require('./routes/authRoute');
const noteRoute = require('./routes/noteRoute');

app.use('/api/auth', authRoute);
app.use('/api/notes', noteRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
