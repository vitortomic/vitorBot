import LogHistoryService from "/scripts/logHistoryService.js"
class IndexController{
    constructor(){};
    static async getLog(element){
        let log = await LogHistoryService.getLog();
        element.innerHTML = log;
    }
}
export default IndexController
