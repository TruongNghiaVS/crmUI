

import React from 'react';

const TableRate = (props) => {
    
  return (
    <table className="tbl-custom-data" >
        <thead>
        <tr className='headRow'>
                <th><input type="checkbox" defaultChecked={false} /></th>
                <td>STT</td>
                <td>Tổng</td>
                <td>Tỉ lệ</td>
                <td>Kết quả trạng thái</td>
                <th></th>
            </tr>
        </thead>
        <tbody>
        <tr>
                 <td><input type="checkbox" name ="selectId" defaultChecked={false} /></td>
                <td>1</td>
                <td>1</td>
                <td>16.67%</td>
                <td>NKP - Has signal but not answer - Không nhấc máy, máy bận, gọi vào hộp thư thoại</td>
            
        </tr>


        <tr>
                 <td><input type="checkbox" name ="selectId" defaultChecked={false} /></td>
                <td>2</td>
                <td>1</td>
                <td>16.67%</td>
                <td>PTP - Promise to pay - Hứa thanh toán</td>
            
        </tr>



        <tr>
                 <td><input type="checkbox" name ="selectId" defaultChecked={false} /></td>
                <td>2</td>
                <td>1</td>
                <td>16.67%</td>
                <td>NKP - Has signal but not answer - Không nhấc máy, máy bận, gọi vào hộp thư thoại</td>
            
        </tr>

        <tr>
                 <td><input type="checkbox" name ="selectId" defaultChecked={false} /></td>
                <td>2</td>
                <td>1</td>
                <td>16.67%</td>
                <td>RTP - Refuse to pay - Từ chối thanh toán</td>
            
        </tr>

        <tr>
                 <td><input type="checkbox" name ="selectId" defaultChecked={false} /></td>
                <td>2</td>
                <td>1</td>
                <td>16.67%</td>
                <td>MCW - MCW - Khách hàng bị bệnh, tai nạn</td>
            
        </tr>


        
        <tr>
                 <td><input type="checkbox" name ="selectId" defaultChecked={false} /></td>
                <td>2</td>
                <td>1</td>
                <td>33.33%</td>
                <td>RTP - COV - MCW - Khách hàng bị cách ly dịch COVID</td>
            
        </tr>

        </tbody>
        
    </table>
);
};

export default TableRate;