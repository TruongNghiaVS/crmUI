import { Tabs, Tab } from 'react-bootstrap';
import UpdateVotes from './UpdateVotes';
import ImpactHistory from './ImpactHistory';
import SkipExtra from './SkipExtra';
import Skip from './Skip';
import Assigee from './Assigee';

const TabsTicketView = ({handleInputChange1,handleInputChange,dataHistory, dataView, dataView2,dataReason,saveImpact,saveSkip, masterData,handleClick, listUser, handleInputChangeColor,dataSkip}) => {
    
    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));

    const roleUser = jsonProfile.role;
    
    var isAdmin = false;
    if(roleUser === "2") {
        isAdmin = true;
    }
   
    return (
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
          
              
            >
            <Tab eventKey="home" title="Cập nhật phiếu">
                <UpdateVotes handleClick= {handleClick} dataView2 ={dataView2} dataView1 = {dataView} handleInputChangeColor = {handleInputChangeColor}  handleInputChange = {handleInputChange1} masterData = {masterData} dataReason = {dataReason} listUser = {listUser} saveImpact = {saveImpact} />
            </Tab>


            <Tab  eventKey="profile" title="Lịch sử tác động">
                <ImpactHistory data = {dataHistory} />
            </Tab>
            <Tab  eventKey="skipnew" title="Thông tin thêm(mới)">
                <SkipExtra data = {dataSkip} />
            </Tab>

            <Tab eventKey="skip" title="Thông tin thêm">
                <Skip data = {dataView2}  saveSkip = {saveSkip}  handleInputChange = {handleInputChange} />
            </Tab>
            {
             isAdmin? 
            <Tab eventKey="assignee" title="Phân công">
                <Assigee data = {dataView2} listUser ={listUser} masterData = {masterData}  handleInputChange = {handleInputChange} />
            </Tab>: <></>
            }

    
        </Tabs>
    );
};

export default TabsTicketView;