import ApiService from './ApiService';
import Constants from '../utils/Constants';
class LineService   {
    static GetAll( body, callSuccess, callError) {
         let url = Constants.URL_lineReason_GetALl;
         ApiService.httpPost(url,null, body, callSuccess, callError);
    }

    static GetAllLine(callSuccess, callError) {
      const bodyRequest = {
        
        status: 2
      
    };
      let url = Constants.URL_lineReason_GetALl;
      ApiService.httpPost(url,null, bodyRequest, callSuccess, callError);
 }

    static add( body, callSuccess, callError) {
      let url = Constants.URL_lineReason_Add;
        ApiService.httpPost(url, null, body, callSuccess, callError);
   }


   static update( body, callSuccess, callError) {
    let url = Constants.URL_lineReason_Update;
     ApiService.httpPost(url, null, body, callSuccess, callError);
   }

   static getById(body, callSuccess, callError) {
    let url = Constants.URL_lineReason_GetById;
     ApiService.httpPost(url, null, body, callSuccess, callError);
   }

   static delete(body, callSuccess, callError) {
    let url = Constants.URL_lineReason_Delete;
     ApiService.httpPost(url, null, body, callSuccess, callError);
}

  static exportData( body, callSuccess, callError) {
    let url = Constants.URL_lineReason_exportData;
    ApiService.httpPost(url, null, body, callSuccess, callError);
  }

}

export default LineService;