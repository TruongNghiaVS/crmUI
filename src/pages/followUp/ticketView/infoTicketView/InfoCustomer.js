import { FaEnvelope, FaPhone, FaSms } from "react-icons/fa";
import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const InfoCustomer = () => {
    return (
        <Col>
            <Form.Label>Thông tin khách</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Họ tên</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số hợp đồng</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>CMT/CCCD</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Di động</InputGroup.Text>
                <FormControl aria-label="Small" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Khác</InputGroup.Text>
                <FormControl aria-label="Small" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số nhà</InputGroup.Text>
                <FormControl aria-label="Small" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Văn phòng</InputGroup.Text>
                <FormControl aria-label="Small" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Khác</InputGroup.Text>
                <FormControl aria-label="Small" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl aria-label="Small" />
                <InputGroup.Text className="input-group-icon"><FaEnvelope /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Năm sinh</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
        </Col>
    );
};

export default InfoCustomer;