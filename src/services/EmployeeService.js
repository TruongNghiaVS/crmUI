import ApiService from './ApiService';

class EmployeeService   {
    static GetAll(url, headers, body, callSuccess, callError) {

        ApiService.httpGet(url, headers, body, callSuccess, callError);
    }

}

export default EmployeeService;