import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { BsSkipForwardBtnFill} from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import moment from "moment"; 
import Swal from 'sweetalert2';
import CampagnProfileService from '../../services/CampagnProfileService';
const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};
const TableRow = ({ data }) => {
    return (
        <tr  >
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
             <td>
            {data.customerName}
            </td>

            <td>
            {data.nationalId}
            </td>

            <td>
            {data.noAgreement}
            </td>
            <td>{data.dpd}</td>
            
            <td>
                {data.mobilePhone}
            </td>
            <td>{moment(data.createAt).format("DD/MM/YYYY")}</td>
            <td>{moment(data.createAt).format("DD/MM/YYYY")}</td>
           
        </tr>
    );
};

const Table = ({ data, theadData  }) => {
    return (
        <table className='tbl-custom-data'>
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
                  <TableRow  data={data}  />
                
                }
            </tbody>
        </table>
    );
};

export default Table;