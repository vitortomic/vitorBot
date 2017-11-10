const fs = require('fs');
const eventEmmitter = require('./eventEmmiter.js');
const emmiter = eventEmmitter.emmiter;
const webSocketServer = require('./websockerServer.js');

const random = ()=>{
    let x = Math.random();
    return x >= 0.5 ? true : false;
}

const randomInt = ()=>{
    return Math.floor(Math.random() * 10);
}

const izjava = ()=>{
    return random() ? botara() : botara2();
}

const botara = ()=>{
    return random() ? ayy() : "Xd";  
}

const botara2 = ()=>{
    return random() ? "rofl" : "ha" + "ha".repeat(randomInt())
}

const ayy = ()=>{
    return "ay" + "y".repeat(randomInt());
}

const randomVreme = ()=>{
    return Math.floor(10000 * Math.random());
}

const ispis = ()=>{
    let timeout = setTimeout(()=>{
        let poruka = "Vitor Tomic: " + izjava() + "\t\t" + new Date().toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true })
        console.log(poruka);
        writeLog(poruka).then((success)=>{
            emmiter.emit('message',poruka);
            ispis();
        }, (error)=>{
            console.log('Error writing to log.txt');
            clearTimeout(timeout);
        })
    }, randomVreme());
}

const initialize = async ()=>{
    try{
        let exists = await fileExistsPromise();
        exists ? ispis() : await createFile();
        ispis();
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