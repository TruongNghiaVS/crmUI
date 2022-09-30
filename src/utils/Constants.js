class ConstantData {
    static DOMAIN = "https://localhost:7098";
    static HEADERS = {
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"
        
    
    };

    // API URL
    // Login
    static URL_LOGIN = `${ConstantData.DOMAIN}/api/user/login`;
}

export default ConstantData;