import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";

import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
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
                <td><input type="checkbox" name ="selectId" defaultChecked={false} /></td>
                <td>{rowIndex}</td>
                <td> 
                     <NavLink to={likUrl} >
                             {data.customerName}
                     </NavLink>
                </td>
                <td>
                     <NavLink to={likUrl} >
                             {data.noAgreement}
                     </NavLink>
                </td>
                <td>{data.phone1}</td>
                <td>{data.officeNumber}</td>
                <td>{ data.houseNumber }</td>
                <td>{ data.other }</td>
                <td>{ data.reasonName }</td>
                <td>{ data.reasonName }</td>
                <td>{ data.authorName }</td>
                <td>{ data.createAt }</td>
                <td>{ data.updateAt }</td>
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
                    })
                }
            </tbody>
        </table>
    );
};

export default Table;