import { FaEnvelope, FaPhone, FaSms } from "react-icons/fa";
import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const InfoCustomer = () => {
    return (
        <Col>
            <Form.Label htmlFor="basic-url">Thông tin khách</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Họ tên</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Số hợp đồng</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">CMT/CCCD</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Di động</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Khác</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Số nhà</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Văn phòng</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Khác</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                <InputGroup.Text className="input-group-icon"><FaSms /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text className="input-group-icon"><FaEnvelope /></InputGroup.Text>
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Năm sinh</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </Col>
    );
};

export default InfoCustomer;