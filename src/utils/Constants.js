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
    static URL_Employee_GetALl = `${ConstantData.DOMAIN}/api/employee/getAll`;
    static URL_Employee_Add = `${ConstantData.DOMAIN}/api/employee/add`;
    static URL_Employee_Update = `${ConstantData.DOMAIN}/api/employee/update`;
    static URL_Employee_Delete = `${ConstantData.DOMAIN}/api/employee/delete`;

    static URL_Employee_GetById = `${ConstantData.DOMAIN}/api/employee/getById`;
}

export default ConstantData;