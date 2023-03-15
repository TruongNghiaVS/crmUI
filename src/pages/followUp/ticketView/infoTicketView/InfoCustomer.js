import { FaEnvelope, FaPhone, FaSms } from "react-icons/fa";
import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';
import ProcessingCall from '../../../../services/ProcessingCall';
import { SimpleUser, SimpleUserOptions } from "sip.js/lib/platform/web";
import moment from "moment";
import Swal from 'sweetalert2';
// var ami = new require('asterisk-manager')('5038','127.0.0.1','admin','BdqYzZCXXOHB', true);

// const process = require('process'); 

const InfoCustomer = ({data,handleInputChange}) => {
    const dateForPicker = (dateString) => {
        return moment(new Date(dateString)).format('YYYY-MM-DD');
    };

    const callToline =(e)=> {

       let inputValue = e.target.parentElement.parentElement.getElementsByTagName("input");
       let PhoneLog = "";
       if(inputValue.length >0)
       {
          PhoneLog = inputValue[0].value;
       }
    
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
                <FormControl aria-label="Small" value = {data.mobilePhone}  name = "mobilePhone" onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaPhone  onClick  = {(e)=>callToline(e)}/></InputGroup.Text>
                
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Khác</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.phone1} name = "phone1" onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaPhone  onClick  = {(e)=>callToline(e)}/></InputGroup.Text>
                
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số nhà</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.houseNumber} name = "houseNumber" onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaPhone onClick  = {(e)=>callToline(e)} /></InputGroup.Text>
                
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Văn phòng</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.officeNumber} name = "officeNumber" onChange={handleInputChange}  />
                <InputGroup.Text className="input-group-icon"><FaPhone onClick  = {(e)=>callToline(e)} /></InputGroup.Text>
                
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Khác</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.otherPhone} name = "otherPhone" onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaPhone  onClick  = {(e)=>callToline(e)} /></InputGroup.Text>
                
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
        </Col>
    );
};

export default InfoCustomer;