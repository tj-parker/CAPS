'use strict';

let eventPool = require('../eventPool');

module.exports = (pickup) => {
  setTimeout(() => {
    console.log('DRIVER: picked up ', pickup);
    eventPool.emit('in-transit', pickup);
  }, 1000)
}