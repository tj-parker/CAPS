'use strict';

const Chance = require('chance');

const chance = new Chance();

let package = {
    event: chance.name(),
    time: chance.time(),
    payload: {
        store: chance.store(),
        orderID: chance.orderID(),
        customer: chance.customer(),
        address: chance.address(),
    }
}

console.log(time, payload);