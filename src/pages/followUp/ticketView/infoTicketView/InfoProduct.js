import {Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const InfoProduct = ({data, handleInputChange}) => {

    return (
        <Col>
            <Form.Label>Thông tin sản phẩm</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tên hàng</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.nameProduct} onChange={handleInputChange}   />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Code</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.codeProduct} onChange={handleInputChange}  />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Giá</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.priceProduct} onChange={handleInputChange}  />
            </InputGroup>
            <Form.Group className="mt-3">
                <Form.Label>Ghi chú ban đầu</Form.Label>
                <Form.Control as="textarea" rows={8} value ={data.noteFirstTime} onChange={handleInputChange}  />
            </Form.Group>
        </Col>
    );
};

export default InfoProduct;