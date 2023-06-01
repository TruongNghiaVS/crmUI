import { Row, Form, InputGroup, Col, FormControl } from 'react-bootstrap';
import moment from "moment"; 
const ImpactHistory = ({data}) => {
    return (
        <>

<table className='tbl-custom-data'>
          
            <tbody>

            {
                data.map((item, i) => {    
                    
                    {
                        let shortDes ="";
                        if(item.moneyPromise )
                        {
                            shortDes += "Số tiền hứa:" + item.moneyPromise + "\n";
                        }
                        
                        if(item.promiseday)
                        {
                            shortDes += "Ngày hứa:" + item.promiseday + "\n";
                        }
              
                        shortDes += "Ghi chú" + item.shortDescription;
                        return (
                            <>  
                            <tr className={item.colorCode}>
                                            <td >{item.authorName}</td>
                                            <td >{moment(item.createAt).format("DD/MM/YYYY")}</td>
                                            <td >{item.shortDescription}</td>
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
                    }
            
                 })
            }
           

         

            </tbody>
        </table>
        
        </>
    );
};

export default ImpactHistory;