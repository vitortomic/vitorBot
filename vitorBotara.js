const fs = require('fs');
const eventEmmitter = require('./eventEmmiter.js');
const emmiter = eventEmmitter.emmiter;
const webSocketServer = require('./webSocketServer.js');
const webServer = require('./webServer');
const messageGenerator = require('./messageGenerator.js');

//random millisecond value 0-10000
const randomVreme = ()=>{
    return Math.floor(10000 * Math.random());
}

const addMessage = ()=>{
    let timeout = setTimeout(()=>{
        let message = messageGenerator.generateMessage();
        console.log(message);
        writeLog(message).then((success)=>{
            emmiter.emit('message',message);
            addMessage();
        }, (error)=>{
            console.log('Error writing to log.txt');
            clearTimeout(timeout);
        })
    }, randomVreme());
}

const initialize = async ()=>{
    try{
        let exists = await fileExistsPromise();
        exists ? addMessage() : await createFile();
        //start web server
        webServer.app.listen(9000);
        addMessage();
    }
    catch(e){
        console.log(e);
    }
}

const fileExistsPromise = ()=>{
    return new Promise((resolve)=>{
        fs.exists('log.txt', (exists)=>{
            resolve(exists);
        });
    })
}

const createFile = ()=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('log.txt', "", (error)=>{
            error ? reject(error) : resolve(true);
        });
    })
}

const writeLog = (message)=>{
    return new Promise((resolve,reject)=>{
        fs.appendFile('log.txt', "\r\n" + message, (error)=>{
            error ? reject(error) : resolve(true);
        })
    })
}

initialize();