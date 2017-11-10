const EventEmmiter = require('events');
class Emmiter extends EventEmmiter {}

const emmiter = new Emmiter();
exports.emmiter = emmiter;
