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

const getLastUpdate = (item) => 
{   let itemDay =  item.createAt;
    if(item.UpdateAt >= item.createAt)
    {
        itemDay  =  item.UpdateAt;
    }
    let dataDisplayText= moment(itemDay).format("DD/MM/YYYY");
    return dataDisplayText;
    

}
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
      
        return ("Mới phân");
    }
    else if(status==10)
    {
        return ("Mới import");
    }
    else if(status==20)
    {
        return ("Thu case");
    }
    else 
    {
        return ("Đang xử lý");
    }
    
}

const getCaseSkip = (flag)=> {
    if(flag)
    {
      return <p>Có</p>
    }
    return <p></p>
}

const TableRow = ({ data,rowIndex,handleDeleteById, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    let likUrl = "/follow-up/" + data.id;
    let colorcode = data.colorCode;

    if(colorcode =="" || colorcode == null)
    {
        colorcode ="white";
    }
    return (
        <tr onClick={()=>openDetailItem(likUrl)} className={colorcode}>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>
                 <NavLink to={likUrl} target="_self"  >
                 {data.customerName}
                </NavLink>
            </td>

            <td>
                 <NavLink to={likUrl}  target="_self" >
                 {data.noAgreement}
                </NavLink>
            </td>
            <td>{data.dpd}</td>
            
            <td>
                 <NavLink to={likUrl} target="_self" >
                 {displayMobilePhone(data.mobilePhone)}
                </NavLink>
            </td>

        
            <td> 
                 <p> Trạng thái: {getStatusText(data.status)}</p>
                 { (data.reasonstatusText != null &&  data.reasonstatusText != '')
                  ? <p> Trạng thái gọi:  {data.reasonstatusText}</p> 
                : <></>
      }
               
            </td>
       
            <td>{data.assigneeName}</td>
            <td>{data.authorName}</td>
       
            <td> { getLastUpdate(data)}</td>
            <td>
                 <NavLink to={likUrl} target="_self" >
                    <FaEdit className="icon-edit" />
                </NavLink>
             
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
                    })}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                
                dataDraw.tbodyDataUser.map((item, index) => {
                    return <TableRow key={item.id} data={item} rowIndex = {index} handleDeleteById = {handleDelete} 
                    handleViewById = {handleViewById}
                    handleUpdateById ={handleUpdateById}/>;
                })}
            </tbody>
        </table>
    );
};

export default Table;