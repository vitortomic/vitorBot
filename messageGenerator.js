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

const generateMessage = ()=>{
    return "Vitor Tomic: " + izjava() + "\t\t" + new Date().toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
}

exports.generateMessage = generateMessage;