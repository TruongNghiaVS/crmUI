import ApiService from './ApiService';
import Constants from '../utils/Constants';
class LoginService {
    static login(url, headers, body, callSuccess, callError) {
        ApiService.httpPost(url, headers, body, callSuccess, callError);
    }    

    static logout( callSuccess, callError) 
    {
       let urlInput = Constants.URL_User_Logout;
       ApiService.httpPost(urlInput, {}, {}, callSuccess, callError);
    }

}

export default LoginService;