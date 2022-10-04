'use strict';

const eventPool = require('./eventPool');
const vendorHandler = require('./vendorClient/vendor');
const driverHandler = require('./driverClient/driver');

eventPool.on('SEND_MESSAGE', vendorHandler);
eventPool.on('SEND_MESSAGE', driverHandler);

setInterval(() => {
    
})