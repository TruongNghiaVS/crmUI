import ApiService from './ApiService';
import Constants from '../utils/Constants';

class CampagnProfileService {
  
   static getById(body, callSuccess, callError) {
        let url = Constants.URL_campagnProfile_GetById;
        ApiService.httpPost(url, null, body, callSuccess, callError);
   }
   static update(body, callSuccess, callError) {
      let url = Constants.URL_campagnProfile_Update;
      ApiService.httpPost(url, null, body, callSuccess, callError);
 }

}

export default CampagnProfileService;