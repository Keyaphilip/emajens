const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Emajens API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
