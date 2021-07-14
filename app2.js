const EventEmitter = require('events');

const emitR = new EventEmitter()

emitR.on('okman2', () => {
  console.log('Okman2 event occurred.');
})

emitR.on('okman2', () => {
  console.log('Hello! I\'m Okman2.');
})

emitR.emit('okman2');