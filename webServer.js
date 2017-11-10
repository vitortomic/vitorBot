const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use('/scripts', express.static('public/javascripts'));
app.use('/styles', express.static('public/css'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get('/log', async (req,res)=>{
    try{
        let text = await getLogViaStream();
        let textWithBreaks = text.split("")
        res.send(text);
    }
    catch(error){
        res.send(error);
    }
});

const getLog = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('log.txt', (error, data)=>{
            if(error) reject(error);
            resolve(data);
        })
    });
}

const getLogViaStream = ()=>{
    return new Promise((resolve,reject)=>{
        let log = "";
        let readStream = fs.createReadStream('log.txt');
        readStream.on('data', (data)=>{
            log += data; 
        });
        readStream.on('error', (error)=>{
            console.log(error);
            reject(error);
        });
        readStream.on('end', ()=>{
            resolve(log);
        })
    });
}

exports.app = app;