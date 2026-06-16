const express = require('express');
const app = express();

// PORT — Render apna khud ka port deta hai
// Locally 3000 pe chalega
const PORT = process.env.PORT || 3000;

// JSON support
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('<h1>Hello World! 🚀</h1><p>My Node.js app is running!</p>');
});

// Test route
app.get('/api/status', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running!'
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`✅ Server chal raha hai: http://localhost:${PORT}`);
});