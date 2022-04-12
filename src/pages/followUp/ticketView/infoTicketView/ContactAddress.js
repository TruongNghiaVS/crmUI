import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const ContactAddress = () => {
    return (
        <Col>
            <Form.Label htmlFor="basic-url">Địa chỉ Liên lạc</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Đường(chính)</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Quận/Huyện(c)</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Tỉnh/TP(chính)</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Đường(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Quận/Huyện(t)</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Tỉnh/TP(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Đường</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Quận/Huyện</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Tỉnh/TP</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Đã thanh toán</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">DPD</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </Col>
    );
};

export default ContactAddress;