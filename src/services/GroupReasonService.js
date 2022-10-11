import ApiService from './ApiService';

class GroupReasonService   {
    static GetAll(url, headers, body, callSuccess, callError) {

         ApiService.httpPost(url, headers, body, callSuccess, callError);
    }

    static add(url, headers, body, callSuccess, callError) {
        ApiService.httpPost(url, headers, body, callSuccess, callError);
   }

   static update(url, headers, body, callSuccess, callError) {
     ApiService.httpPost(url, headers, body, callSuccess, callError);
   }

   static getById(url, headers, body, callSuccess, callError) {
     ApiService.httpPost(url, headers, body, callSuccess, callError);
   }

   static delete(url, headers, body, callSuccess, callError) {
     ApiService.httpPost(url, headers, body, callSuccess, callError);
}

  static exportData(url, headers, body, callSuccess, callError) {
    ApiService.httpPost(url, headers, body, callSuccess, callError);
  }

}

export default GroupReasonService;