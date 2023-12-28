import ApiService from './ApiService';
import Constants from '../utils/Constants';

class CommonService {
     
      static GetAllManager( body, callSuccess, callError) {
          let url = Constants.URL_Employee_GetAllManager;
          ApiService.httpPost(url, null, body, callSuccess, callError);
      }

      static GetAll( body, callSuccess, callError) {
        let url = Constants.URL_GroupMember_GetAll;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }
     static GetAllMemberByGroup( body, callSuccess, callError) {
        let url = Constants.URL_GetMember_byGroupId;
        ApiService.httpPost(url, null, body, callSuccess, callError);
    }

}

export default CommonService;