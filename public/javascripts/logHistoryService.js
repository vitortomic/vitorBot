class LogHistoryService{
    constructor(){};
    static async getLog(){
        let log = await getFormattedLog();
        return log;
    }
}
const getFormattedLog = async ()=>{
    let text = await getLogText();
    return text;
}
const getLogText = ()=>{
    return fetch('/log')
    .then((response)=>response.text(), (error)=>console.log(error));
} 
export default LogHistoryService;