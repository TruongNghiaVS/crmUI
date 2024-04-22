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
       
            <th className='fomatth'>
                Note
            </th>
            <th>
               Code
            </th>
            <th>
               Cuộc gọi thứ
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
                            shortDes += "Ngày hứa:" +  item.promiseday + "\n";
                        }
              
                        shortDes += " " + item.shortDescription;

                        let  orderedCallText = item.orderedCall;
                        if(orderedCallText == null || orderedCallText =="" )
                        {
                            orderedCallText="1";
                        }
                        return (
                            <>  
                                            <tr className={item.colorCode}>
                                            <td >{item.authorName} <br></br>
                                            {moment(item.createAt).format("DD/MM/YYYY HH:mm:ss")} 
                                            
                                            </td>
                                           
                                            <td >
                                            
                                               {shortDes}</td>
                                            <td >{item.statusCode}</td>
                                            <td >{orderedCallText}</td>
                                     
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