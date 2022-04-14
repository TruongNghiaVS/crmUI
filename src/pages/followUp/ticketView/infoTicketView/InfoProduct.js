import {Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const InfoProduct = () => {
    return (
        <Col>
            <Form.Label>Thông tin sản phẩm</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tên hàng</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Code</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Giá</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <Form.Group className="mt-3">
                <Form.Label>Ghi chú ban đầu</Form.Label>
                <Form.Control as="textarea" rows={8} />
            </Form.Group>
        </Col>
    );
};

export default InfoProduct;