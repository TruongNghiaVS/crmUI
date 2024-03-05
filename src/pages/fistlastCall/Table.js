import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import moment from "moment-timezone"; 

import ReactAudioPlayer from 'react-audio-player';
import { findAllInRenderedTree } from "react-dom/test-utils";
import ViewRecordingService from '../../services/ViewRecordingService';


const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const displayMobilePhone = (numberPhone) => 
{   
    
    if(numberPhone)
    {
        if(numberPhone.length <7)
        {
            return "";
        }
        return  numberPhone.substring(0, 6) + 'xxxxx';
    }
    return "";

}
const onPlay = (id) => {
 
    
    countRecord(id);

}


const  countRecord = (id) => { 
      
    const modelUpdate = {
        ProfileId: ''+id
    };
    
    ViewRecordingService.PushCase(
         modelUpdate,
        null, 
        null);
   

}
const getShowfile =  (item)=> {
    // return item.recordingfile;
    let fileUrl = "https://localhost:8098/api/file/getaudio10?filePath=";
    if(item.src.startsWith("1"))
    {
        fileUrl = "https://localhost:8098/api/file/getaudio10?filePath=";
    }
    if(item.src.startsWith("3"))
    {
        fileUrl = "https://localhost:8098/api/file/getaudio10?filePath=";
    }

    if(item.src.startsWith("4"))
    {
        fileUrl = "https://localhost:8098/api/file/getaudio151?filePath=";
    }
    fileUrl=fileUrl +''+ item.recordingfile;
    
    if(!item.isShow)
    {   
        return  <ReactAudioPlayer
        src={fileUrl}
        onPlay = {() => onPlay(item.id)}
        preload = "none"
        controls
        />;
    }
    return <p></p>
}

const getStatusRecord = (item) => {
        if(item.isCal)  
        {
            return <img className="checkSucess" src ="/checkSucess.png" />
        }
        else 
        {
            return <img className="checkSucess" src ="/checkError.png" />
        }
}

const toHHMMSS = (secs) => {
    if(!isNaN(parseFloat(secs)) && isFinite(secs))
    {
          
    }
    else 
    {
        return  "";
    }
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    var zone  = "America/New_York";

    const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone
    let timeCalText = moment(data.calldate).zone("+7:00");


    if(data.calldate < "2023-06-19T15:07:50")
    {
         timeCalText = moment(data.calldate).zone("+14:00");
    }
    else if(data.calldate > "2023-09-12T00:00:00" && data.calldate < "2023-10-07T00:00:00")
    {
         timeCalText = moment(data.calldate).zone("+14:00");
    } 
    
    var timeCalFull =  timeCalText.format("DD/MM/YYYY HH:mm:ss");

   var  callDateEnd = moment(timeCalText).add(data.duration, 'seconds');

    var dateCall = timeCalText.format("DD/MM/YYYY");
    var hourCallBegin =  timeCalText.format("HH:mm:ss");
    var hourCallEnd =  callDateEnd.format("HH:mm:ss");
    // var  = timeCalText.format("DD/MM/YYYY HH:mm:ss");




    

    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>{dateCall}</td>
            <td>{hourCallBegin} </td>
            <td> {hourCallEnd}</td>
            <td>{toHHMMSS(data.durationReal)}</td>

            <td>{getShowfile(data)}</td>
            <td>{data.src}</td>
            <td>{displayMobilePhone(data.dst)}</td>
            <td>{data.disposition}</td>
            <td>{getStatusRecord(data)}</td>
             <td>{toHHMMSS(data.duration)}</td>

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