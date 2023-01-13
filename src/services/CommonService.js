import ApiService from './ApiService';
import Constants from '../utils/Constants';

class CommonService {
     
      static GetAllManager( body, callSuccess, callError) {
          let url = Constants.URL_Employee_GetAllManager;
          ApiService.httpPost(url, null, body, callSuccess, callError);
      }

}

export default CommonService;