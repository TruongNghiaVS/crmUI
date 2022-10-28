import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";

import { FaEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import moment from "moment"; 
const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const getStatusText = (isActive)=> {
    if(isActive)
    {
        return (<p>Hoạt động</p>);
    }
    return <p>Không hoạt động</p>
}

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    let likUrl = "/follow-up/" + data.id;
    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>{data.customerName}</td>
            <td>{data.noAgreement}</td>
            <td>{data.mobilePhone}</td>
            <td>{data.officeNumber}</td>
            <td>{data.houseNumber}</td>
            <td>{data.otherPhone}</td>
            <td>{data.reasonstatusText}</td>
            <td>{data.statusText}</td>
            <td>{data.assigneeName}</td>
            <td>Admin</td>
            <td>{moment(data.createdTime).format("DD/MM/YYYY")}</td>
      
          
            <td>
               

                <NavLink to={likUrl} target="_blank" >
                    <FaEdit className="icon-edit" />
                </NavLink>
                {/* <FaEye className='icon-tbl' onClick={()=>handleViewById(data.id)} />
                <FaPen className='icon-tbl' onClick={()=>handleUpdateById(data.id)}   />
                <FaTrashAlt onClick={()=>handleDeleteById(data.id)} className='icon-tbl' /> */}
            </td>
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