import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import moment from "moment"; 
import { FaClock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import ReactAudioPlayer from 'react-audio-player';
const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};


const toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}



const getInfoMationViewDetail = (LastCall, data = null) => {

    
    var timeNow  = new Date();
  
    var  lastCallTime =  data.lastCallcrm;

    if(data.lastCall > data.lastCallcrm)
    {
      lastCallTime =  data.lastCall;
    }
    
    if(lastCallTime)
    {

    }
    else 
    {
        return;
    }

    if(data.isCalling)
    {   
        return  <div>
               <FaCheckCircle className='icon-tbl12'> </FaCheckCircle>
                <span   className="greencolor"  > {data.durationRealTime} </span>
       
              </div>
    }
    else 
    {
        var lastCallTime1 = new Date(lastCallTime);


        var dif = timeNow.getTime() - lastCallTime1.getTime();
        var Seconds_Between_Dates = Math.abs(dif/1000);
        if(Seconds_Between_Dates < 60) 
        {
           
return <div>
<FaCheckCircle className='icon-tbl1'> </FaCheckCircle>
         <span  > {toHHMMSS(Seconds_Between_Dates)} </span>

       </div>
       
         
        }
        
       else if(Seconds_Between_Dates < 300) 
        {
            return <div>
            <FaCheckCircle className='icon-tbl4'> </FaCheckCircle>
                     <span  className="warmingColor"> {toHHMMSS(Seconds_Between_Dates)} </span>
       
                   </div>
        }

        else if(Seconds_Between_Dates < 600) 
        {
            return <div className="">
            <FaCheckCircle className='icon-tbl4'> </FaCheckCircle>
                          <span  className="warmingColor"> {toHHMMSS(Seconds_Between_Dates)} </span>
       
                   </div>
        }
        else if(Seconds_Between_Dates < 900) 
        {
            return <div >
                    <FaCheckCircle className='icon-tbl4'> </FaCheckCircle>
                    <span  className="warnigLevel3"> {toHHMMSS(Seconds_Between_Dates)} </span>
       
                   </div>
        }

        else if(Seconds_Between_Dates >= 900) 
        {
            return <div className="">
            <FaCheckCircle className='icon-tbl4'> </FaCheckCircle>
            <span  className="warnigLevel4"> {toHHMMSS(Seconds_Between_Dates)} </span>
       
                   </div>
        }
    
        return <>
        <FaCheckCircle className='icon-tbl4'> </FaCheckCircle>
         {toHHMMSS(Seconds_Between_Dates)}

         <span  > {toHHMMSS(Seconds_Between_Dates)} </span>
       </> 
    }

   
    
}

const RenderProcessCall = (data) => {
  var havingCall = data.isCalling;
  var timeNow  = new Date();

  var  lastCallTime =  data.lastCallcrm;

  if(data.lastCall > data.lastCallcrm)
  {
    lastCallTime =  data.lastCall;
  }
 
  let dataDisplayText= moment(lastCallTime).format("HH:mm:ss");
    
    if(havingCall ==true)
    {
        return <div className="greenTalk"> Đang gọi (tổng thời gian đang gọi 1 cuộc thoại) </div>
    }
    else  
    {
        var dif = timeNow.getTime() - new Date(lastCallTime).getTime();
        var Seconds_Between_Dates = Math.abs(dif/1000);
        if(Seconds_Between_Dates < 10)
        {
            return <div className="processCall"> Đang thực hiện cuộc gọi </div>
        }
        else  if(Seconds_Between_Dates < 30)
        {
            return <div className="justCall"> Vừa thực hiện cuộc gọi </div>
        }

        return <div  className="callEnd"> Kết thúc Cuộc gọi ({dataDisplayText}) </div>
    }
 
}
const getShowfile = (item)=> {
    let fileUrl = "http://42.115.94.180:7878/api/getFileAudio?filePath=";
    if(item.src.startsWith("1"))
    {
        fileUrl = "http://118.69.182.32:7879/api/getFileAudio?filePath=";
    }
    fileUrl=fileUrl +''+ item.recordingfile;
    
    if(!item.isShow)
    {   
        return  <ReactAudioPlayer
        src={fileUrl}
        
        controls
        />;
    }
    return <p></p>
}

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    var zone  = "America/New_York";

    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>{data.dayR +'-'+data.monthR + '-'+data.yearR}</td>
       
            <td>{data.userName}</td>
            <td>{data.managerUserName}</td>
            <td>{data.sumAn+ data.sumNOAswer+ data.sumNOCancel + data.sumNoBussy +data.sumNoFail }</td>
            <td>{RenderProcessCall(data)}</td>
            <td>{getInfoMationViewDetail(data.lastCall,data)}</td>
          
            <td>{toHHMMSS(data.timeWaiting)}</td>
            <td>{toHHMMSS(data.timeTalking)}</td>
            <td>{toHHMMSS(data.timCall)}</td>
           
        </tr>
    );
};

const Table = ({ theadData, tbodyData, tblClass,dataDraw, handleDelete,handleUpdateById,handleViewById }) => {
    
    
    return (
        <table className={tblClass}>
            <thead>
                <tr className='headRow'>
                    <th><input type="checkbox" defaultChecked={false} /></th>
                    { 
                      theadData.map((h, index) => {
                        
                        return <TableHeadItem key={h} item={h} />;
                    })}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                     dataDraw.tbodyDataUser.map((item, index) => {
                        return <TableRow 
                        key={item.id} data={item} 
                        rowIndex = {index} 
                        handleDeleteById = {handleDelete} 
                        handleViewById = {handleViewById}
                        handleUpdateById ={handleUpdateById}/>;
                    })
                }
            </tbody>
        </table>
    );
};

export default Table;