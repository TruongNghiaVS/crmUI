import ApiService from './ApiService';
import Constants from '../utils/Constants';
class TrackingCallService   {
    static GetAll( body, callSuccess, callError) {
        let url = Constants.URL_TrackingCall_GetAll;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    static exportData( body, callSuccess, callError) {
        let url = Constants.URL_ReportTalkTime_exportData;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
}

export default TrackingCallService;