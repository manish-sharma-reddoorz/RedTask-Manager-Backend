const mongoose = require('mongoose');
const {MONGO_DB_URL} = require('./serverConfig');

const connect = async () => {
    await mongoose.connect(`${MONGO_DB_URL}/RedTask-Manager`);
}

module.exports = connect;