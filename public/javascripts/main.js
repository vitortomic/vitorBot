import LogHistoryService from "/scripts/logHistoryService.js"
import {webSocketService} from "/scripts/webSocketService.js"
class IndexController{
    constructor(){};
    /**
     * get log history from the server
     * @param {*} element - log text will be appended to element
     */
    async getLog(element){
        let log = await LogHistoryService.getLog();
        element.value = log;
    };
    /**
     * connects to web socket server and appends messages to element
     * @param {*} element 
     */
    connectToWebSocketServer(element){
        webSocketService.connect(element);
        element.addEventListener('newMessage', (message)=>{
            element.value +=  "\r\n" + message.message ;
            element.scrollTop = element.scrollHeight;
        })
    }
}
export let indexCtrl = new IndexController();
