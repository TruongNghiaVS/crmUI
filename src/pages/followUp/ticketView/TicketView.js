import { useEffect,useState } from 'react';
import { FaTicketAlt } from "react-icons/fa";
import InfoTicketView from './infoTicketView/InfoTicketView';
import TabsTicketView from './tabsTicketView/TabsTicketView';
import { Button } from 'react-bootstrap';
import './TicketView.scss';
import Swal from 'sweetalert2'
import CampagnProfileService from '../../../services/CampagnProfileService';
import ImpactHistoryService from '../../../services/ImpactHistoryService';


import $ from 'jquery';

import ProcessingCall from '../../../services/ProcessingCall';
const TicketView = () => {

    const [model , setmodel]=useState({

    });
  

    
    const [dataImpact, setDataImpact] = useState( {
        data: [
         
        ],
    });
    const [isInit, setInit] = useState(false);

    const [dataSkip, setdataSkip] = useState( {
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
        placeCode: "-1",
        noteIm: "",
        wayContact: "-1",
        noteCode: "-1",
        promiseday: null,
        moneyPromise: "",
        daysuggestTime: null, 
        statusFollow: "-1", 
        relationship: "-1",
        profileId: 26,
        priority:-1,
        colorCode: "-1",
        assignee:"-1",
        department: "-1",
        phoneSelect: 1,
        activetype : "Phone Call"

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
    const callToline1 =(valueCall)=> {


        // let inputValue = e.target.parentElement.parentElement.getElementsByTagName("input");
        let PhoneLog = valueCall;
  
        if(PhoneLog.length <1)
        {
             Swal.fire({
                 icon: 'error',
                 title: 'Không có số điện thoại',
                 text: 'Không có số điện thoại',
                 footer: 'Yêu cầu thông tin!'
             })
             return;
        }
         let NoAgree =  model.noAgreement;
 
         let bodySearch = {
             phoneNumber: PhoneLog, 
             noAgree:  NoAgree, 
             profileId: window.location.pathname.split("/").pop()
            
          };
     
     
          
     ProcessingCall.MakeCall( bodySearch, (response) => {
         if (response.statusCode === 200) {
                   
             Swal.fire({
                 title: 'Đang thực hiện gọi. Đang chuyển phần mềm gọi',
                 width: 600,
                 timer: 4000,
                 showConfirmButton: false,
                 padding: '3em',
                 color: '#716add',
                 background: '#fff',
                 backdrop: `
                   rgba(0,0,123,0.4)
                   left top
                   no-repeat
                 `
               });
         } else{
             Swal.fire({
                 icon: 'error',
                 title: 'Có lỗi xảy ra',
                 text: 'Không gọi được!',
                 footer: 'Liên hệ IT hỗ trợ'
               })
         }
         }, (error) => {
 
 
             Swal.fire({
                 icon: 'error',
                 title: 'Có lỗi xảy ra',
                 text: 'Không gọi được!',
                 footer: 'Liên hệ IT hỗ trợ'
               })
         
         });


     }

    useEffect(() => {

              
    $('.clicktocall').unbind().click(function(e){
        
      
        var phoneNumber = e.target.getAttribute("valuetemp");
        callToline1(phoneNumber);
      
      
        
    })


    if(!isInit)
    {
        loadDataCase();
    }
       
    
        
      });

      const loadDataCase =(id = 1)=> {
       
        let profileId =  id;

        if( id < 2)
        {
            profileId =  window.location.pathname.split("/").pop();
        }
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
        setInit(true);
     }


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

     const handleInputChangeColor =(value)=> {
       
        let valueControl = value;
        let nameControl = "colorCode";
        setmodelImpact((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: valueControl
            }
         })
     }

     const handleClick =(value)=> {
       
        document.getElementById("red").classList.remove("activebutton");
        document.getElementById("black").classList.remove("activebutton");
        document.getElementById("green").classList.remove("activebutton");
        document.getElementById("yellow").classList.remove("activebutton");
        document.getElementById(value).classList.add("activebutton");
        handleInputChangeColor(value);
     }

     const handleInputChangeImpact =(event)=> {
        debugger;
       
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
            if(data.value.isSave ==false)
            {
                  Swal.fire({
                    icon: "error",
                    title: "Lưu không thành công",
                    confirmButtonText: "Đã hiểu",
                    text: data.value.message ,
                    footer: 'Vui lòng thực hiện cuộc gọi trước khi lưu tác động'
                  });

            }
            else 
            {
                Swal.fire({
                
                    icon: 'success',
                    title: 'Lưu thành công',
                 
                }).then(function() {
                    // window.open("/follow-up-new/new-list ","_self");
                    showOrHide();
                });
            }
      
           
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
        let dataSkipExtra =data.value.listSkipNew;
        

        
        let campangn = data.value.campagn;

        let reasonData = data.value.listReason;
        let userList = data.value.listUser;

       
      
      
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
            campaignId: dataItem.campaignId,
            status: dataItem.status,
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
        setdataSkip(prew=>({...prew,data:dataSkipExtra}));

        
        }
    };
    const handleDisplayDataErro = (event) => {

        
    };

    const [isOPenUploadFile3, setisOPenUploadFile3] = useState(false);

    const showOrHide = ()=> {

        setisOPenUploadFile3(!isOPenUploadFile3);
  }

    return (
        <div className="ticket-view">
            <div className='box-tbl'>
                <h4 className='box-tit'>
                    <FaTicketAlt className="icon-tit" />
                    Thông tin hợp đồng số:   <span className='bold-text'> {model.noAgreement}</span> 
                </h4>
                <div className="box-info">


                    <InfoTicketView handleInputChange = {handleInputChange} 
                    handleInputChangeImpact = {handleInputChangeImpact} 
                    handleInputChangeColor=  {handleInputChangeColor}
                    masterData = {masterData} 
                    modelImpact= {modelImpact}
                    dataImpact ={dataImpact}
                    dataReason= {dataReason} 
                    listUser= {listUser} 
                    saveImpact= {saveImpact} 
                    saveSkip= {saveSkip} 
                    showOrHide = {showOrHide}
                    isOPenUploadFile3 = {isOPenUploadFile3}
                    dataSkip= {dataSkip}
                    handleClick = {handleClick}

                    Save = {Save} dataView = {model} />
                  
                </div>
                
               
            </div>
        </div>
    );
};

export default TicketView;