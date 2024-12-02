const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('views', path.join(__dirname, 'views')); // Ensure views are correctly linked

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use('/', indexRouter); // Link the index router

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
