import "./Layout.scss";
import moment from "moment";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Home from "../home/Home";
import Login from "../login/Login";
import User from "../user/User";
import GroupUser from "../groupUser/GroupUser";
import Workplace2 from "../workplace2";

import Dashboard from "../dashboard/Dashboard";
import SmsDashboard from "../smsDashboard/Dashboard";

import FollowUp from "../followUp/FollowUp";
import FollowUpNew from "../fololowNew";
import Store from "../store";
import Search from "../searchStore";

import React, { useState, useEffect } from "react";
import Reason from "../reason/Reason";
import DetailGroup from "../DetailGroup/Reason";

import MasterDataNew from "../masterDataNew";
import GroupReason from "../groupReason/GroupReason";
import Campangn from "../campagn";
import CampaignOverview from "../campaignOverview";
import CampaignAssign from "../campaignAssign";
import { ToastContainer } from "react-toastify";
import ReportMaster from "../reportMaster";
import Relationship from "../reason/Reason";
import Reporthistorical from "../reporthistorical";
import { ticketView } from "../followUp/ticketView/TicketView";
import "react-toastify/dist/ReactToastify.css";
import ReportCDR from "../reportCDR";
import DocumentData from "../DocumentData";

import ReportTalkTime from "../reportTalkTime";
import TrackingCall from "../TrackingCall";


import Tracking from "../tracking";

import ReportRecording from "../reportRecording";
import FistlastCall from "../fistlastCall";
import RecordingNoAgree from "../recordingNoAgree";
import ReportCall from "../reportCall";

import SmsReport from "../smsReport";
import ViewRecordingFile from "../viewRecordingFile";
import ViewRecordingOverviewFile from "../ViewRecordingOverviewFile/ViewRecordingOverviewFile";

import LineManagement from "../lineManagement";
import DpdManagement from "../dpdManagement";
import NanagementPackage from "../packageManagement";
import TrackingService from "../../services/TrackingService";
import AutoCallService from "../../services/AutoCallService";
import Swal from "sweetalert2";
const Layout = (props) => {
  const [heightLayout, setHeightLayout] = useState(0);
  const [heightMain, setHeightMain] = useState(0);
  const [isrequestCheck, setrequestCheck] = useState(true);

  useEffect(() => {
    if (props.page !== "/" || props.page !== "login") {
      setHeightMain(heightLayout.clientHeight - 130);
    }

    let counter = 0;

    const interval = setInterval(() => {
      counter++;
      requestCheck();
     
    }, 60000);
  }, [props.page, heightLayout.clientHeight]);

  if (props.page === "/" || props.page === "login") {
    return (
      
      <div
        ref={(height) => {
          setHeightLayout(height);
        }}
        id="layout"
        className="layout layout-login"
      >
       <Screen screen={props.page} />

     
      </div>
    );
  } else {
    return (
      <div
        ref={(height) => {
          setHeightLayout(height);
        }}
        className="layout"
      >
        <Header classHeader="header" />
        <main style={{ maxHeight: heightMain + "px" }} className="main-layout">
          <Screen screen={props.page}  />
        </main>
        <Footer classFooter="footer" />
        <form target="_blank" action="http://example.com"
        method="post" id="formSubmit"  class="validate" >
       </form>
        <ToastContainer />
      </div>
    );
  }
};

const Screen = (props) => {
  switch (props.screen) {
    case "test-line":
      return <CampaignAssign />;

    case "campaignAssign":
      return <CampaignAssign />;
    case "follow-up-new":
      return <FollowUpNew triggerAutocall = {autocall} />;
    case "kho-luu-tru":
      return <Store />;
    case "tra-cuu":
      return <Search />;
    case "home":
      return <Home />;
    case "login":
      return <Login />;
    case "user":
      return <User />;

    case "workplace2":
      return <Workplace2 />;

    case "GroupUser":
      return <GroupUser />;
    case "dashboard":
      return <Dashboard />;
    case "tong-quan-tin-nhan":
      return <SmsDashboard />;
    case "follow-up":
      return <FollowUp triggerAutocall = {autocall} />;
    case "reason":
      return <Reason />;

    case "detailGroup":
      return <DetailGroup />;
    case "groupReason":
      return <GroupReason />;
    case "campangn":
      return <Campangn />;

    case "relationship":
      return <MasterDataNew />;

    case "reporthistorical":
      return <Reporthistorical />;
    case "reportMaster":
      return <ReportMaster />;

    case "reportCDR":
      return <ReportCDR />;

    case "viewRecording":
      return <ViewRecordingFile />;

    case "viewRecordingOverviewFile":
      return <ViewRecordingOverviewFile />;

    case "recording":
      return <ReportRecording />;
    case "fistlastCall":
      return <FistlastCall />;

    case "documentData":
      return <DocumentData />;

    case "recordingNoAgree":
      return <RecordingNoAgree />;

    case "smsReport":
      return <SmsReport />;

    case "reportTalkTime":
      return <ReportTalkTime />;
    case "tracking-call":
      return <TrackingCall />;
    case "tracking":
      return <Tracking />;

    case "reportCall":
      return <ReportCall />;

    case "lineManagement":
      return <LineManagement />;

    case "infoManagement":
      return <CampaignOverview />;

    case "managementPackage":
      return <NanagementPackage />;

    case "quan-ly-dpd":
      return <DpdManagement />;
    default:
      throw new Error("Invalid Screen");
  }
};
// const toHHMMSS = (secs) => {
//   var sec_num = parseInt(secs, 10);
//   var hours = Math.floor(sec_num / 3600);
//   var minutes = Math.floor(sec_num / 60) % 60;
//   var seconds = sec_num % 60;

//   return [hours, minutes, seconds]
//     .map((v) => (v < 10 ? "0" + v : v))
//     .filter((v, i) => v !== "00" || i > 0)
//     .join(":");
// };
const requestCheck = () => {
  let bodySearch = {};
  TrackingService.RequestCheck(
    (response) => {
         if (response.statusCode === 200) {
        if (response.value.sucecss) {
          var differTime = response.value.differTime;
          var timeLastCall = response.value.timeLastCall;

          Swal.fire({
            icon: "warning",
            title: "Cảnh báo từ hệ thống gọi",
            text: "Bạn vui lòng thực hiện cuộc gọi mới. ",
            footer:
              'Bạn chưa thực hiện cuộc gọi nào từ  <strong style ="margin-left:10px">  ' +
              moment(timeLastCall).format("DD/MM/YYYY hh:mm:ss") +
              "</strong>",
            background: "#fff url(/images/trees.png)",
            confirmButtonText: "Tôi gọi liền",
            backdrop: `rgba(0,0,123,0.4) left top no-repeat`,
          });
        }
      }
    },
    (error) => {}
  );
};

 

// 





// triiger auto call



  var isBreak = false;
  let myInterval = null;
  const autocall = (showpopup = true) => {
    isBreak = false;
    if(showpopup)
    {
      Swal.fire({
        title: "Đang chờ cuộc gọi từ hệ thóng",
        width: 600,
        showConfirmButton : false,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
    }
 
   
    myInterval = setInterval(getInfomationCall, 1000);
    function getInfomationCall() {
      getInfomation();
  }
  function openCallNew(itemHopDong) {
    var itemValue = itemHopDong.value;
    Swal.fire({
      title: "Cuộc gọi mới  ",
      text: "Khách hàng " + itemValue.name,
      icon: "warning",
      background: "#fff url(/images/trees.png)",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Nhận cuộc gọi"
    }).then((result) => {
      if (result.isConfirmed) {
        const tagA = document.createElement("a");
        tagA.setAttribute("href",itemValue.linkHref );
        tagA.setAttribute("target","_blank" );
        document.body.appendChild(tagA);
        tagA.click();
        setTimeout(() => {
            document.body.removeChild(tagA);
        }, 1000);
        
      }
    });
  }

  function getInfomation() {
    if(isBreak)
      {
        
        stopRequestAutoCall();
        return;
      }
    AutoCallService.GetProfile((response) => {
      if (response.value ==null || response.value == ""
          ||  response.value.length < 10) {
          return;
      }
      else {
      
        isBreak = true;
        Swal.close();
        openCallNew(response);
        return;

       
        return;

          
          var tagA = document.getElementById("itdemo");
          tagA.setAttribute("href",response.value );
      
          // if(!showpopup)
          // {
          //   tagA.setAttribute("target","_blank" );
          // }
          tagA.click();
          isBreak = true;
      }
      }, (error) => {
              
      })
  }

  function stopRequestAutoCall() {
    clearInterval(myInterval);
  }
  
  
  
  }

  




export default Layout;
