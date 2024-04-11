
import React, { useState } from "react";
import moment from "moment"; 
import { createPortal } from "react-dom";
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';

import { IoAddOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { BsSkipForwardBtnFill} from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import RowAssigee from "./RowAssigee"


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


const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById,handleimportRow, updateDataSelect }) => {


    rowIndex = rowIndex +1;
   
    let colorcode = data.colorCode;
    let likUrl = "";

    if(colorcode =="" || colorcode == null)
    {
        colorcode ="white";
    }
    return (
        <tr className={colorcode}>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>Nguyễn Trường Nghĩa</td>
            <td>1000</td>
            <td>200</td>   
            <td>400</td> 
            <td>400</td> 
            <td>
              
                    <FaEdit onClick={()=>handleimportRow()} className="icon-edit" />
              
             
            </td>
        </tr>
    );
   
};

const Table = ({ theadData, tbodyData, tblClass,dataDraw, handleDelete,handleUpdateById,handleViewById, handleimportRow, updateDataSelect }) => {
     
    return (
        <>
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
                                return  <TableRow
                                            key={item.id}
                                            data={item}
                                            rowIndex = {index}
                                            handleDeleteById = {handleDelete} 
                                            handleViewById = {handleViewById}
                                            handleUpdateById ={handleUpdateById}
                                            handleimportRow = {handleimportRow}
                                            updateDataSelect = {updateDataSelect}
                                         />;
                        })
                }
            </tbody>
        </table>
         </>
    );
};

export default Table;