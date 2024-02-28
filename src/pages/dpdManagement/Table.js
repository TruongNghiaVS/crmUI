import { FaEye, FaPen, FaTrashAlt, FaExpandAlt } from "react-icons/fa";
import React, { useState } from "react";
import moment from "moment"; 
const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const getStatusText = (status)=> {
    if(status == '0' )
    {
        return (<p>đang dùng</p>);
    }
    if(status == '1' )
    {
        return (<p>Không hoạt động</p>);
    }
    if(status == '2' )
    {
        return (<p>Vô hiệu hóa</p>);
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

            <td>{data.min}</td>
            <td>{data.max}</td>
            <td>{getStatusText(data.status)}</td>

            <td>{moment(data.createAt).format("DD/MM/YYYY")}</td>
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
                        return <TableRow key={item.id} data={item} 
                        rowIndex = {index} handleDeleteById = {handleDelete} 
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