import ApiService from './ApiService';
import Constants from '../utils/Constants';
class NoteCampagnService {
    
    static getALl(bodySearch,callSuccess, callError) {
       let url =  Constants.URL_qc_getcampagnProfileOrginal;
       ApiService.httpPost(url, {}, bodySearch, callSuccess, callError);
    }

}
export default NoteCampagnService;