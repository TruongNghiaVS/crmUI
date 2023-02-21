import ApiService from './ApiService';
import Constants from '../utils/Constants';
class EmployeeService   {

  
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
  
  static ChangePassword( body, callSuccess, callError) {
    let url1 = Constants.URL_Employee_changePassword;
    ApiService.httpPost(url1, null, body, callSuccess, callError);
}
static ResetPassword( body, callSuccess, callError) {
    let url1 = Constants.URL_Employee_resetPassword;
    ApiService.httpPost(url1, null, body, callSuccess, callError);
}

}

export default EmployeeService;