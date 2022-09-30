import _BaseService from './BaseService';
class ApiService {
    

    static httpPost (url, headers, body, callSuccess, callError) {
        
        var headerLogin = _BaseService.getHeader();

        fetch(url, {
            method: 'POST',
            headers: headerLogin,
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((json) => {
        
            callSuccess(json);
        })
        .catch(error => {
            callError(error);
        });
    }

    static httpGet (url, headers, body, callSuccess, callError) {
        fetch(url, {
            method: 'GET',
            headers: headers,
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((json) => {
            callSuccess(json);
        })
        .catch(error => {
            callError(error);
        });
    }
}

export default ApiService;