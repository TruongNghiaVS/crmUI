import { Row } from 'react-bootstrap';
import InfoCustomer from './InfoCustomer';
import ContactAddress from './ContactAddress';
import InfoFinance from './InfoFinance';
import InfoProduct from './InfoProduct';

const InfoTicketView = () => {
    return (
        <Row>
            <InfoCustomer />
            <ContactAddress />
            <InfoFinance />
            <InfoProduct />
        </Row>
    );
};

export default InfoTicketView;