const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static('.'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'guia_app_v3.html'));
});
app.listen(port, () => {
  console.log(`App lista en http://localhost:${port}`);
});