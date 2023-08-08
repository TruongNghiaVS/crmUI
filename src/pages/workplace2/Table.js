import { FaEye, FaPen, FaTrashAlt,FaFileImport } from "react-icons/fa";
// import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { BsSkipForwardBtnFill} from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import moment from "moment"; 
import Swal from 'sweetalert2';
import { MdAssistantNavigation } from "react-icons/md";
import CampagnProfileService from '../../services/CampagnProfileService';
const TableHeadItem = ({ item }) => {
    return (
        <th className="colorTableExcel" title={item}>{item}</th>
    );
};
const openDetailItem = (likUrl) => {
    return;
    window.open(likUrl,"_self")

} 

const displayMobilePhone = (numberPhone) => 
{   
    if(numberPhone)
    {
        if(numberPhone.length <7)
        {
            return "";
        }
        return  numberPhone.substring(0, 3) + 'xxxxxxx';
    }
    return "";

}
const dateForPicker = (dateString) => {
    return moment(new Date(dateString)).format('YYYY-MM-DD');
};
const skipTask = (id)=> {

    Swal.fire({
        title: 'Bạn có chắc1 muốn  giữ case',
        text: "Bạn có chắc muốn  giữ case",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý!'
    })
    .then((result) => {
            if (result.isConfirmed) {
            
                    const modelUpdate = {

                    };
                    modelUpdate.id = id;
                    modelUpdate.resetCase = false;
                    modelUpdate.skipp = true;
                    CampagnProfileService.handleCase(
                        modelUpdate,
                        handleSucessUpdateHandleCase, 
                        handleErrUpdate
                    );
                }
    })

}
const handleErrUpdate = (data) => {



}

const handleSucessUpdateHandleCase = (data) => {
    if(data.statusCode == 200)
   {
           Swal.fire({
               
               icon: 'success',
               title: 'Giữ case thành công',
               showConfirmButton: true,
               
           })
            // props.handleUpdate(model);  
   }
   else 
   {

       Swal.fire({
           icon: 'error',
           title: 'lưu thất bại',
           text: 'Thao tác thất bại',
         
         })
   }
}

const getStatusText = (status)=> {
    if(status==0)
    {
      
        return (<p>Mới phân</p>);
    }
    else if(status==10)
    {
        return (<p>Mới import</p>);
    }
    else if(status==20)
    {
        return (<p>Thu case</p>);
    }
    else 
    {
        return (<p>Đang xử lý</p>);
    }
    
}

const getCaseSkip = (flag)=> {
    if(flag)
    {
      return <p>Có</p>
    }
    return <p></p>
}

const TableRow = ({ data,idPass, rowIndex,handleDeleteById,showpopup, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    let likUrl = "/follow-up/" + data.id;
    let colorcode = data.colorCode;

    if(colorcode =="" || colorcode == null)
    {
        colorcode ="white";
    }
    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>  
                <FaPen onClick={()=>showpopup(data.id)} className='icon-tbl'/>
            </td>
         
            <td>{data.noAgreement}</td>
            <td>{data.customerName}</td>
            <td>{dateForPicker(data.dayOfBirth)}</td>
            <td>{dateForPicker(data.registerDay)}</td>
            <td>{data.codeProduct}</td>
            <td>{data.nameProduct}</td>
            
            <td>{data.amountLoan}</td>
            <td>{data.totalMoneyPaid}</td>
            <td>{data.tenure}</td>
            <td>{data.emi}</td>
            <td>{data.fristDay}</td>
            <td>{data.lastDay}</td>

            <td>{data.noTenure}</td>
            <td>{data.totalFines}</td>
            <td></td>
            <td></td>
            <td>{data.lastPadDay}</td>
            <td>{data.totalPaid}</td>
            
            <td>{data.debitOriginal}</td>
            <td>{data.dpd}</td>
            <td>{data.mobilePhone}</td>
           
            <td>{data.road}</td>
            <td>{data.suburbanDir}</td>
            <td>{data.provice}</td>
            <td>{data.road1}</td>
            <td>{data.suburbanDir1}</td>
            <td>{data.provice1}</td>
            <td></td>
            <td>{data.noteFirstTime}</td>
            <td>{data.noteRel}</td>
            <td>{data.assignee}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    );
};

const Table = ({ theadData, idData,  tbodyData, showpopup, tblClass,dataDraw, handleDelete,handleUpdateById,handleViewById }) => {
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
                        return <TableRow  idPass= {idData} key={item.id} data={item} showpopup = {showpopup} rowIndex = {index} handleDeleteById = {handleDelete} 
                        handleViewById = {handleViewById}
                     
                        handleUpdateById ={handleUpdateById}/>;
                    })
                }
            </tbody>
        </table>
    );
};

export default Table;