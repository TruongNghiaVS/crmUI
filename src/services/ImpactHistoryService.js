import ApiService from './ApiService';
import Constants from '../utils/Constants';

class ImpactHistoryService {
  
  
     static GetAll( body, callSuccess, callError) {
          let url = Constants.URL_impactHistory_GetALl;
          ApiService.httpPost(url, null, body, callSuccess, callError);
      }
  
      static 
       add( body, callSuccess, callError) {
          let url = Constants.URL_impactHistory_Add;
          ApiService.httpPost(url, null, body, callSuccess, callError);
     }
  
     static update(body, callSuccess, callError) {
          let url = Constants.URL_impactHistory_Update;
          ApiService.httpPost(url, null, body, callSuccess, callError);
     }
  
     static getById( body, callSuccess, callError) {
          let url = Constants.URL_impactHistory_GetById;
           ApiService.httpPost(url, null, body, callSuccess, callError);
     }
  
     static delete(body, callSuccess, callError) {
          let url = Constants.URL_impactHistory_Delete;
           ApiService.httpPost(url, null, body, callSuccess, callError);
    }
 

}

export default ImpactHistoryService;