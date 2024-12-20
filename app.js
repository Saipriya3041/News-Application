// app.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('welcome to the daily News');
  console.log('Visited Home Route');
});

// Define POST route
app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.send('Data received');
});

// Start server and log output to terminal
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
