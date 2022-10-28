import { useEffect,useState } from 'react';
import { FaTicketAlt } from "react-icons/fa";
import InfoTicketView from './infoTicketView/InfoTicketView';
import TabsTicketView from './tabsTicketView/TabsTicketView';
import { Button } from 'react-bootstrap';
import './TicketView.scss';
import Swal from 'sweetalert2'
import CampagnProfileService from '../../../services/CampagnProfileService';

const TicketView = () => {

    const [model , setmodel]=useState({

    });
    useEffect(() => {
        // const ticketData = JSON.parse(localStorage.getItem("ticketData")) || null;
        // console.log("Ticket view is", ticketData);

        const bodyRequest = {
            id:  "26"
        };
        CampagnProfileService.getById( bodyRequest,
        handleDisplayData, 
        handleDisplayDataErro);
    }, []);
    const handleInputChange =(event)=> {
        
        let valueControl = event.target.value;
        let nameControl = event.target.name;
        setmodel((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: valueControl
            }
         })
     }


     const Save = ()=> {
        Swal.fire({
           title: 'Bạn chắc chắn xóa',
           text: "Bạn sẽ không lấy lại được dữ liệu",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Đồng ý!'
         })
         .then((result) => {
           if (result.isConfirmed) {
                    const modelUpdate = model;
                    modelUpdate.id = "26";
                    CampagnProfileService.update(
                        modelUpdate,
                        handleSucessUpdate, 
                        handleErrUpdate
                    );
        
            }
         })

   }


    
   const handleSucessUpdate = (data) => {
    
    
            if(data.statusCode == 200)
            {
                    Swal.fire({
                        
                        icon: 'success',
                        title: 'Lưu thành công',
                        showConfirmButton: true,
                        
                    })
                     // props.handleUpdate(model);  
            }
            else 
            {

                Swal.fire({
                    icon: 'error',
                    title: 'lưu thất bại',
                    text: 'Thao tác thất bại',
                  
                  })
            }
}

const handleErrUpdate = (data) => {



}
    const handleDisplayData = (data) => {
        let dataItem = data.value;
        if(data.statusCode == 200)
  
      {
            setmodel((prevalue) => {
                return {
                    ...prevalue,
                    customerName:  dataItem.customerName  ,
                    noAgreement: dataItem.noAgreement,
                    nationalId: dataItem.nationalId,
                    mobilePhone: dataItem.mobilePhone,
                    phone1: dataItem.phone1,
                    houseNumber: dataItem.houseNumber,
                    officeNumber:dataItem.officeNumber,
                    otherPhone: dataItem.otherPhone,
                    email: dataItem.email,
                    dayOfBirth: dataItem.dayOfBirth,
                    road: dataItem.road,
                    suburbanDir: dataItem.suburbanDir,
                    provice: dataItem.provice,
                    road1: dataItem.road1, 
                    suburbanDir1: dataItem.suburbanDir1,
                    provice1 : dataItem.provice1, 
                    road2: dataItem.road2,
                    suburbanDir2: dataItem.suburbanDir2, 
                    provice2: dataItem.provice2, 
                    statusPayMent: dataItem.statusPayMent,
                    dpd: dataItem.dpd,
                    registerDay: dataItem.registerDay,
                    debitOriginal: dataItem.debitOriginal,
                    amountLoan: dataItem.amountLoan,
                    emi : dataItem.emi,
                    totalFines: dataItem.totalFines,
                    totalMoneyPaid: dataItem.totalMoneyPaid,
                    tenure:  dataItem.tenure, 
                    noTenure: dataItem.noTenure, 
                    totalPaid: dataItem.totalPaid,
                    lastPaid: dataItem.lastPaid,
                    lastPadDay: dataItem.lastPadDay,
                    nameProduct: dataItem.nameProduct,
                    codeProduct: dataItem.vodeProduct,
                    priceProduct: dataItem.priceProduct, 
                    noteFirstTime: dataItem.noteFirstTime
                    // Spread Operator               
                
                }
            })
      }
    };
    const handleDisplayDataErro = (event) => {

        
    };


    return (
        <div className="ticket-view">
            <div className='box-tbl'>
                <h4 className='box-tit'>
                    <FaTicketAlt className="icon-tit" />
                    Phiếu xử lý
                </h4>

                <div className="box-info">
                    <InfoTicketView handleInputChange = {handleInputChange} dataView = {model} />
                    <TabsTicketView  />
                    <div className="mt-3 text-center">
                        <Button onClick= {Save} variant="outline-primary">Lưu</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketView;