require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();

const STATIC = path.resolve('public');
app.use(express.static(STATIC));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/login', (req, res) => {
  const index = path.resolve('public', 'index.html');
  res.sendFile(index);
})

const PORT = process.env.PORT || 80;
app.listen(PORT, console.log('listening...', PORT));