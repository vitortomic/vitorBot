const uuidv4 = require('uuid/v4');
const eventEmitter = require('./eventEmmiter.js');
const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 9001});

wss.on('connection', (connection)=>{
    let uuid = uuidv4();
    console.log('Client connected with UUID: ' + uuid);
    connection.on('close', (connection)=>{
        console.log('Client with uuid: ' + uuid + " disconnected")
    })
});

wss.broadcast = (data)=>{
    wss.clients.forEach((client)=>{
        if(client.readyState === WebSocket.OPEN) client.send(data);
    })
};

eventEmitter.emmiter.on('message', (message)=>{
     wss.broadcast(message);
});