
import InfoCustomer from './InfoCustomer';
import ContactAddress from './ContactAddress';
import InfoFinance from './InfoFinance';
import InfoProduct from './InfoProduct';
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';

const InfoTicketView = ({ dataView , handleInputChange, Save }) => {

  
    return (
        <>
                <Row>
                    <InfoCustomer handleInputChange = {handleInputChange} data = {dataView} />
                    <ContactAddress handleInputChange = {handleInputChange}  data = {dataView} />
                    <InfoFinance handleInputChange ={handleInputChange} data = {dataView} />
                    <InfoProduct handleInputChange = {handleInputChange} data = {dataView} />
                </Row>
                {/* <div className="mt-3 text-center">
                    <Button  variant="outline-primary">Cập nhật hồ sơ</Button>
                </div> */}
        </>
        
    );
};

export default InfoTicketView;