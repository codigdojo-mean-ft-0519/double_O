const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

// const port = process.env.PORT || 8000;
// const { PORT: port = 8000 } = process.env;
const { env: { PORT: port = 8000 } } = process;

const app = express();

// express settings
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist/restful')));


require('./server/config/database');
require('./server/config/routes')(app);


// listening for incoming connection on port
app.listen(port, () => console.log(`express server listening on port ${port}`));
