import ApiService from './ApiService';
import Constants from '../utils/Constants';
class DpdService   {
    static GetAll( body, callSuccess, callError) {
         let url = Constants.URL_package_GetALl;
         ApiService.httpPost(url,null, body, callSuccess, callError);
    }

    static GetAllInfo( body, callSuccess, callError) {
     let url = Constants.URL_package_GetInfo;
     ApiService.httpPost(url,null, body, callSuccess, callError);
}
   
    
    static add( body, callSuccess, callError) {
        let url = Constants.URL_package_Add;
        ApiService.httpPost(url, null, body, callSuccess, callError);
   }
   
   
   static update( body, callSuccess, callError) {
        let url = Constants.URL_package_Update;
        ApiService.httpPost(url, null, body, callSuccess, callError);
   }

   static getById(body, callSuccess, callError) {
        let url = Constants.URL_package_GetById;
        ApiService.httpPost(url, null, body, callSuccess, callError);
   }

   static delete(body, callSuccess, callError) {
        let url = Constants.URL_package_Delete;
        ApiService.httpPost(url, null, body, callSuccess, callError);
}

  static exportData( body, callSuccess, callError) {
          let url = Constants.URL_dpd_Delete;
          ApiService.httpPost(url, null, body, callSuccess, callError);
  }

}

export default DpdService;