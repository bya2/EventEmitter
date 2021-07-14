function EventEmitter() {
  this.event = {};
}

EventEmitter.prototype.on = function(type, listener) {
  this.event[type] = this.event[type] || [];
  this.event[type].push(listener);
}

EventEmitter.prototype.emit = function(type) {
  this.event[type].forEach(item => {
    item();
  })
}

module.exports = EventEmitter;