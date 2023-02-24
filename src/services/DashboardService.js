import ApiService from './ApiService';
import Constants from '../utils/Constants';
class DashboardService {
    
    static getInformationOverviewDashboard(bodySearch,callSuccess, callError) {
       let url =  Constants.URL_User_getAllOverView;
       ApiService.httpPost(url, {}, bodySearch, callSuccess, callError);
    }

    static getDetailOverview( bodySearch, callSuccess, callError) 
    {
       let urlInput = Constants.URL_User_getOverViewByCall;
       ApiService.httpPost(urlInput, {}, bodySearch, callSuccess, callError);
    }

}

export default DashboardService;