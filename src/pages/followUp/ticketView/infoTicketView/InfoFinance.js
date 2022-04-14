import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';

const InfoFinance = () => {
    return (
        <Col>
            <Form.Label>Thông tin tài chính</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Ngày ký</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Nợ Gốc</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tiền vay</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Trả tháng(EMI)</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tổng phạt</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tổng phải trả</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Kỳ hạn TT</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số kỳ đã TT</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tổng TT</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>TT gần nhất</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Ngày TT</InputGroup.Text>
                <FormControl aria-label="Small" />
            </InputGroup>
        </Col>
    );
};

export default InfoFinance;