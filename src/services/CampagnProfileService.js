import ApiService from './ApiService';
import Constants from '../utils/Constants';
import Assigee from '../pages/followUp/ticketView/tabsTicketView/Assigee';

class CampagnProfileService {
  
   static getById(body, callSuccess, callError) {
        let url = Constants.URL_campagnProfile_GetById;
        ApiService.httpPost(url, null, body, callSuccess, callError);
   }
   
static getInfoById(body, callSuccess, callError) {
     let url = Constants.URL_campagnProfile_GetInfo;
     ApiService.httpPost(url, null, body, callSuccess, callError);
}
     
static update(body, callSuccess, callError) {
let url = Constants.URL_campagnProfile_Update;
ApiService.httpPost(url, null, body, callSuccess, callError);
}


 static assigee(body, callSuccess, callError) {
     let url = Constants.URL_campagnProfile_Asignee;
     ApiService.httpPost(url, null, body, callSuccess, callError);
}
 static getAllInfo(body, callSuccess, callError) {
     let url = Constants.URL_masterDataNew_getAllInfo;
     ApiService.httpPost(url, null, body, callSuccess, callError);
}

static handleCase(body, callSuccess, callError) {
     let url = Constants.URL_campagnProfile_handleCase;
     ApiService.httpPost(url, null, body, callSuccess, callError);
}


static updateSkip(body, callSuccess, callError) {
     let url = Constants.URL_campagnProfile_updateskip;
     ApiService.httpPost(url, null, body, callSuccess, callError);
}




}

export default CampagnProfileService;