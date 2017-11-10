class LogHistoryService{
    constructor(){};
    static async getLog(){
        let log = await getFormattedLog();
        return log;
    }
}
const getFormattedLog = async ()=>{
    let text = await getLogText();
    return formatLogText(text);
}
const getLogText = ()=>{
    return fetch('/log')
    .then((response)=>response.text())
} 
const formatLogText = (text)=>{
    return text;
}
export default LogHistoryService;