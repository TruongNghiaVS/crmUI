import ApiService from './ApiService';
import Constants from '../utils/Constants';

class TrackingService {
     
      static RequestCheck(callSuccess, callError) {
          let url = Constants.URL_tracking_requestCheck;
          ApiService.httpPost(url, null, {}, callSuccess, callError);
      }

      static GetAll( body, callSuccess, callError) {
        let url = Constants.URL_tracking_getAll;
        ApiService.httpPost(url, null, body, callSuccess, callError);
      }

}

export default TrackingService;