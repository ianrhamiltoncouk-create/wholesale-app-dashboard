const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve our static index.html dashboard file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Wholesale App Home Server running on port ${port}!`);
});
