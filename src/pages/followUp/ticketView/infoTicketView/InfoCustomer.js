import { FaEnvelope, FaPhone, FaSms } from "react-icons/fa";
import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';
import moment from "moment"; 
const InfoCustomer = ({data,handleInputChange}) => {
    const dateForPicker = (dateString) => {
        return moment(new Date(dateString)).format('YYYY-MM-DD')
    };

   
    return (
      
        <Col>
            <Form.Label>Thông tin khách</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text  >Họ tên</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.customerName} 
                 onChange={handleInputChange} 
                 name = "customerName"
                />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số hợp đồng</InputGroup.Text>
                <FormControl aria-label="Small"   value = {data.noAgreement}  name = "noAgreement"   onChange={handleInputChange}  />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>CMT/CCCD</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.natioonalId} name = "natioonalId" onChange={handleInputChange} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Di động</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.mobilePhone}  name = "mobilePhone" onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Khác</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.phone1} name = "phone1" onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số nhà</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.houseNumber} name = "houseNumber" onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Văn phòng</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.officeNumber} name = "officeNumber" onChange={handleInputChange}  />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Khác</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.otherPhone} name = "otherPhone" onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
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
        </Col>
    );
};

export default InfoCustomer;