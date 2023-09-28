import React, { useState, useEffect } from 'react';
import Table from "./Table";
import { FaTable, FaFilter } from "react-icons/fa";
import DataJson from "../../utils/Data";
import { useParams } from 'react-router-dom';
import TicketView from './ticketView/TicketView';

const FollowUp = (props) => {
    
    const [valTitle, setValTitle] = useState("Danh sách theo dõi");

    let { detail } = useParams();

    useEffect(() => {
        let isUseEffect = true; 
    
        if (isUseEffect) {
            if (detail === "new-list") {
                setValTitle("Danh sách mới phân");
            } 
            if (detail === "data") {
                setValTitle("Danh sách import");
            }
            else {
                setValTitle("Danh sách theo dõi");
            }
        }
    
        return () => 
        { 
            isUseEffect = false
         };
    }, [detail, valTitle]);

    return (

        <TicketView />
       
    );
};

export default FollowUp;