import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const ContactAddress = ({data,handleInputChange}) => {
    return (
        <Col>
            <Form.Label>Địa chỉ Liên lạc</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường(chính)</InputGroup.Text>
                <FormControl aria-label="Small" value = {data.road} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện(c)</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.suburbanDir}  />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP(chính)</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.provice} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.road1} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện(t)</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.suburbanDir1} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.provice1} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.road2} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện</InputGroup.Text>
                <FormControl aria-label="Small"  value ={data.suburbanDir2} />
            </InputGroup>

            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP</InputGroup.Text>
                <FormControl aria-label="Small"  value ={data.provice2} />
            </InputGroup>
            
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đã thanh toán</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.statusPayMent} />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>DPD</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.dpd} />
            </InputGroup>
        </Col>
    );
};

export default ContactAddress;