

class BaseService {

    static getHeader()
    {
        var authorizeKey = localStorage.getItem("authorizeKey");

        if(authorizeKey !=null)
        {
            authorizeKey = JSON.parse(localStorage.getItem("authorizeKey"));
        }
        else 
        {
            authorizeKey ="";
        }


        return {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+authorizeKey, 
            'Content-type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"
        };
    }

    
}

export default BaseService;