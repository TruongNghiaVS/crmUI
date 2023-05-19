import { 
    FaUser, FaAt, FaLock, FaBuilding,FaSms, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';

import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import SmsService from '../../../../services/SmsService';
import Swal from 'sweetalert2';

const PopupSms = (props) => {
    
    const [model , setmodel]=useState({
        "PhoneNumber": props.modelsms.PhoneNumber,
        "ContentSms":""


    });

    const handleInputChange =(event)=> {
       
        let valueControl = event.target.value;
        let nameControl = event.target.name;
        setmodel((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: valueControl
            }
         })
     }


     const closeSms =(valueCall)=> {
        props.handleShowModel();
    }

    const sendSms =(valueCall)=> {
        

         const {PhoneNumber,ContentSms,NoAgree}  = model;
           let PhoneLog = PhoneNumber;
        
       
        if(PhoneLog.length <10)
        {
             Swal.fire({
                 icon: 'error',
                 title: 'Không có số điện thoại',
                 text: 'Không có số điện thoại',
                 footer: 'Yêu cầu thông tin!'
             })
             return;
        }

        if(ContentSms.length<1)
        {
            Swal.fire({
                icon: 'error',
                title: 'Ràng buộc nhập',
                text: 'Chưa nhập nội dung tin nhắn',
                footer: 'Yêu cầu thông tin!'
            })
            return;

        }
  
 
        let bodySearch = {
                    PhoneNumber: PhoneNumber,
                    ContentSms: ContentSms,

                 NoAgree: props.modelsms.NoAgree,
         
                profileId: window.location.pathname.split("/").pop()
        
        };
     
     
          
     SmsService.sendSms( bodySearch, (response) => {
         if (response.statusCode === 200) {
                   
             Swal.fire({
                 title: 'Thực hiện nhắn tin thành công',
                 width: 600,
                 timer: 3000,
                 showConfirmButton: false,
                 padding: '3em',
                 color: '#716add',
                 background: '#fff',
                 backdrop: `
                   rgba(0,0,123,0.4)
                   left top
                   no-repeat
                 `
               });
         } else{
             Swal.fire({
                 icon: 'error',
                 title: 'Có lỗi xảy ra',
                 text: 'Không gọi được!',
                 footer: 'Liên hệ IT hỗ trợ'
               })
         }
         }, (error) => {
 
 
             Swal.fire({
                 icon: 'error',
                 title: 'Có lỗi xảy ra',
                 text: 'Không gọi được!',
                 footer: 'Liên hệ IT hỗ trợ'
               })
         
         });
     }

    return (
        <div className="model">
            <div className="header-model">
                        <h4>Nhắn tin</h4>
            </div>

            <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate >
                  
           
                <Form.Label>Số điện thoại</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                        <FormControl  onChange={handleInputChange}  aria-label="Small" aria-describedby="inputGroup-sizing-sm" value ={model.PhoneNumber}  name = "PhoneNumber"
                         
                            required />
                    </InputGroup>

                    <Form.Label>Nội dung tin nhắn</Form.Label>
                    <InputGroup className="mb-2">
                      
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control onChange={handleInputChange} value = {model.ContentSms}  as="textarea" rows={5} cols ={100} name ="ContentSms" 
                                 
                                    />
                        </Form.Group>
                    </InputGroup>
             </form>
            </div>

            <div className="footer-model">
                  <button className="btn-model btn-add" onClick= {sendSms}>Gửi tin nhắn</button> 
                  <button className="btn-model btn-add" onClick= {closeSms}>Đóng</button> 
            </div>
        </div>
    );
};

export default PopupSms;