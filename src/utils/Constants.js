class ConstantData {
    static DOMAIN = "https://localhost:44332";
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
    static URL_Employee_exportData = `${ConstantData.DOMAIN}/api/employee/exportData`;
    //masterData
    static URL_masterdata_GetALl = `${ConstantData.DOMAIN}/api/masterdata/getAll`;
    static URL_masterdata_Add = `${ConstantData.DOMAIN}/api/masterdata/add`;
    static URL_masterdata_Update = `${ConstantData.DOMAIN}/api/masterdata/update`;
    static URL_masterdata_Delete = `${ConstantData.DOMAIN}/api/masterdata/delete`;
    static URL_masterdata_GetById = `${ConstantData.DOMAIN}/api/masterdata/getById`;
    static URL_masterdata_exportData = `${ConstantData.DOMAIN}/api/masterdata/exportData`;

    //groupStatus
    static URL_groupStatus_GetALl = `${ConstantData.DOMAIN}/api/groupStatus/getAll`;
    static URL_groupStatus_Add = `${ConstantData.DOMAIN}/api/groupStatus/add`;
    static URL_groupStatus_Update = `${ConstantData.DOMAIN}/api/groupStatus/update`;
    static URL_groupStatus_Delete = `${ConstantData.DOMAIN}/api/groupStatus/delete`;
    static URL_groupStatus_GetById = `${ConstantData.DOMAIN}/api/groupStatus/getById`;
    static URL_groupStatus_exportData = `${ConstantData.DOMAIN}/api/groupStatus/exportData`;


    //group-reason
    static URL_groupReason_GetALl = `${ConstantData.DOMAIN}/api/groupReason/getAll`;
    static URL_groupReason_Add = `${ConstantData.DOMAIN}/api/groupReason/add`;
    static URL_groupReason_Update = `${ConstantData.DOMAIN}/api/groupReason/update`;
    static URL_groupReason_Delete = `${ConstantData.DOMAIN}/api/groupReason/delete`;
    static URL_groupReason_GetById = `${ConstantData.DOMAIN}/api/groupReason/getById`;
    static URL_groupReason_exportData = `${ConstantData.DOMAIN}/api/groupReason/exportData`;


}

export default ConstantData;