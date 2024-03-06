const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const app = express();
const connect = require('./config/database');
const cors = require('cors');


const prepareAndStartServer = () => {
    

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', apiRoutes);
    app.listen(PORT, async () => {
        console.log(`Server started at PORT: ${PORT}`);
        await connect();
        console.log('Mongo db connected');

    })
}

prepareAndStartServer();