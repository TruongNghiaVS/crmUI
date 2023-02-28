import { useEffect,useState } from 'react';
import { FaTicketAlt } from "react-icons/fa";
import InfoTicketView from './infoTicketView/InfoTicketView';
import TabsTicketView from './tabsTicketView/TabsTicketView';
import { Button } from 'react-bootstrap';
import './TicketView.scss';
import Swal from 'sweetalert2'
import CampagnProfileService from '../../../services/CampagnProfileService';
import ImpactHistoryService from '../../../services/ImpactHistoryService';

const TicketView = () => {

    const [model , setmodel]=useState({

    });
  

    
    const [dataImpact, setDataImpact] = useState( {
        data: [
         
        ],
    });

    const [dataReason, setDataReason] = useState( {
        data: [
         
        ],
    });


    
    const [masterData, setMasterData] = useState( {
        data: [
         
        ],
    });

    const [listUser, setDataUser] = useState( {
        data: [
         
        ],
    });
    
    const [modelImpact , setmodelImpact]=useState({
        code : "",
        campagnName: "Chiến dịch 4",
        shortDescription: "",
        statusIm:"-1",
        noteIm: "",
        promiseday: null,
        moneyPromise: "",
        daysuggestTime: null, 
        statusFollow: "-1", 
        relationship: "-1",
        profileId: 26,
        priority:-1,
        assignee:"-1",
        department: "-1"

    });

   
    const loaddingMasterData = (data) => {

        let dataMasterdata =   data.value.listData;
        let dataReason = data.value.data;


        setMasterData((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              data: dataMasterdata
            }
         });

       
    
    };
    useEffect(() => {
       
        let profileId =   window.location.pathname.split("/").pop();
        const bodyRequest = {
            id: profileId
        };
        CampagnProfileService.getInfoById( bodyRequest,
        handleDisplayData, 
        handleDisplayDataErro);

        const bodyMassterInfo = {
            Type : -1,
            
            token: ""

        };
        CampagnProfileService.getAllInfo( bodyMassterInfo,
            loaddingMasterData, 
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


     const handleInputChangeImpact =(event)=> {
       
        let valueControl = event.target.value;
        let nameControl = event.target.name;
        setmodelImpact((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: valueControl
            }
         })
    
    }

    const saveImpact = ()=> {


        
Swal.fire({
    title: 'Bạn có muốn lưu lịch sử tác động',
    text: "",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Lưu'
    })
    .then((result) => {
    if (result.isConfirmed) {
        const modelUpdate = modelImpact;
        let profileId =   window.location.pathname.split("/").pop();
        modelUpdate.ProfileId = profileId;
        ImpactHistoryService.add(
            modelUpdate,
            handleSucessUpdateImpact, 
            handleErrUpdateImpact
        );
    }
    })

}


const Save = ()=> {
    let profileId =   window.location.pathname.split("/").pop();

    Swal.fire({
    title: 'Bạn chắc chắn lưu?',
    text: "Dự liệu sẽ bị ghi đè",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Lưu'
    })
    .then((result) => {
    if (result.isConfirmed) {
       
            const modelUpdate = model;
            modelUpdate.id = profileId;
            CampagnProfileService.update(
                modelUpdate,
                handleSucessUpdate, 
                handleErrUpdate
            );

    }
    })

}


const saveSkip = () => {

    let profileId =   window.location.pathname.split("/").pop();
    Swal.fire({
            title: 'lưu thông tin thêm',
            text: "bạn chắc chắn thao tác",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý!'
    })
    .then((result) => {
            if (result.isConfirmed) {
            
                    const modelUpdate = model;
                    modelUpdate.id = profileId;
                    CampagnProfileService.updateSkip(
                        modelUpdate,
                        handleSucessUpdate, 
                        handleErrUpdate
                    );

            }
    })

} 

const handleSucessUpdateImpact = (data) => {
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

const handleErrUpdateImpact = (data) => {



}
    
const handleSucessUpdate = (data) => {
    
    
            if(data.statusCode == 200)
            {
                    Swal.fire({
                        
                        icon: 'success',
                        title: 'Lưu thành công',
                        showConfirmButton: true,
                        
                    })
                    let profileId =   window.location.pathname.split("/").pop();

                    const bodyRequest = {
                        id: profileId
                    };

                    CampagnProfileService.getInfoById( bodyRequest,
                        handleDisplayData, 
                        handleDisplayDataErro);
                    // saveImpact();
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
        let dataItem = data.value.result;
        let dataHistory = data.value.listHistory;
        let campangn = data.value.campagn;

        let reasonData = data.value.listReason;
        let userList = data.value.listUser;

       
        console.log(data);
      
        if(data.statusCode == 200)
        {
            

            setDataUser((prevalue) => {
                return {
                  ...prevalue,   // Spread Operator               
                  data: userList
                }
             });
            setDataReason((prevalue) => {
                return {
                  ...prevalue,   // Spread Operator               
                  data: reasonData
                }
             });
        setmodel((prevalue) => {
        return {
          ...prevalue,
            campangnName: "Chiến dịch 4",
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
            codeProduct: dataItem.codeProduct,
            priceProduct: dataItem.priceProduct, 
            noteFirstTime: dataItem.noteFirstTime,
            skipContent: dataItem.skipContent,
            id : dataItem.id,
            noteRel: dataItem.noteRel,
            assignee: dataItem.assignee,
            statusProfile: data.value.statusProfile

            // Spread Operator               

        }
        })
        setDataImpact(prew=>({...prew,data:dataHistory}));
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


                    <InfoTicketView handleInputChange = {handleInputChange}  Save = {Save} dataView = {model} />
                    <TabsTicketView 
                     handleInputChange = {handleInputChange}  
                     handleInputChange1 = {handleInputChangeImpact} 
                     dataHistory ={dataImpact.data}
                     masterData = {masterData}
                     dataView = {modelImpact} 
                     dataReason = {dataReason}
                     listUser = {listUser} 
                     dataView2 = {model} 
                     saveImpact = {saveImpact} 
                     saveSkip = {saveSkip} 
                     />
                </div>
                
               
            </div>
        </div>
    );
};

export default TicketView;