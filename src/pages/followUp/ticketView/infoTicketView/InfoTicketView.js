
import InfoCustomer from './InfoCustomer';
import ContactAddress from './ContactAddress';
import InfoFinance from './InfoFinance';
import InfoProduct from './InfoProduct';
import TabsTicketView from '../tabsTicketView/TabsTicketView';
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import ModalSeelectCall from '../ModalSeelectCall';
import React, { useState } from "react";
import Model from "../../../../components/model/Model";


const handleShowModelUploadFile = () => {
        


    
}
const InfoTicketView = ({ dataView , handleInputChange, Save,
    handleInputChangeImpact,handleInputChangeColor, masterData,dataImpact,

    modelImpact, dataReason , listUser , model , handleClick ,

saveImpact, saveSkip, dataSkip ,showOrHide, isOPenUploadFile3



}) => {

   

    return (
        <>
                <Row>
                    
                    <InfoCustomer handleInputChange = {handleInputChange} data = {dataView} />
                    {/* <InfoFinance handleInputChange ={handleInputChange} data = {dataView} />
                    <ContactAddress handleInputChange = {handleInputChange}  data = {dataView} /> */}
                     {/* <InfoProduct handleInputChange = {handleInputChange} data = {dataView} /> */}

                     <TabsTicketView 
                     showOrHide = {showOrHide}
                     handleInputChange = {handleInputChange}  
                     handleInputChange1 = {handleInputChangeImpact} 
                     handleInputChangeColor = {handleInputChangeColor}
                     dataHistory ={dataImpact.data}
                     masterData = {masterData}
                     dataView = {modelImpact} 
                     dataReason = {dataReason}
                     listUser = {listUser} 
                     dataView2 = {model} 
                     handleClick = {handleClick}
                     saveImpact = {saveImpact} 
                     saveSkip = {saveSkip} 
                     dataSkip = {dataSkip}
                     
                     />
                </Row>
              
{                                                                                         
    isOPenUploadFile3 ==true && <Model                                        
    handleClose={showOrHide} 
        content={<ModalSeelectCall
        idPass = "3333"  
      
        handleClose={showOrHide} 
    />} />
 }
        </>
        
    );
};

export default InfoTicketView;