import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import moment from "moment-timezone"; 

import ReactAudioPlayer from 'react-audio-player';

const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};
const renderStatus =  (item)=> {
   if( item == "0")
   {
    return <p> Đang chờ xử lý </p>
   }
    return <p></p>
}

const rendernetword = (item) => {

    if(item == "2")
    {
        return <p>Viettel </p>
    }
    else if(item == "1")
    {
        return  <p>Vina</p>
    }
    else  if(item =="4")
    {
        return <p> Mobi</p>
    }
    else 
    {
        return <p> Khác</p>
    }
}

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    var zone  = "America/New_York";

    const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone


    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
           
            <td>{moment(data.timeBuisiness).format("DD/MM/YYYY HH:mm:ss")}</td>

            <td>{data.lineCode}</td>
            <td>{data.phone}</td>
            <td>{data.profileId}</td>
            <td>{data.content}</td>
            <td>{renderStatus(data.status)}</td>
            <td>{rendernetword(data.netword)}</td>
       
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