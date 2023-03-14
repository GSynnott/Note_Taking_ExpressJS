const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const petData = require('./db/db.json');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/api/notes', (req, res) => res.json(petData));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);