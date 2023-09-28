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
                if(callSuccess)
                {
                        callSuccess(json);
                }
                
        })
        .catch(error => {

                if(callError)
                {
                        callError(error);
                }
                
        });
    }
}

export default ApiService;