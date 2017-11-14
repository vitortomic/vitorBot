const coinToss = ()=>{
    return Math.random() >= 0.5;
}

const randomInt = ()=>{
    return Math.floor(Math.random() * 10);
}

const izjava = ()=>{
    return coinToss() ? botara() : botara2();
}

const botara = ()=>{
    return coinToss() ? ayy() : "Xd";  
}

const botara2 = ()=>{
    return coinToss() ? "rofl" : "ha" + "ha".repeat(randomInt())
}

const ayy = ()=>{
    return "ay" + "y".repeat(randomInt());
}

const generateMessage = ()=>{
    return "Vitor Tomic: " + izjava() + "\t\t" + new Date().toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
}

exports.generateMessage = generateMessage;