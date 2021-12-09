const path = require('path');

const express = require('express');
const cors = require('cor');

const app = express();
app.use(cors());

const port = 800;

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
