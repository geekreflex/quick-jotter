require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

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
