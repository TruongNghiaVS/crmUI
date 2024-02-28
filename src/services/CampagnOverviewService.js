import ApiService from './ApiService';
import Constants from '../utils/Constants';
class CampagnOverviewService {
    
    static getInformationOverviewDashboard(bodySearch,callSuccess, callError) {
       let url =  Constants.URL_campagn_getOverview;
       ApiService.httpPost(url, {}, bodySearch, callSuccess, callError);
    }

    static GetAllAssigns( bodySearch, callSuccess, callError) 
    {
       let urlInput = Constants.URL_campagn_getOverviewAllAssignee;
       ApiService.httpPost(urlInput, {}, bodySearch, callSuccess, callError);
    }

}

export default CampagnOverviewService;