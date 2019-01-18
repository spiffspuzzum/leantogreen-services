const express = require('express');
const app = express();

require('./startup/config')();
require('./startup/prod')(app);
require('./startup/routes')(app);
require('./startup/db')();

const port = process.env.PORT || 3900;
const server = app.listen(port, console.log(`listening on port ${port}...`));

module.exports = server;