const swaggerAutogen = require('swagger-autogen')();
const {PORT} = require('./config/serverConfig');

const doc = {
    info: {
        title: 'RedTask Manager API Documentation',
        description: 'This contains the documentation of apis of RedTask Manager Backend',
        host: `localhost:3000/${PORT}`
    }
}

const outputfile = './swagger-output.json';
const routes = ['./routes/v1/index.js'];

swaggerAutogen(outputfile, routes, doc);