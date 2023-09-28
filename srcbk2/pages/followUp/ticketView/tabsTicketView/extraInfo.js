import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import moment from "moment"; 

import { FaTicketAlt } from "react-icons/fa";
const ExtraInfo = ({dataView1, handleInputChange, masterData, dataReason,listUser,saveImpact}) => {

    const dateForPicker = (dateString) => {
         if( dateString == null)
         {
            return null;
         }
        return moment(new Date(dateString)).format('YYYY-MM-DD')
    };

    const [model , setmodel]=useState({
       
    });


    return (
        <>
        
        <Row>
           
            <Col>
                <Form.Label htmlFor="basic-url">Thông tin thêm</Form.Label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={5} name ="extraInfo" onChange={handleInputChange} 
                       value = {dataView1.extraInfo}  />
                </Form.Group>
            </Col>
           
      
           
        </Row>

                <div className="mt-3 text-center">
                            <Button variant="outline-primary" >Lưu thông tin</Button>
                 </div>
        </>
    );
};

export default ExtraInfo;