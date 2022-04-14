import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const ContactAddress = () => {
    return (
        <Col>
            <Form.Label>Địa chỉ Liên lạc</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường(chính)</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện(c)</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP(chính)</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện(t)</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đã thanh toán</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>DPD</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
        </Col>
    );
};

export default ContactAddress;