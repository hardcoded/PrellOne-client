// define port for app to run on in development mode

const config = {};
config.api = {};

// API host & port config

config.api.devHost = 'http://localhost';
config.api.devPort = 8080;

config.api.stagingHost = 'prellone-dev-api.igpolytech.fr';
config.api.stagingPort = 3000;

config.api.host = 'prellone-api.igpolytech.fr';
config.api.port = 3000;

const env = process.env.REACT_ENV
let apiUrl = null;
if (env !== 'production' && env !== 'staging') {
    apiUrl = `${config.api.devHost}:${config.api.devPort}`;
}
else if (env === 'staging') {
    apiUrl = `${config.api.stagingHost}:${config.api.stagingPort}`;
}
else if (env === 'production') {
    apiUrl = `${config.api.host}:${config.api.port}`;
}

module.exports = apiUrl;