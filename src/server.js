const express = require('express');
const { getGreeting } = require('./greeting');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send(getGreeting());
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
