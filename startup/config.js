const config = require('config');

module.exports = function() {
    if(!config.get('db')) {
        throw new Error('FATAL ERROR: Database not defined');
    }
    if(!config.get('jwtPrivateKey')) {
        console.log(config.get('jwtPrivateKey'));
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
    }
};