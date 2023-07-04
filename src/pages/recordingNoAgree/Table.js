import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import moment from "moment-timezone"; 

import ReactAudioPlayer from 'react-audio-player';

const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const onPlay = (e) => {
    
}
const getShowfile =  (item)=> {
    // return item.recordingfile;
    let fileUrl = "http://192.168.1.2:8888/api/file/getaudio12?filePath=";
    if(item.src.startsWith("1"))
    {
        fileUrl = "http://192.168.1.2:8888/api/file/getaudio10?filePath=";
    }
    if(item.src.startsWith("3"))
    {
        fileUrl = "http://192.168.1.2:8888/api/file/getaudio09?filePath=";
    }

    if(item.src.startsWith("4"))
    {
        fileUrl = "http://192.168.1.2:8888/api/file/getaudio151?filePath=";
    }
    fileUrl=fileUrl +''+ item.recordingfile;
    
    if(!item.isShow)
    {   
        return  <ReactAudioPlayer
        src={fileUrl}
        onPlay = {onPlay}
        controls
        />;
    }
    return <p></p>
}

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    var zone  = "America/New_York";

    const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone


    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>{moment(data.calldate).zone("+14:00").format("DD/MM/YYYY HH:mm:ss")}</td>
            <td>{getShowfile(data)}</td>
            <td>{data.src}</td>
            <td>{data.dst}</td>
            <td>{data.disposition}</td>
            <td>{data.lastapp}</td>
            <td>{data.durationReal}</td>
             <td>{data.duration}</td>

             <td>{data.noAgree}</td>
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