require('rootpath')();
const express = require('express');
const app = express();
var path = require('path');

const http = require('http');
const server = http.createServer(app);

const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();
const config = require('./db/config');
// const jwt = require('helpers/jwt');
const errorHandler = require('./helpers/error-handler');
const logger = require('morgan');
const morganHelper = require('./helpers/morganHelper');
// socket IO

const io = require('socket.io')(server);
require('./helpers/socketIo')(io);

logger.token('customMethod', morganHelper.customMethod);
logger.token('timeFormat', morganHelper.timeFormat);
logger.token('customStatus', morganHelper.customStatus);
logger.token('customResponse', morganHelper.customResponse);
logger.token('customLength', morganHelper.customLength);
logger.token('customReferral', morganHelper.customReferral);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

// app.use(jwt());
app.use((req, res, next) => {
    let logDataReq = {
        url: req.originalUrl,
        time: new Date(),
        ip_client: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        params: null
    };
    if (req.method === 'POST') {
        logDataReq.params = req.body;
    } else {
        logDataReq.params = [];
    }
    console.log('url : ',logDataReq.url);
    next();
});
require('./routes')(app);

app.use(errorHandler);
console.log('process.env.NODE_ENV ', process.env.NODE_ENV);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

server.listen(port, function () {
    console.log('Server listening on port ' + port);
});

