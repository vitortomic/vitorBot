const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req,res)=>{
    res.redirect('/log');
});

app.get('/log', async (req,res)=>{
    let text = await getLog();
    res.send(text);
});

const getLog = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("test");
    });
}

exports.app = app;