import ApiService from './ApiService';
import Constants from '../utils/Constants';
class DpdService   {
    static GetAll( body, callSuccess, callError) {
         let url = Constants.URL_dpd_GetALl;
         ApiService.httpPost(url,null, body, callSuccess, callError);
    }
    
    static add( body, callSuccess, callError) {
        let url = Constants.URL_dpd_Add;
        ApiService.httpPost(url, null, body, callSuccess, callError);
   }
   
   
   static update( body, callSuccess, callError) {
        let url = Constants.URL_dpd_Update;
        ApiService.httpPost(url, null, body, callSuccess, callError);
   }

   static getById(body, callSuccess, callError) {
        let url = Constants.URL_dpd_GetById;
        ApiService.httpPost(url, null, body, callSuccess, callError);
   }

   static delete(body, callSuccess, callError) {
        let url = Constants.URL_dpd_Delete;
        ApiService.httpPost(url, null, body, callSuccess, callError);
}

  static exportData( body, callSuccess, callError) {
          let url = Constants.URL_dpd_Delete;
          ApiService.httpPost(url, null, body, callSuccess, callError);
  }

}

export default DpdService;