import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const InfoFinance = () => {
    return (
        <Col>
            <Form.Label htmlFor="basic-url">Thông tin tài chính</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Ngày ký</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Nợ Gốc</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Tiền vay</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Trả tháng(EMI)</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Tổng phạt</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Tổng phải trả</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Kỳ hạn TT</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Số kỳ đã TT</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Tổng TT</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">TT gần nhất</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Ngày TT</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </Col>
    );
};

export default InfoFinance;