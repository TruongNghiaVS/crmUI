import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaSms } from "react-icons/fa";
import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';
import ProcessingCall from '../../../../services/ProcessingCall';
import Model from "../../../../components/model/Model";
import PopupSms from './PopupSms';
import { SimpleUser, SimpleUserOptions } from "sip.js/lib/platform/web";
import moment from "moment";
import Swal from 'sweetalert2';
import { mode } from "crypto-js";
// var ami = new require('asterisk-manager')('5038','127.0.0.1','admin','BdqYzZCXXOHB', true);

// const process = require('process'); 

const displayMobilePhone = (numberPhone) => 
{   
    if(numberPhone)
    {
        if(numberPhone.length <7)
        {
            return "";
        }
        return  numberPhone.substring(0, 3) + 'xxxxxxx';
    }
    return "";

}
const InfoCustomer = ({data,handleInputChange}) => {
    const dateForPicker = (dateString) => {
        return moment(new Date(dateString)).format('YYYY-MM-DD');
    };

    const [isOpenModel, setIsOpenModel] = useState(false);
    const [modelsms , setModelsms]=useState({
        "PhoneNumber":"",
        "ContentSms":"",
        "NoAgree": ""


    });
    const handleShowModel = ()=> {
         setIsOpenModel(!isOpenModel);
    }
    const callToline1 =(valueCall)=> {


        // let inputValue = e.target.parentElement.parentElement.getElementsByTagName("input");
        let PhoneLog = valueCall;
  
        if(PhoneLog.length <1)
        {
             Swal.fire({
                 icon: 'error',
                 title: 'Không có số điện thoại',
                 text: 'Không có số điện thoại',
                 footer: 'Yêu cầu thông tin!'
             })
             return;
        }
         let NoAgree =  data.noAgreement;
 
         let bodySearch = {
             phoneNumber: PhoneLog, 
             noAgree:  NoAgree, 
             profileId: window.location.pathname.split("/").pop()
            
          };
     
     
          
     ProcessingCall.MakeCall( bodySearch, (response) => {
         if (response.statusCode === 200) {
                   
             Swal.fire({
                 title: 'Đang thực hiện gọi. Đang chuyển phần mềm gọi',
                 width: 600,
                 timer: 4000,
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
  
     const smsToMessage =(valueCall)=> {


        // let inputValue = e.target.parentElement.parentElement.getElementsByTagName("input");
        let PhoneLog = valueCall;
  
   
        if(PhoneLog.length <1)
        {
             Swal.fire({
                 icon: 'error',
                 title: 'Không có số điện thoại',
                 text: 'Không có số điện thoại',
                 footer: 'Yêu cầu thông tin!'
             })
             return;
        }
        
        let PhoneNumber = valueCall;
        let NoAgree =data.noAgreement;
   
        
        setModelsms((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              "PhoneNumber": PhoneNumber,
              "NoAgree":  NoAgree
              
            }
         })
         setIsOpenModel(true);
     }
     return (
         <Col>
            <Form.Label>Thông tin khách</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text  >Họ tên</InputGroup.Text>
                <FormControl
                  aria-label="Small" value = {data.customerName} 
                 onChange={handleInputChange} 
                 name = "customerName"
                />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số hợp đồng</InputGroup.Text>
                <FormControl aria-label="Small" readOnly value = {data.noAgreement}  name = "noAgreement"   onChange={handleInputChange}  />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>CMT/CCCD</InputGroup.Text>
                <FormControl aria-label="Small" readOnly value = {data.nationalId} name = "nationalId" onChange={handleInputChange} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Di động</InputGroup.Text>
                <FormControl aria-label="Small" value =  {displayMobilePhone(data.mobilePhone)}  name = "mobilePhone" />
                <InputGroup.Text className="input-group-icon"><FaPhone  onClick  = {(e)=>callToline1(data.mobilePhone)}/></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms  onClick  = {(e)=>smsToMessage(data.mobilePhone)}/></InputGroup.Text>
                
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Khác</InputGroup.Text>
                <FormControl aria-label="Small" value = {displayMobilePhone(data.phone1)}   name = "phone1"  />
                <InputGroup.Text className="input-group-icon"><FaPhone  onClick  = {(e)=>callToline1(data.phone1)}/></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms  onClick  = {(e)=>smsToMessage(data.phone1)}/></InputGroup.Text>
                
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số nhà</InputGroup.Text>
                <FormControl aria-label="Small" value = {displayMobilePhone(data.houseNumber)}  name = "houseNumber"  />
                <InputGroup.Text className="input-group-icon"><FaPhone onClick  = {(e)=>callToline1(data.houseNumber)} /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms  onClick  = {(e)=>smsToMessage(data.houseNumber)}/></InputGroup.Text>
                
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Văn phòng</InputGroup.Text>
                <FormControl aria-label="Small" value = {displayMobilePhone(data.officeNumber)}   name = "officeNumber"    />
                <InputGroup.Text className="input-group-icon"><FaPhone onClick  = {(e)=>callToline1(data.officeNumber)} /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms  onClick  = {(e)=>smsToMessage(data.officeNumber)}/></InputGroup.Text>
                
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Khác</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.otherPhone} name = "otherPhone"  onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaPhone  onClick  = {(e)=>callToline1(data.otherPhone)} /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms  onClick  = {(e)=>smsToMessage(data.otherPhone)}/></InputGroup.Text>
                
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.email} name = "email"  onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaEnvelope /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text >Năm sinh </InputGroup.Text>
                <FormControl 
                name = "dayOfBirth"
                type="date"
                aria-label="Small"  value ={dateForPicker(data.dayOfBirth)} onChange={handleInputChange} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text >Trạng thái hồ sơ </InputGroup.Text>
                <FormControl aria-label="Small" readOnly value = {data.statusProfile}   />
            </InputGroup>

            { isOpenModel && <Model handleClose ={handleShowModel}  content={<PopupSms handleShowModel ={handleShowModel}  modelsms = {modelsms} />} /> }

        </Col>
    );
};

export default InfoCustomer;