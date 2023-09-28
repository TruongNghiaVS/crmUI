import { FaEye, FaPen, FaTrashAlt,FaExpandAlt } from "react-icons/fa";
import React, { useState } from "react";
import { MdAssistantNavigation } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import moment from "moment"; 
const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};


const handleToPageReason = (id)=> {
    window.open("/nhom/"+id);

}
const getStatusText = (isActive)=> {
     if(isActive)
    {
        return (<p>Hoạt động</p>);
    }
    return <p>Không hoạt động</p>
}

const TableRow = ({ data,rowIndex,showpopup,handleDeleteById, handleUpdateById, handleViewById }) => {
    rowIndex = rowIndex +1;
    let likUrl = "/nhom/" + data.id;
    return (
        <tr>
            <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
            <td>{rowIndex}</td>
            <td>  
                         <MdAssistantNavigation onClick={()=>showpopup(data.id)} className='icon-tbl'/>
            </td>
            <td>
              111906040662428
             </td>
             <td>
                 ĐÌNH THỊ DẦN
             </td>
             <td>
                 8/10/1974
             </td>
             <td>
                 001174020484
             </td>
             <td>
                6/4/2019
             </td>
             <td>
              
             </td>
             <td>
             Bill Facilities BF04

            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            31650000
            </td>
            <td>
            41206727 

            </td>

            <td>
                36

            </td>
            <td>
            1,689,000 
  

            </td>
            <td>
            7/4/2019


             </td>
             <td>

             </td>
             <td>
               31
              </td>
              <td>
                
                </td>
                <td>
                146,456 

                </td>
                <td>

                </td>

                <td>12/16/2021 </td>
                <td>

                </td>
                <td> 16,582,848 </td>
                <td>757</td>
                <td>0374166554</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td></td>
                <td>0</td>
                <td>0</td>
                <td>0 </td>
                <td>0 </td>
                <td>0 </td>
                <td>Tự doanh (không có ĐKKD)</td>
                <td>Số ko liên lạc được, ko tồn tại</td>
                <td>////////////////Họ hàng,Họ hàng//NGUYỄN THỊ CHUNG,ĐINH THU THỦY//0943028184,0989917884
                </td>
                <td>2240
                </td>

              
        </tr>
    );
};

const Table = ({ theadData, tbodyData,showpopup, tblClass,dataDraw, handleDelete,handleUpdateById,handleViewById }) => {
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
                        return <TableRow key={item.id} data={item} rowIndex = {index} handleDeleteById = {handleDelete} 
                        handleViewById = {handleViewById}
                        showpopup = {showpopup}
                        handleUpdateById ={handleUpdateById}/>;
                    })
                }
            </tbody>
        </table>
    );
};

export default Table;