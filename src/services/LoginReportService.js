import ConstantData from '../utils/Constants';
import ApiService from './ApiService';

class LoginReportService {
    static GetAll(  body, callSuccess, callError) {
        let url = ConstantData.DOMAIN+ "/api/loginReport/getAll";
        ApiService.httpPost(url, null, body, callSuccess, callError);
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

export default LoginReportService;