import { FaEye, FaPen, FaTrashAlt, FaExpandAlt } from "react-icons/fa";
import React, { useState } from "react";
import moment from "moment"; 
const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const getStatusText = (status)=> {
    if(status == '1' )
    {
        return (<p>Đang dùng</p>);
    }
    if(status == '2' )
    {
        return (<p>Line trống</p>);
    }
    if(status == '3' )
    {
        return (<p>Vô hiệu hóa</p>);
    }
    return <p>Hoạt động</p>
}

const getTypeText = (status)=> {
    if(status == '1' )
    {
        return (<p>Dự án</p>);
    }
    if(status == '2' )
    {
        return (<p>Người dùng</p>);
    }
    
    return <p>Chưa xác định</p>
}
const gettypeText = (typeText)=> {
    if(typeText == '1' )
    {
        return (<p>Tất cả</p>);
    }
    if(typeText == '2' )
    {
        return (<p>Dự án</p>);
    }
    if(typeText == '3' )
    {
        return (<p>Id user</p>);
    }
    return <p></p>
}

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById, handleToPageReason }) => {
    rowIndex = rowIndex +1;
    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>{data.name}</td>
            <td>{getTypeText(data.type)}</td>
   
            
            <td>{data.value}</td>
            <td>{data.idUser}</td>
            <td>{getStatusText(data.status)}</td>
          
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