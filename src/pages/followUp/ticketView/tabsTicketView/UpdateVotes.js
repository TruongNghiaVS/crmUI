import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import moment from "moment"; 

import { FaTicketAlt } from "react-icons/fa";
const UpdateVotes = ({dataView1, handleInputChange, masterData, dataReason,listUser,saveImpact}) => {

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
                <Form.Label htmlFor="basic-url">Tác động</Form.Label>
               
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Tình trạng</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="statusIm" value ={dataView1.statusIm}    onChange={handleInputChange}  >
                    
                    <option value = "-1" selected>Chọn lý do</option>
                    {
                              dataReason.data.map((item, i) => {    
                              
                                    return ( <>
                                        <option value = {item.id}>{item.displayName}</option>
   
                                   </>)
                              
                       
                        })
                        }
                
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Ngày hứa</InputGroup.Text>
                    <FormControl 
                        name = "promiseday"
                        type="date"
                        aria-label="Small"  value ={dateForPicker(dataView1.promiseday)}   onChange={handleInputChange} />
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Tiền hứa</InputGroup.Text>
                    <FormControl   onChange={handleInputChange}   name ="moneyPromise" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value ={dataView1.moneyPromise} />
                </InputGroup>
            </Col>
            <Col>
                <Form.Label htmlFor="basic-url">Ghi chú</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={5}  name ="noteIm" onChange={handleInputChange} 
                       value = {dataView1.noteIm}  />
                </Form.Group>
            </Col>
            <Col>
                <Form.Label htmlFor="basic-url">Hẹn theo dõi</Form.Label>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Hẹn</InputGroup.Text>
                    <FormControl 
                        name = "daysuggestTime"
                        type="date"
                        aria-label="Small"    onChange={handleInputChange}   value ={dateForPicker(dataView1.daysuggestTime)}/>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Theo dõi</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name = "statusFollow"  
                    
                    onChange={handleInputChange}  value = {dataView1.statusFollow}>
                         <option  value="15" selected >Theo dõi</option>
                     
                        <option value="16">Đóng</option>
                       
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Mối quan hệ</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="relationship" 
                      onChange={handleInputChange} 
                       value ={dataView1.relationship} >

                    <option value = "-1" selected>Chọn mối quan hệ</option>
                                {
                                masterData.data.map((item, i) => {    
                                        if( item.type == "1")
                                        {
                                            return ( <>
                                                <option value = {item.id}>{item.name}</option>
           
                                           </>)
                                        }
                               
                                })
                            }
                       
                    </Form.Select>
                </InputGroup>
            </Col>
      
           
        </Row>

                <div className="mt-3 text-center">
                            <Button variant="outline-primary" onClick={saveImpact}>Lưu tác động</Button>
                 </div>
        </>
    );
};

export default UpdateVotes;