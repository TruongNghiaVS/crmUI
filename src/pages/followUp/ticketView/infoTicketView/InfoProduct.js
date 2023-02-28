import {Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const InfoProduct = ({data, handleInputChange}) => {

    return (
        <Col>
            <Form.Label>Thông tin sản phẩm</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tên hàng</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.nameProduct} name ="nameProduct"  onChange={handleInputChange}   />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Code</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.codeProduct} name ="codeProduct" onChange={handleInputChange}  />
            </InputGroup> 
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Giá</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.priceProduct} name ="priceProduct"  onChange={handleInputChange}  />
            </InputGroup>
            <Form.Group className="mt-3">
                <Form.Label>Ghi chú ban đầu</Form.Label>
                <Form.Control as="textarea" rows={8} value ={data.noteFirstTime} name ="noteFirstTime"   onChange={handleInputChange}  />
            </Form.Group>

            <Form.Group className="mt-3">
                <Form.Label>Ghi chú tham chiếu</Form.Label>
                <Form.Control as="textarea" rows={7} value ={data.noteRel} name ="noteRel"   onChange={handleInputChange}  />
            </Form.Group>
        </Col>
    );
};

export default InfoProduct;