import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import moment from "moment"; 

import ReactAudioPlayer from 'react-audio-player';
const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const getShowfile = (item)=> {
   
    if(!item.isShow)
    {   
        return  <ReactAudioPlayer
        src="{item.recordingfile}"
        autoPlay
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
            <td>{moment(data.calldate).format("DD/MM/YYYY hh:mm:ss")}</td>
            <td>{getShowfile(data)}</td>
            <td>{data.src}</td>
            <td>{data.dst}</td>
            <td>{data.disposition}</td>
            <td>{data.lastapp}</td>
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
                    return <TableRow key={item.id} data={item} rowIndex = {index} handleDeleteById = {handleDelete} 
                    handleViewById = {handleViewById}
                    handleUpdateById ={handleUpdateById}/>;
                })}
            </tbody>
        </table>
    );
};

export default Table;