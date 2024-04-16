import ApiService from './ApiService';
import Constants from '../utils/Constants';
class ReportTalkTimeService   {
    static GetAll( body, callSuccess, callError) {
        let url = Constants.URL_ReportTalkTime_GetAll;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }


    static exportData( body, callSuccess, callError) {
        let url = Constants.URL_ReportTalkTime_exportData;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    static exportDataTalktime( body, callSuccess, callError) {
        let url = Constants.URL_ReportCrm_exportTalktime;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    static exportSumupTalktime( body, callSuccess, callError) {
        let url = Constants.URL_ReportCrm_exportSumoffTalktime;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    
  
  
  
}

export default ReportTalkTimeService;