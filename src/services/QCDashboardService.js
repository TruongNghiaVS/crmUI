import ApiService from './ApiService';
import Constants from '../utils/Constants';
class QCDashboardService {
    
    static getALl(bodySearch,callSuccess, callError) {
       let url =  Constants.URL_qc_getDataQC;
       ApiService.httpPost(url, {}, bodySearch, callSuccess, callError);
    }

}
export default QCDashboardService;