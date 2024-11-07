import React, { useState, useEffect } from 'react';
import Table from "./Table";
import { FaTable, FaFilter } from "react-icons/fa";
import DataJson from "../../utils/Data";
import { useParams } from 'react-router-dom';
import TicketView from './ticketView/TicketView';
import AutoCallService from "../../services/AutoCallService";

const FollowUp = ( {triggerAutocall}) => {


    
    const [valTitle, setValTitle] = useState("Danh sách theo dõi");

    let { detail } = useParams();
    const  getQueryVariable = (variable) =>
    {
            var query = window.location.search.substring(1);
            console.log(query)//"app=article&act=news_content&aid=160990"
            var vars = query.split("&");
            console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
            for (var i=0;i<vars.length;i++) {
                        var pair = vars[i].split("=");
                        console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
            if(pair[0] == variable){return pair[1];}
             }
            return 1;
    }
    useEffect(() => {
        let isUseEffect = true; 
    
        if (isUseEffect) {
            if (detail === "new-list") {
                setValTitle("Danh sách mới phân");
            } 
            if (detail === "data") {
                setValTitle("Danh sách import");
            }
            else {
                setValTitle("Danh sách theo dõi");
            }
            var autocall = getQueryVariable("autocalFor");
           

            if(autocall > 2)
            {
                getDurationTalk(autocall);
            }

       
            

            
        }
    
        return () => 
        { 
            isUseEffect = false
         };
    }, [detail, valTitle]);
    let myIntervalDuration = null;
    //recevie durraion call
    const getDurationTalk = (autocall) =>{
      myIntervalDuration = setInterval(getdurationTalk1, 1000);
      function getdurationTalk1() {
        getDuraionviaphone();
      }
      const getDuraionviaphone = () => {
        let bodyRequest = {
                NoAgreeId : autocall
        };
        AutoCallService.GetDurationViaPhone(
            bodyRequest,
          (response) => {
              
            var dataReponse =  response.value;
            if(dataReponse.havingCall)
            {
              document.getElementsByClassName('time-talking')[0].textContent = response.value.duration;
              document.getElementsByClassName('phone_number')[0].textContent = response.value.phoneNumber;
              document.getElementsByClassName('phone_name')[0].textContent = response.value.fullName;
              document.getElementById("havingCalling").style.display  = "block";
              document.getElementById("noCalling").style.display  = "none";
            }
            else 
            {
              document.getElementById("noCalling").style.display  = "block";
              document.getElementById("havingCalling").style.display  = "none";
              stopgetDurationTalk();
            }
          },
          (error) => {}
        );
      }
    }

    function stopgetDurationTalk() {
      clearInterval(myIntervalDuration);

      setTimeout(() => {
        triggerAutocall(false);
      }, 3000);
    }
    return (

        <TicketView />
       
    );
};

export default FollowUp;