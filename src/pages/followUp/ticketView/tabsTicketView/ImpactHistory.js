import { Row, Form, InputGroup, Col, FormControl } from 'react-bootstrap';

const ImpactHistory = () => {
    return (
        <Row>
            <Col>
                <Form.Label htmlFor="basic-url">Thông tin sản phẩm</Form.Label>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Tên hàng</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Code</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Giá</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ghi chú ban đầu</Form.Label>
                    <Form.Control as="textarea" rows={8} />
                </Form.Group>
            </Col>
        </Row>
    );
};

export default ImpactHistory;