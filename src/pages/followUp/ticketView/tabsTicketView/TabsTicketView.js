import { Tabs, Tab } from 'react-bootstrap';
import UpdateVotes from './UpdateVotes';
import ImpactHistory from './ImpactHistory';
import Skip from './Skip';
import Assigee from './Assigee';

const TabsTicketView = ({handleInputChange1,handleInputChange,dataHistory, dataView, dataView2,dataReason,saveImpact,saveSkip, masterData, listUser}) => {
    return (
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
            <Tab eventKey="home" title="Cập nhật phiêu">
                <UpdateVotes dataView1 = {dataView}  handleInputChange = {handleInputChange1} masterData = {masterData} dataReason = {dataReason} listUser = {listUser} saveImpact = {saveImpact} />
            </Tab>
            <Tab eventKey="profile" title="Lịch sử tác động">
                <ImpactHistory data = {dataHistory} />
            </Tab>

            <Tab eventKey="skip" title="Skip">
                <Skip data = {dataView2}  saveSkip = {saveSkip}  handleInputChange = {handleInputChange} />
            </Tab>
            
            <Tab eventKey="assignee" title="Phân công">
                <Assigee data = {dataView2} listUser ={listUser} masterData = {masterData}  handleInputChange = {handleInputChange} />
            </Tab>
        </Tabs>
    );
};

export default TabsTicketView;