

import React from 'react';
const percentFix3 = (number) => {
        if(!isNaN(parseFloat(number)) && isFinite(number))
        {       
                return number.toFixed(2) +"%";
        }
        return "";
    }
const renderRowData = ({ data,rowIndex }) => {
        rowIndex = rowIndex +1;
        return (
                <tr> 
                        <td><input type="checkbox" name ="selectId" defaultChecked={false} /></td>
                        <td>{rowIndex}</td>
                        <td>{data.sum}</td>
                        <td>{percentFix3(data.percent)}</td>
                        <td>{data.reasonName}</td>
                </tr>
        );
    };
const TableRate = (props) => {


  return (
    <table className="tbl-custom-data" >
        <thead>
                <tr className='headRow'>
                        <th>
                                <input type="checkbox" defaultChecked={false} />
                        </th>
                        <td>STT

                        </td>

                                <td>Tổng

                        </td> 
                                <td>Tỉ lệ(%)

                        </td>
                        <td>Kết quả trạng thái
                                
                        </td>
                        <th>
                                
                        </th>
                </tr>
        </thead>
        <tbody>
        {
                props.dataRaw.data.map((item, index) => {
                   return (

                        <tr> 
                        <td><input type="checkbox" name ="selectId" defaultChecked={false} /></td>
                        <td>{index+1}</td>
                        <td>{item.sum}</td>
                      
                        <td>{percentFix3(item.percent)}</td>
                        <td>{item.reasonName}</td>
                        </tr>
                   )
                 
                })
        }
        </tbody>
        
    </table>
);
};

export default TableRate;