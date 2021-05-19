const express = require('express');
const cors = require('cors');

const app = express();

// importing routes
const usersRoute = require('./routes/users');
const notesRoute = require('./routes/notes');

// settings
app.set('port', process.env.PORT || process.env.MyPort || 8080);

// middlewares
app.use(cors());
app.use(express.json())

// routes
app.use('/api/users', usersRoute);
app.use('/api/notes', notesRoute);

module.exports = app;