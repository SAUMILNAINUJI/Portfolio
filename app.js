const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/projects', (req, res) => res.render('project'));
app.get('/contact', (req, res) => res.render('contact'));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
