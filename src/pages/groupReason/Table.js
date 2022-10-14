import { FaEye, FaPen, FaTrashAlt, FaExpandAlt } from "react-icons/fa";
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

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById, handleToPageReason }) => {
    rowIndex = rowIndex +1;
    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>{data.code}</td>
            <td>{data.fullName}</td>
            <td>{data.description}</td>
            <td>{data.statusText}</td>
            <td>{data.folderText}</td>
            <td>{data.companyName}</td>
            <td>{data.authorName}</td>
            <td>{moment(data.createdTime).format("DD/MM/YYYY")}</td>
            <td>{data.updateByName}</td>
            <td>{moment(data.updatedTime).format("DD/MM/YYYY")}</td>
            
            <td>
                <FaEye className='icon-tbl' onClick={()=>handleViewById(data.id)} />
                <FaPen className='icon-tbl' onClick={()=>handleUpdateById(data.id)}/>
                <FaTrashAlt onClick={()=>handleDeleteById(data.id)} className='icon-tbl' />
                <FaExpandAlt className='icon-tbl' onClick={()=>handleToPageReason(data.id)}/>
            </td>
        </tr>
    );
};

const Table = ({ theadData, tbodyData, tblClass,dataDraw, handleDelete,handleUpdateById,handleViewById,handleToPageReason }) => {
    
    
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
                        handleToPageReason = {handleToPageReason}
                        handleUpdateById ={handleUpdateById}/>;
                    })
                }
            </tbody>
        </table>
    );
};

export default Table;