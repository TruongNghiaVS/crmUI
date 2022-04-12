import { useEffect } from 'react';
import { FaTicketAlt } from "react-icons/fa";
import InfoTicketView from './infoTicketView/InfoTicketView';
import TabsTicketView from './tabsTicketView/TabsTicketView';
import { Button } from 'react-bootstrap';
import './TicketView.scss';

const TicketView = () => {
    useEffect(() => {
        const ticketData = JSON.parse(localStorage.getItem("ticketData")) || null;
        console.log("Ticket view is", ticketData);
    });

    return (
        <div className="ticket-view">
            <div className='box-tbl'>
                <h4 className='box-tit'>
                    <FaTicketAlt className="icon-tit" />
                    Phiếu xử lý
                </h4>

                <div className="box-info">
                    <InfoTicketView />
                    <TabsTicketView />
                    <div className="mt-3 text-center">
                        <Button variant="outline-primary">Lưu</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketView;