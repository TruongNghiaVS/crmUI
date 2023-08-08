
import ApiService from './ApiService';
import Constants from '../utils/Constants';
class NoteCampagnService   {
    static GetAll( body, callSuccess, callError) {
        let url = Constants.URL_qc_getcampagnProfileOrginal;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
    static add( body, callSuccess, callError) {
        let url = Constants.URL_qc_getcampagnProfileOrginal_add;
         ApiService.httpPost(url, null, body, callSuccess, callError);
   }
   static GetAllNoted( body, callSuccess, callError) {
    let url = Constants.URL_qc_getcampagnProfileOrginal_allNote;
    ApiService.httpPost(url, null, body, callSuccess, callError);
}
   
    
    
  
}

export default NoteCampagnService;