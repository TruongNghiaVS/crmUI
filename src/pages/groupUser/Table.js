import { FaEye, FaPen, FaTrashAlt,FaExpandAlt } from "react-icons/fa";
import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
import moment from "moment"; 
const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};


const handleToPageReason = (id)=> {
    window.open("/nhom/"+id);

}
const getStatusText = (isActive)=> {
     if(isActive)
    {
        return (<p>Hoạt động</p>);
    }
    return <p>Không hoạt động</p>
}

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    let likUrl = "/nhom/" + data.id;
    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>
                <NavLink to={likUrl} >
                 {data.name}
                </NavLink>
            </td>
            <td>
                {data.code}
            
            </td>
            <td>{data.managementName}</td>
            <td>{moment(data.create_At).format("DD/MM/YYYY")}</td>
             <td>{data.authorName}</td>
            <td>{getStatusText(data.isActive)}</td>
            <td>
                <FaEye className='icon-tbl' onClick={()=>handleViewById(data.id)} />
                <FaPen className='icon-tbl' onClick={()=>handleUpdateById(data.id)}   />
                <FaTrashAlt onClick={()=>handleDeleteById(data.id)} className='icon-tbl' />
                <FaExpandAlt className='icon-tbl' onClick={()=>handleToPageReason(data.id)}/>
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
                        })
                    }
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