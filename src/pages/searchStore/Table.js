
import React, { useState } from "react";
import moment from "moment"; 



const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const dateForPicker = (dateString) => {
    return moment(new Date(dateString)).format('YYYY-MM-DD');

};

function numberWithCommas(x) {

    if(x =='' || x == null)
    {
        return '';
    }
    return x.toLocaleString();
}

const RenderData = ({ data }) => {
let displayDate =  data.createAt;
if(data.createAt < data.updateAt )
{
       displayDate = data.updateAt;
}
    return (
             <div className="dataShow"> 
              <div className="tableInfo">
              
              <div className="rowTable1">
                     <p> Họ và tên: </p>
                     <p>  {data.customerName} </p>
              </div>
              <div className="rowTable1">
                     <p> Số HĐ: </p>
                     <p>  {data.noAgreement} </p>
              </div>
              <div className="rowTable1">
                     <p> Số điện thoại: </p>
                     <p>  {data.mobilePhone} </p>
              </div>
              <div className="rowTable1">
                     <p> CCCD: </p>
                     <p>  {data.nationalId} </p>
              </div>
              <div className="rowTable1">
                     <p> Sản phẩm: </p>
                     <p>  {data.nameProduct} </p>
              </div>

              <div className="rowTable1">
                     <p> DPD: </p>
                     <p>  {data.dpd} </p>
              </div>
             
              <div className="rowTable1">
                     <p> Kỳ hạn TT: </p>
                     <p>  {data.tenure} </p>
              </div>

            
              <div className="rowTable1">
                     <p> Cập nhật lần cuối: </p>
                     <p> {moment(displayDate).format("DD/MM/YYYY hh:mm")} </p>
              </div>
          </div>
           <div className="tableInfo">
           <div className="rowTable1">
                     <p> Số tiền vay: </p>
                     <p>  {numberWithCommas(data.amountLoan)} </p>
              </div>
        
              <div className="rowTable1">
                     <p> Tổng phạt: </p>
                     <p>  {numberWithCommas(data.totalFines)} </p>
              </div>

              <div className="rowTable1">
                     <p> Trả hàng tháng: </p>
                     <p>  {numberWithCommas(data.emi)} </p>
              </div>
              <div className="rowTable1">
                     <p> Tổng phải trả: </p>
                     <p>  {numberWithCommas(data.totalMoneyPaid)} </p>
              </div>
        
              <div className="rowTable1">
                     <p> Số kỳ đã TT: </p>
                     <p>  {data.noTenure} </p>
              </div>
              <div className="rowTable1">
                     <p> Tổng đã TT: </p>
                     <p>  {numberWithCommas(data.totalPaid)} </p>
              </div>
              <div className="rowTable1">
                     <p> TT gần nhất: </p>
                     <p>  {numberWithCommas(data.lastPaid)} </p>
              </div>
          
              <div className="rowTable1">
                     <p> Ngày TT: </p>
                     <p>  {dateForPicker(data.lastPadDay)} </p>
              </div>
           <div className="rowTable1">
                     <p> Ghi chú TC: </p>
                     <p> {data.noteRel}</p>
                 
              </div>


            

             

         
           </div>
             
             </div> 


    );

    
};

const Table = ({ data, theadData  }) => {
    return (
        <RenderData  data={data}  />
    );
};

export default Table;