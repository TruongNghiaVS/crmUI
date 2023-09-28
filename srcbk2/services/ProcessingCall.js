import ApiService from './ApiService';
import Constants from '../utils/Constants';
class ProcessingCall   {
    static MakeCall( body, callSuccess, callError) {
        let url = Constants.URL_makeCall;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
}

export default ProcessingCall;