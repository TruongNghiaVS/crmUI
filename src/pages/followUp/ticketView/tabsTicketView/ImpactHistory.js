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
                        return (
                            <>  
                                    <tr>
                                            <td >Nghiêm Song Cẩm Lợi</td>
                                            <td >{moment(item.createAt).format("DD/MM/YYYY")}</td>
                                            <td >
                                            <p className='statusName'>
                                                { item.statusName }
                                            </p>
                    
                                                <textarea >
                                                { item.shortDescription }
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