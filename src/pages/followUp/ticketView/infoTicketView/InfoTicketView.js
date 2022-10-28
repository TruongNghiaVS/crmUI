import { Row } from 'react-bootstrap';
import InfoCustomer from './InfoCustomer';
import ContactAddress from './ContactAddress';
import InfoFinance from './InfoFinance';
import InfoProduct from './InfoProduct';


const InfoTicketView = ({ dataView , handleInputChange }) => {

  
    return (
        <Row>
            <InfoCustomer handleInputChange = {handleInputChange} data = {dataView} />
            <ContactAddress handleInputChange = {handleInputChange}  data = {dataView} />
            <InfoFinance handleInputChange ={handleInputChange} data = {dataView} />
            <InfoProduct handleInputChange = {handleInputChange} data = {dataView} />
        </Row>
    );
};

export default InfoTicketView;