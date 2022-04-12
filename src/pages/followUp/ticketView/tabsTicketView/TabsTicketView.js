import { Tabs, Tab } from 'react-bootstrap';
import UpdateVotes from './UpdateVotes';
import ImpactHistory from './ImpactHistory';

const TabsTicketView = () => {
    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">
                <UpdateVotes />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <ImpactHistory />
            </Tab>
        </Tabs>
    );
};

export default TabsTicketView;