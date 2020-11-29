'use strict';

// importing
const express = require('express');
const routes = require('./routes/index.js');
const port = process.env.PORT || 3000;

const app = express();

// setup express application
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

// routes
routes(app);

// start the server
app.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});