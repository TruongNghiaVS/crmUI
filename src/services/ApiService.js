import _BaseService from './BaseService';
class ApiService {
    
static httpPost (url, headers, body, callSuccess, callError) {
        
        var headerLogin = _BaseService.getHeader();
        fetch(url, {
                method: 'POST',
                headers: headerLogin,
                body: JSON.stringify(body),
        })

        .then( async (response) => {

                let data = await response.json();
                if(response.status === 200){
                        callSuccess(data);
                        
                }else{

                        var dataJson = {
                                role: "",
                                isLogin: 201
                        };

                        localStorage.setItem('user-info', JSON.stringify(dataJson));
                        localStorage.removeItem('authorizeKey');
                        window.location.href ="/login"; 
                   
                }
        
              })
              .catch((err) => {
                callError(err);
          })
        
        // .then((res) => {res.json()})
        // .then((json) => {
        //         debugger;
        //         if(callSuccess)
        //         {
        //                 callSuccess(json);
        //         }
                
        // })
        // .catch(error => {

        //         if(callError)
        //         {
        //                 callError(error);
        //         }
                
        // });
    }
}

export default ApiService;