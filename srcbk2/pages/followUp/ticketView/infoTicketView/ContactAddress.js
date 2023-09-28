import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const ContactAddress = ({data,handleInputChange}) => {
    return (
        <Col>
            <Form.Label>Địa chỉ Liên lạc</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường(chính)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly onChange={handleInputChange} name = "road"  value = {data.road} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện(c)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange}  name ="suburbanDir" value ={data.suburbanDir}  />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP(chính)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange} name = "provice"  value ={data.provice} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly   onChange={handleInputChange} name ="road1"   value ={data.road1} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện(t)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange}  name = "suburbanDir1" value ={data.suburbanDir1} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange} name ="provice1"   value ={data.provice1} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường</InputGroup.Text>
                <FormControl aria-label="Small" readOnly onChange={handleInputChange} name = "road2"  value ={data.road2} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange}  name ="suburbanDir2" value ={data.suburbanDir2} />
            </InputGroup>

            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange}  name ="provice2" value ={data.provice2} />
            </InputGroup>
            
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đã thanh toán</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange} name ="statusPayMent"  value ={data.statusPayMent} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>DPD</InputGroup.Text>
                <FormControl aria-label="Small"  readOnly onChange={handleInputChange} name ="dpd"  value ={data.dpd} />
            </InputGroup>
        </Col>
    );
};

export default ContactAddress;