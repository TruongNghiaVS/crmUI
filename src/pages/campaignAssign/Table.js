
import React, { useState } from "react";
import moment from "moment"; 
import { createPortal } from "react-dom";
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';

import { IoAddOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";


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

    var objectModel = {
        sumCounted: data.sumCount,
        key: data.id, 
        id:data.id
    };
    updateDataSelect(objectModel);

    return (
        <RowAssigee rowstt = {rowIndex} dataDraw = {data} updateDataSelect = {updateDataSelect}  />
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