import { Row, Form, InputGroup, Col, FormControl } from 'react-bootstrap';

const UpdateVotes = () => {
    return (
        <Row>
            <Col>
                <Form.Label htmlFor="basic-url">Tác động</Form.Label>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Chiến dịch</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Tình trạng</InputGroup.Text>
                    <Form.Select aria-label="Default select example">
                        <option>NOT UPDATE</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Ngày hứa</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Tiền hứa</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </Col>
            <Col>
                <Form.Label htmlFor="basic-url">Ghi chú</Form.Label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
            </Col>
            <Col>
                <Form.Label htmlFor="basic-url">Hẹn theo dõi</Form.Label>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Hẹn</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Theo dõi</InputGroup.Text>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Theo dõi</option>
                        <option value="2">Đóng</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Mối quan hệ</InputGroup.Text>
                    <Form.Select aria-label="Default select example">
                        <option>NOT UPDATE</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </InputGroup>
            </Col>
            <Col>
                <Form.Label htmlFor="basic-url">Chuyển phiếu</Form.Label>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Phòng ban</InputGroup.Text>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Theo dõi</option>
                        <option value="2">Đóng</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Nhân sự</InputGroup.Text>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Theo dõi</option>
                        <option value="2">Đóng</option>
                    </Form.Select>
                </InputGroup>
            </Col>
        </Row>
    );
};

export default UpdateVotes;