require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/api/test', (req, res) => {
  res.json({
    ok: true,
    dbUrlExists: !!process.env.DATABASE_URL,
    dbUrl: process.env.DATABASE_URL
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
