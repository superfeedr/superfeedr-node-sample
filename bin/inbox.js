var events = require('events');
var util = require('util');


function Inbox() {
    events.EventEmitter.call(this);
    this.lifo = [];
}
util.inherits(Inbox, events.EventEmitter);

Inbox.prototype.push = function(notification) {
    this.lifo.unshift(notification);
    this.emit('added', notification);
    if(this.lifo.length >= 100) {
        this.lifo.pop()
    }    
};

Inbox.prototype.each = function(block) {
    this.lifo.reverse().forEach(block);
};




exports.inbox = new Inbox();