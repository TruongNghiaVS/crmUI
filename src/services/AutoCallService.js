import ApiService from './ApiService';
import Constants from '../utils/Constants';
class AutoCallService   {
   
    static GetProfile(callSuccess, callError ) {
        
        ApiService.httpPost( Constants.URL_GetProfileInfomation,  null, {}, callSuccess, callError);
    }

    static GetDurationViaPhone( bodyRequest, callSuccess, callError) {
        let url = Constants.URL_GetDurationViaPhone;
        ApiService.httpPost(url, null, bodyRequest, callSuccess, callError);
    }
}

export default AutoCallService;