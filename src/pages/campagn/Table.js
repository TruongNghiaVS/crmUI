import { FaEye, FaPen, FaTrashAlt,FaFileImport } from "react-icons/fa";
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

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById,handleimportRow }) => {
    rowIndex = rowIndex +1;
    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
                    <td>{rowIndex}</td>
                    <td>{data.code}</td>
                    <td>{data.displayName}</td>
                    <td>{getStatusText(data.status)}</td>
                    <td>{data.sumCount}</td>
                    <td>{data.processingCount}</td>
                    <td>{data.closedCount}</td>
                    <td>{moment(data.beginTime).format("DD/MM/YYYY")}</td>
                    <td>{moment(data.endTime).format("DD/MM/YYYY")}</td>
                    <td>{data.authorName}</td>
                    <td>{moment(data.createAt).format("DD/MM/YYYY")}</td>
                    <td>{data.companyId }</td>
                    <td>{data.updateByName} </td>
                    <td>{moment(data.updateAt).format("DD/MM/YYYY")} </td>
                    <td>{data.priority}</td>
                    <td>
                        <FaEye className='icon-tbl' onClick={()=>handleViewById(data.id)} />
                        <FaPen className='icon-tbl' onClick={()=>handleUpdateById(data.id)}   />
                        <FaTrashAlt onClick={()=>handleDeleteById(data.id)} className='icon-tbl' />
                        <FaFileImport onClick={()=>handleimportRow(data.id)} className='icon-tbl' />

                    </td>
        </tr>
    );
};

const Table = ({ theadData, tbodyData, tblClass,dataDraw, handleDelete,handleUpdateById,handleViewById, handleimportRow }) => {
     
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
                                    />;
                        })
                }
            </tbody>
        </table>
    );
};

export default Table;