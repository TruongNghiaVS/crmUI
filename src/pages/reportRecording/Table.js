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
        return  numberPhone.substring(0, 3) + 'xxxxxxx';
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
    let fileUrl = "http://118.69.182.32:7777/api/file/getaudio10?filePath=";
    if(item.src.startsWith("1"))
    {
        fileUrl = "http://118.69.182.32:7777/api/file/getaudio10?filePath=";
    }
    if(item.src.startsWith("3"))
    {
        fileUrl = "http://118.69.182.32:7777/api/file/getaudio10?filePath=";
    }

    if(item.src.startsWith("4"))
    {
        fileUrl = "http://118.69.182.32:7777/api/file/getaudio151?filePath=";
    }
    fileUrl=fileUrl +''+ item.recordingfile;
    
    if(!item.isShow)
    {   
        return  <ReactAudioPlayer
        src={fileUrl}
        onPlay = {() => onPlay(item.id)}
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


const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    var zone  = "America/New_York";

    const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone
    let timeCalText = moment(data.calldate).zone("+7:00").format("DD/MM/YYYY HH:mm:ss");
    if(data.calldate < "2023-06-19T15:07:50")
    {
         timeCalText = moment(data.calldate).zone("+14:00").format("DD/MM/YYYY HH:mm:ss");
    }

    

    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>{timeCalText}</td>
            <td>{getShowfile(data)}</td>
            <td>{data.src}</td>
            <td>{displayMobilePhone(data.dst)}</td>
            <td>{data.disposition}</td>
            <td>{getStatusRecord(data)}</td>
            <td>{data.durationReal}</td>
             <td>{data.duration}</td>

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