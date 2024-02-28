import { Row, Form, InputGroup, Col, FormControl } from 'react-bootstrap';
import moment from "moment"; 
const ImpactHistory = ({data}) => {
    return (
        <>

        <table className='tbl-custom-data'>
              <thead>
              <tr className='headRow'>
               <th>
                Gọi bởi
            </th>
            <th>
               Thời điểm gọi
            </th>
            <th className='fomatth'>
                Note
            </th>
            <th>
               Mã lý do
            </th>
            <th>
               Cuộc gọi thứ
            </th>

            <th>
               Thông tin thêm
            </th>
            </tr>
            </thead>
            <tbody>
       
            {
                data.map((item, i) => {    
                    
                   
                   
                        let shortDes ="";
                        let orderedCall= "1";

                        if(item.moneyPromise )
                        {
                            shortDes += "Số tiền hứa:" + item.moneyPromise + "\n";
                        }
                        
                        if(item.promiseday)
                        {
                            shortDes += "Ngày hứa:" + item.promiseday + "\n";
                        }
              
                        shortDes += "Ghi chú" + item.shortDescription;

                        let  orderedCallText = item.orderedCall;
                        if(orderedCallText == null || orderedCallText =="" )
                        {
                            orderedCallText="1";
                        }
                        return (
                            <>  
                                            <tr className={item.colorCode}>
                                            <td >{item.authorName}</td>
                                            <td >{moment(item.createAt).format("HH:mm:ss DD/MM/YYYY")}</td>
                                            <td >{item.shortDescription}</td>
                                            <td >{item.statusCode}</td>
                                            <td >{orderedCallText}</td>
                                            <td >
                                                    <p className='statusName'>
                                                        { item.statusName }
                                                    </p>
                                                    <textarea  >
                                                        { shortDes }
                                                    </textarea>
                                           </td>
                              </tr>
                          
                            </>
                        );
                    
            
                 })
            }
           

         

            </tbody>
        </table>
        
        </>
    );
};

export default ImpactHistory;