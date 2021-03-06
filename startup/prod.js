const helmet = require('helmet');

module.exports = function(app) {
    app.use(helmet());
    //Allow CORS
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
        next();
    });
};