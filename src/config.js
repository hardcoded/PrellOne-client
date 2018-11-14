// define port for app to run on in development mode

const config = {};
config.api = {};

// API host & port config

config.api.devHost = 'http://localhost';
config.api.devPort = 8080;

config.api.stagingHost = 'https://prellone-dev-api.igpolytech.fr';

config.api.host = 'https://prellone-api.igpolytech.fr';

const env = process.env.NODE_ENV

console.log(process.env)
console.log(env)

let apiUrl = null;
if (env !== 'production' && env !== 'staging') {
    apiUrl = `${config.api.devHost}:${config.api.devPort}`;
}
else if (env === 'staging') {
    apiUrl = `${config.api.stagingHost}`;
}
else if (env === 'production') {
    console.log("env = prod")
    apiUrl = `${config.api.host}`;
}

console.log('api url', apiUrl)

module.exports = apiUrl;
