import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import moment from "moment"; 

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

const getShowfile = (item)=> {
    // return item.recordingfile;
    let fileUrl = "http://192.168.1.12:3002/api/getFileAudio?filePath=";
    fileUrl=fileUrl +''+ item.recordingfile;
    console.log(fileUrl);
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
    console.log(data);
    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>{data.lineCode}</td>
            <td></td>
            <td>{data.sumAn+ data.sumNOAswer+ data.sumNOCancel + data.sumNoBussy +data.sumNoFail }</td>
            <td>{data.perPercent}</td>
            <td>{toHHMMSS(data.timCall)}</td>
            <td>{toHHMMSS(data.timeWaiting)}</td>
            <td>{toHHMMSS(data.timeTalking)}</td>
            <td>{data.sumAn}</td>
            <td>{data.sumNOAswer}</td>
            <td>{data.sumNOCancel}</td>
            <td>{data.sumNoBussy}</td>
            <td>{data.sumNOChanel}</td>
            <td>{data.sumNoFail}</td>
            <td>{data.sumNOServe}</td>
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