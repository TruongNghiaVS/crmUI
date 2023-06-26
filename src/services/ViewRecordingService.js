import ApiService from './ApiService';
import Constants from '../utils/Constants';
class ViewRecordingService   {
     static  PushCase( body, callSuccess, callError) {
      let url = Constants.URL_viewRecording_PushLead;
      ApiService.httpPost(url,null, body, callSuccess, callError);
 }




 

}

export default ViewRecordingService;