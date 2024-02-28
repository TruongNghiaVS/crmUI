import ApiService from './ApiService';
import Constants from '../utils/Constants';
class SmsService   {
     static sendSms( body, callSuccess, callError) {
      let url = Constants.URL_sms_Send;
      ApiService.httpPost(url,null, body, callSuccess, callError);
 }


 static getAll( body, callSuccess, callError) {
     let url = Constants.URL_sms_getAll;
     ApiService.httpPost(url,null, body, callSuccess, callError);
}


 

}

export default SmsService;