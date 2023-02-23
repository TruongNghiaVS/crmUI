import './Layout.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Home from '../home/Home';
import Login from '../login/Login';
import User from '../user/User';
import GroupUser from '../groupUser/GroupUser';

import Dashboard from '../dashboard/Dashboard';
import FollowUp from '../followUp/FollowUp';
import FollowUpNew from '../fololowNew';
import React, { useState, useEffect } from 'react'
import Reason from '../reason/Reason';
import MasterDataNew from '../masterDataNew';
import GroupReason from '../groupReason/GroupReason';
import Campangn from '../campagn';
import CampaignAssign from '../campaignAssign';
import { ToastContainer } from 'react-toastify';
import ReportMaster from '../reportMaster';
import Relationship from '../reason/Reason';
import Reporthistorical from '../reporthistorical';
import {ticketView} from '../followUp/ticketView/TicketView';
import 'react-toastify/dist/ReactToastify.css';
import ReportCDR from '../reportCDR';
import ReportTalkTime from '../reportTalkTime';
import ReportRecording from '../reportRecording';

import LineManagement from '../lineManagement';
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
       case 'GroupUser':
                return <GroupUser />;
        case 'dashboard':
            return <Dashboard />;
        case 'follow-up':
            return <FollowUp />;
        case 'reason':
            return <Reason/>;
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

        case 'recording': 
    
        return  <ReportRecording/>

        case 'reportTalkTime': 
    
        return  <ReportTalkTime/>
        case 'lineManagement':
            return <LineManagement/>;
                
        default:
            throw new Error('Invalid Screen')
    }
}

export default Layout;