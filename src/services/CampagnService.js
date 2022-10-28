import ApiService from './ApiService';
import Constants from '../utils/Constants';

class CampagnService {
    static GetAll(headers, body, callSuccess, callError) {

     
        
        ApiService.httpPost( Constants.URL_campagn_GetALl,  headers, body, callSuccess, callError);
    }

    static add(url, headers, body, callSuccess, callError) {
        ApiService.httpPost(url, headers, body, callSuccess, callError);
   }

   static update(url, headers, body, callSuccess, callError) {
     ApiService.httpPost(url, headers, body, callSuccess, callError);
   }


   
   static ProcessAssigee( headers, body, callSuccess, callError) {
     let url  = Constants.URL_campagnProfile_Assigee;
     ApiService.httpPost(url, headers, body, callSuccess, callError);
  }


  static getAllCampangAsignee( headers, body, callSuccess, callError) {
    let url  = Constants.URL_campagnProfile_Assigee_getAll;
    ApiService.httpPost(url, headers, body, callSuccess, callError);
 }






}

export default CampagnService;