import ApiService from './ApiService';

class LoginService {
    static login(url, headers, body, callback) {
        ApiService.httpPost(url, headers, body, callback);
    }
}

export default LoginService;