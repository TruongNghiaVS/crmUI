import ApiService from './ApiService';
import Constants from '../utils/Constants';
class DashboardService {
    
    static getInformationOverviewDashboard(callSuccess, callError) {
       let url =  Constants.URL_User_getAllOverView;
       ApiService.httpPost(url, {}, {}, callSuccess, callError);
    }

    static getDetailOverview( callSuccess, callError) 
    {
       let urlInput = Constants.URL_User_getOverViewByCall;
       ApiService.httpPost(urlInput, {}, {}, callSuccess, callError);
    }

}

export default DashboardService;