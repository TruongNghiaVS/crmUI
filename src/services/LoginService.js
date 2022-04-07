import ApiService from './ApiService';

class LoginService {
    static login(url, headers, body, callSuccess, callError) {
        ApiService.httpPost(url, headers, body, callSuccess, callError);
    }
}

export default LoginService;