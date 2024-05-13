const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set up views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('login');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
