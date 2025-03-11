const express = require('express');
const app = express();

// Define the port the server will listen on
const port = 3000;

// Define the /test route
app.get('/test', (req, res) => {
  res.json({ message: 'Welcome to the Express server!' });
});

// Define the root route (/)
app.get('/', (req, res) => {
  res.send('Express is working!!! Eljei A Nudalo');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
