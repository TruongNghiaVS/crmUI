import ApiService from './ApiService';
import Constants from '../utils/Constants';
class ReportService   {
    static GetAll( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_GetALlOverView;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    
    static exportDataImpact( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_getReportImpact;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }

    static exportDataImpact2( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_ImpactHistory;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    static exportData( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_exportRecord;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    static exportDataNo( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_exportRecordNo;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    static GetAllImpactHistory( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_getAllImpact;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    
    static GetAllReportCDR( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_getAllReportCDR;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }

    static GetAllRecordingfile( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_getAllRecordingFile;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    static GetllAllByAgree( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_getAllRecordingFileWithNo;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }


   
    static GetAllReportRecordingFile( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_ReportRecordingFile;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }


    static GetAllRecordingfileWidthNo( body, callSuccess, callError) {
        let url = Constants.URL_ReportService_getAllRecordingFileWithNo;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }

    
}

export default ReportService;