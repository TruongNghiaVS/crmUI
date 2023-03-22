import ApiService from './ApiService';
import Constants from '../utils/Constants';
class MasterDataNewService   {
    static GetAll( body, callSuccess, callError) {
        let url = Constants.URL_masterDataNew_GetALl;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }

    static GetAllStatus( body, callSuccess, callError) {
      let url = Constants.URL_masterDataNew_GetAllStatus;
      ApiService.httpPost(url, null, body, callSuccess, callError);
  }

    static add( body, callSuccess, callError) {
      let url = Constants.URL_masterDataNew_Add;
      ApiService.httpPost(url, null, body, callSuccess, callError);
   }

   static update( body, callSuccess, callError) {
    let url = Constants.URL_masterDataNew_Update;
    ApiService.httpPost(url, null, body, callSuccess, callError);
   }

   static getById(body, callSuccess, callError) {
    let url = Constants.URL_masterDataNew_GetById;
     ApiService.httpPost(url, null, body, callSuccess, callError);
   }

   static delete( body, callSuccess, callError) {
    let url = Constants.URL_masterDataNew_Delete;
     ApiService.httpPost(url, null, body, callSuccess, callError);
  }





}

export default MasterDataNewService;