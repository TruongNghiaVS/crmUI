import ApiService from './ApiService';
import Constants from '../utils/Constants';
class AutoCallService   {
   
    static GetProfile(callSuccess, callError ) {
        
        ApiService.httpPost( Constants.URL_GetProfileInfomation,  null, {}, callSuccess, callError);
    }
}

export default AutoCallService;