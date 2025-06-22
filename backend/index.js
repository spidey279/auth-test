const express = require('express');
const cors = require('cors');
const authRoutes = require('./auth');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 