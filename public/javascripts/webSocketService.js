class WebSocketService{
    constructor(){};
    connect(element){
        eventSubscriber = element;
        connect();
        socket.onmessage = handleMessage;
    }
}
let socket;
let eventSubscriber;
const connect = ()=>{
    socket = new WebSocket("ws://localhost:9001");
}
const handleMessage = (socketMessage)=>{
    let message = socketMessage.data;
    let event = new Event('newMessage');
    event.message = message;
    eventSubscriber.dispatchEvent(event);
}
export let webSocketService = new WebSocketService();
