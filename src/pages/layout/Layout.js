import './Layout.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Home from '../home/Home';
import Login from '../login/Login';
import User from '../user/User';
import GroupUser from '../groupUser/GroupUser';
import Workplace from '../workplace';


import Dashboard from '../dashboard/Dashboard';
import SmsDashboard from '../smsDashboard/Dashboard';

import FollowUp from '../followUp/FollowUp';
import FollowUpNew from '../fololowNew';
import React, { useState, useEffect } from 'react'
import Reason from '../reason/Reason';
import DetailGroup from '../DetailGroup/Reason';

import MasterDataNew from '../masterDataNew';
import GroupReason from '../groupReason/GroupReason';
import Campangn from '../campagn';
import CampaignOverview from '../campaignOverview';
import CampaignAssign from '../campaignAssign';
import { ToastContainer } from 'react-toastify';
import ReportMaster from '../reportMaster';
import Relationship from '../reason/Reason';
import Reporthistorical from '../reporthistorical';
import {ticketView} from '../followUp/ticketView/TicketView';
import 'react-toastify/dist/ReactToastify.css';
import ReportCDR from '../reportCDR';
import DocumentData from '../DocumentData';


import ReportTalkTime from '../reportTalkTime';
import ReportRecording from '../reportRecording';

import RecordingNoAgree from '../recordingNoAgree';

import SmsReport  from  '../smsReport';
import ViewRecordingFile  from '../viewRecordingFile';
import ViewRecordingOverviewFile  from '../ViewRecordingOverviewFile/ViewRecordingOverviewFile';

import LineManagement from '../lineManagement';
import DpdManagement from '../dpdManagement';
import NanagementPackage from '../packageManagement';
const Layout = (props) => {
    const [heightLayout, setHeightLayout] = useState(0);
    const [heightMain, setHeightMain] = useState(0);

    useEffect(() => {
        if(props.page !== '/' || props.page !== 'login') {
            setHeightMain(heightLayout.clientHeight - 130);
        }
    }, [props.page, heightLayout.clientHeight])

    if(props.page === '/' || props.page === 'login') {
        return (
            <div ref={(height) => { setHeightLayout(height) }} id="layout" className='layout layout-login'>
                <Screen screen={ props.page } />
            </div>
        );
    } else {
        return (
            <div ref={(height) => { setHeightLayout(height) }} className="layout">
                <Header classHeader="header" />
                <main style={{maxHeight: heightMain+'px'}} className='main-layout'>
                    <Screen screen={ props.page } />
                </main>
                <Footer classFooter="footer" />  
                <ToastContainer />
            </div>
        );
    }
}

const Screen = (props) => {
    switch (props.screen) {
        case 'test-line':
            return <CampaignAssign/>;
   
        case 'campaignAssign':
            return <CampaignAssign/>;
        case 'follow-up-new':
            return <FollowUpNew />;
        case 'home':
            return <Home />;
        case 'login':
            return <Login />;
        case 'user':
            return <User />;
            
            case 'workplace':
                return <Workplace />;
       case 'GroupUser':
                return <GroupUser />;
        case 'dashboard':
            return <Dashboard />;
        case 'tong-quan-tin-nhan':
            return <SmsDashboard />;
        case 'follow-up':
            return <FollowUp />;
        case 'reason':
            return <Reason/>;

        case 'detailGroup':
                return <DetailGroup/>;
        case 'groupReason':
            return <GroupReason/>;
        case 'campangn':
            return <Campangn/>

        case 'relationship':
            return <MasterDataNew/>

        case 'reporthistorical':
            return <Reporthistorical/>
        case 'reportMaster': 
        
            return  <ReportMaster/>

        case 'reportCDR': 
    
        return  <ReportCDR/>

        case 'viewRecording': 
        return  <ViewRecordingFile/>

        case 'viewRecordingOverviewFile': 
        return  <ViewRecordingOverviewFile/>

        case 'recording': 
    
        return  <ReportRecording/>


        case 'documentData': 
    
        return  <DocumentData/>

        

        
        case 'recordingNoAgree': 
    
        return  <RecordingNoAgree/>
        
        case 'smsReport': 
    
        return  <SmsReport/>

        
        case 'reportTalkTime': 
    
        return  <ReportTalkTime/>
        case 'lineManagement':
            return <LineManagement/>;

       case 'infoManagement':
                return <CampaignOverview/>;
      

        case 'managementPackage':
            return <NanagementPackage/>;

         case 'quan-ly-dpd':
            return <DpdManagement/>;
        default:
            throw new Error('Invalid Screen')
    }
}

export default Layout;