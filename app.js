const EventEmitter = require('./CustomEventEmitter.js');

const emitR = new EventEmitter();

emitR.on('okman', () => {
  console.log('Okman event occurred.');
})

emitR.on('okman', () => {
  console.log('Hello! I\'m Okman.');
})

emitR.emit('okman');