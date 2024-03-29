import { FaEye, FaPen, FaTrashAlt,FaFileImport } from "react-icons/fa";
import { MdAssistantNavigation } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaList } from "react-icons/fa";
import moment from "moment"; 
const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const getStatusText = (dataItem)=> {
    let isActive = dataItem.status;

    let isClose = dataItem.isClose;
    if( isClose == true ||  isClose ==null)
    {
        return <p>Đã đóng</p>;
    }
    else 
    {
        return <p>Đang hoạt động</p>;
    }
    if(isActive)
    {
        return (<p>Hoạt động</p>);
    }
    return <p>Không hoạt động</p>
}

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById,handleimportRow,openAssignee,handleDeleteFie }) => {
    rowIndex = rowIndex +1;
    let likUrl = "/thong-tin-chien-dich/" + data.id;
    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
                    <td>{rowIndex}</td>
                    <td>{data.code}</td>
                   
                    <td>
                 <NavLink to={likUrl} >
                 {data.displayName}
                </NavLink>
            </td>
                    <td>{getStatusText(data)}</td>
                    <td>{data.sumCount}</td>
                    <td>{data.processingCount}</td>
                    <td>{data.closedCount}</td>
                    <td> {data.noSkippCase}</td>
                    <td>{moment(data.beginTime).format("DD/MM/YYYY")}</td>
                    <td>{moment(data.endTime).format("DD/MM/YYYY")}</td>
                    <td>{moment(data.createAt).format("DD/MM/YYYY")}</td>
                    <td>{data.authorName}</td>
          
                    <td>
                      
                        <FaPen className='icon-tbl' onClick={()=>handleUpdateById(data.id)}   />
                        <IoLockClosed onClick={()=>handleDeleteById(data.id)} className='icon-tbl' />
                        <FaFileImport onClick={()=>handleimportRow(data.id)} className='icon-tbl' />
                        <FaList onClick={()=>openAssignee(data.id)} className='icon-tbl'/>
                        <MdDelete onClick={()=>handleDeleteFie(data.id)} className='icon-tbl'/>
                    </td>
        </tr>
    );
};

const Table = ({ theadData, tbodyData, tblClass,dataDraw, handleDelete,handleUpdateById,handleViewById, handleimportRow, openAssignee ,handleDeleteFie}) => {
     
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
                        dataDraw.tbodyDataUser
                        .map((item, index) => {
                                return <TableRow
                                            key={item.id}
                                            data={item}
                                            rowIndex = {index}
                                            handleDeleteById = {handleDelete} 
                                            handleViewById = {handleViewById}
                                            handleUpdateById ={handleUpdateById}
                                            handleimportRow = {handleimportRow}
                                            openAssignee = {openAssignee}
                                            handleDeleteFie = {handleDeleteFie}
                                    />;
                        })
                }
            </tbody>
        </table>
    );
};

export default Table;