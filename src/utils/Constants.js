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

    //Login
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


    //campagn
     static URL_campagn_GetALl = `${ConstantData.DOMAIN}/api/campagn/getAll`;
     static URL_campagn_Add = `${ConstantData.DOMAIN}/api/campagn/add`;
     static URL_campagn_Update = `${ConstantData.DOMAIN}/api/campagn/update`;
     static URL_campagn_Delete = `${ConstantData.DOMAIN}/api/campagn/delete`;
     static URL_campagn_GetById = `${ConstantData.DOMAIN}/api/campagn/getById`;
     static URL_campagn_exportData = `${ConstantData.DOMAIN}/api/campagn/exportData`;


      //campagn profile
    static URL_campagnProfile_GetALl = `${ConstantData.DOMAIN}/api/campagnProfile/getAll`;
    static URL_campagnProfile_Add = `${ConstantData.DOMAIN}/api/campagnProfile/add`;
    static URL_campagnProfile_Update = `${ConstantData.DOMAIN}/api/campagnProfile/update`;
    static URL_campagnProfile_updateskip = `${ConstantData.DOMAIN}/api/campagnProfile/updateskip`;
    static URL_campagnProfile_Delete = `${ConstantData.DOMAIN}/api/campagnProfile/delete`;
    static URL_campagnProfile_GetById = `${ConstantData.DOMAIN}/api/campagnProfile/getById`;
    static URL_campagnProfile_exportData = `${ConstantData.DOMAIN}/api/campagnProfile/exportData`;
    static URL_campagnProfile_GetInfo = `${ConstantData.DOMAIN}/api/campagnProfile/getInfo`;

    //campagn profile_Assigee
    static URL_campagnProfile_Assigee = `${ConstantData.DOMAIN}/api/campagn/assignes`;

    static URL_campagnProfile_Assigee_getAll = `${ConstantData.DOMAIN}/api/campagn/getAllCampangeAssigess`;



    //campagn profile
    static URL_impactHistory_GetALl = `${ConstantData.DOMAIN}/api/impacthistory/getAll`;
    static URL_impactHistory_Add = `${ConstantData.DOMAIN}/api/impacthistory/add`;
    static URL_impactHistory_Update = `${ConstantData.DOMAIN}/api/impacthistory/update`;
    static URL_impactHistory_Delete = `${ConstantData.DOMAIN}/api/impacthistory/delete`;
    static URL_impactHistory_GetById = `${ConstantData.DOMAIN}/api/impacthistory/getById`;
    static URL_impactHistory_exportData = `${ConstantData.DOMAIN}/api/impacthistory/exportData`;


    //masterDataNew
    static URL_masterDataNew_GetALl = `${ConstantData.DOMAIN}/api/masterdataNew/getAll`;
    static URL_masterDataNew_Add = `${ConstantData.DOMAIN}/api/masterdataNew/add`;
    static URL_masterDataNew_Update = `${ConstantData.DOMAIN}/api/masterdataNew/update`;
    static URL_masterDataNew_Delete = `${ConstantData.DOMAIN}/api/masterdataNew/delete`;
    static URL_masterDataNew_GetById = `${ConstantData.DOMAIN}/api/masterdataNew/getById`;
    static URL_masterDataNew_exportData = `${ConstantData.DOMAIN}/api/masterdataNew/exportData`;

    static URL_masterDataNew_getAllInfo = `${ConstantData.DOMAIN}/api/masterdataNew/getAllInfo`;

    static URL_campagnProfile_Asignee = `${ConstantData.DOMAIN}/api/campagnProfile/Asignee`;
    static URL_campagnProfile_handleCase = `${ConstantData.DOMAIN}/api/campagnProfile/handleCase`;
    
    static URL_GroupEmployee_GetALl = `${ConstantData.DOMAIN}/api/groupEmployee/getAll`;
    static URL_GroupEmployee_Add = `${ConstantData.DOMAIN}/api/groupEmployee/add`;
    static URL_GroupEmployee_GetById = `${ConstantData.DOMAIN}/api/groupEmployee/GetById`;
    static URL_GroupEmployee_Update = `${ConstantData.DOMAIN}/api/groupEmployee/update`;

    static URL_GroupEmployee_Delete = `${ConstantData.DOMAIN}/api/groupEmployee/delete`;
     //other
    static URL_Employee_GetAllManager = `${ConstantData.DOMAIN}/api/groupEmployee/getAllManager`;
    static URL_User_Logout = `${ConstantData.DOMAIN}/api/user/logout`;
     //ReportService
    static URL_ReportService_GetALlOverView = `${ConstantData.DOMAIN}/api/Report/getAllOverView`;
    static URL_ReportService_getAllImpact = `${ConstantData.DOMAIN}/api/Report/getAllImpact`;

    static URL_ReportService_getAllReportCDR = `${ConstantData.DOMAIN}/api/report/getAllCDR`;
    static URL_ReportService_getAllRecordingFile = `${ConstantData.DOMAIN}/api/report/getAllRecordingFile`;

    static URL_ReportService_ReportRecordingFile = `${ConstantData.DOMAIN}/api/report/ReportRecordingFile`;

    
    // static URL_User_getAllOverView = `${ConstantData.DOMAIN}/api/dashboard/getAllOverView`;
    static URL_User_getAllOverView = `${ConstantData.DOMAIN}/api/dashboard/getOverView`;

    // static URL_User_getOverViewByCall = `${ConstantData.DOMAIN}/api/dashboard/getOverViewByCall`;


    static URL_User_getOverViewByCall = `${ConstantData.DOMAIN}/api/dashboard/getDetailOverView`;

    static URL_makeCall = `${ConstantData.DOMAIN}/api/MakeCall/TriggerCall`;


    static URL_ReportTalkTime_GetAll = `${ConstantData.DOMAIN}/api/ReportTalkTime/getAll`;
    
}
export default ConstantData;