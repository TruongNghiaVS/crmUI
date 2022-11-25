import React, { useState } from "react";
import { FaTable, FaFilter } from "react-icons/fa";
import Table from "./Table";
import DataJson from "../../utils/Data";
import Model from "../../components/model/Model";
import ModelPopup from "./ModelPopup";
import UploadFile  from "./UploadFile";
import "./User.scss";
import { useEffect,useRef  } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/EmployeeService';
import CampagnService from '../../services/CampagnService';
import Paging from  "./Paging";
import { toast } from 'react-toastify';
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';


import Swal from 'sweetalert2'
let XLSX = require("xlsx");

const CampaignAssign = () => {
    
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [dataSelect, setDataSelect] = useState([]);

    const [campagnIdSelect, setCampagnSelect] = useState(-1);
    const [isOPenUploadFile, setisOPenUploadFile] = useState(false);
    const [isInit, setInit] = useState(false);
    const [obejctPaging, setObjectPaging ] = useState({
        limt: 10, 
        totalRecord : 28,
        totalPage: 3,
        currentPage: 1
    });
    const [obejctSearch, setKeySearch] = useState({
        tokenSearch: ""
    });

    const [modelCampagnOverview, setCampagnModel] = useState({
        numberHaveNotAssigee : 0,
        numberHasAssigee : 0,
        numberHasClose : 0, 
        numberHasKeep : 0,
        numberHasSkip: 0,
        total: 0
    });
    const handleimportRow = (id)=> {

         setCampagnSelect(id);
        
          setisOPenUploadFile(!isOPenUploadFile);
    }


    const handlePaging = (data)=> {
         const key = 'currentPage';
            const value = data;
            setObjectPaging(prevState => ({
            ...prevState,
            [key]: value
            }
            ));
            getDataEmployee();

            setInit(false);
    }


    
    const updateDataSelect = (dataItem)=> {
       
         if(dataItem)
        {

        }
        let modelData = dataSelect;

        var item =   modelData.find(itemData => {
            return itemData.key == dataItem.key;
        });
        if(item)
        {
            
            item.sumCounted = dataItem.sumCounted;
            
        }
        else 
        {
            modelData.push({
                sumCounted: dataItem.sumCounted,
                key: dataItem.key, 
                id: dataItem.id

            });
        }
   
        setDataSelect(modelData);
    
    }

   

  
    const [dataEmployee, setData] = useState( {
        tbodyDataUser: [
         
        ],
    });
    
    
    useEffect(() => {
     

        
        if(!isInit)
        {
        
          
            document.title = "Phân case cho sale";
            const search = window.location.search;
            const params = new URLSearchParams(search);
            console.log(params);
            const token = params.get('token');

           if( token!= null && token !="")
             {
                  let valueControl =token;
                  let nameControl ="tokenSearch";
                  setKeySearch((prevalue) => {
                      return {
                        ...prevalue,   // Spread Operator               
                        [nameControl]: valueControl
                      }
                    })
             }
             getDataEmployee();
             setInit(true);

        }
    }, [obejctPaging,dataSelect]);

    const btnSerachKey = useRef(null);

    
    const getDataEmployee = ()=> {
                      let campaignId =   window.location.pathname.split("/").pop();
                      let bodySearch = {
                                Token: obejctSearch.tokenSearch, 
                                Page:  obejctPaging.currentPage,
                                Limit: obejctPaging.limt,
                                CampaignId: campaignId
                        };
                        
                        CampagnService.getAllCampangAsignee(ConstantData.HEADERS, bodySearch, (response) => {
                        if (response.statusCode === 200) {
                            renderData(response.value);
                            let modelOverviewCampagn  = response.value.model;

                     
                            setCampagnModel(prew=>({...prew,numberHaveNotAssigee:modelOverviewCampagn.numberHaveNotAssigee}));
                            setCampagnModel(prew=>({...prew,numberHasAssigee:modelOverviewCampagn.numberHasAssigee}));
                            setCampagnModel(prew=>({...prew,numberHasClose:modelOverviewCampagn.numberHasClose}));
                            setCampagnModel(prew=>({...prew,numberHasKeep:modelOverviewCampagn.numberHasKeep}));
                            setCampagnModel(prew=>({...prew,total:modelOverviewCampagn.total}));
                            setCampagnModel(prew=>({...prew,numberHasSkip:modelOverviewCampagn.numberHasSkip}));
                            
                        
                        } else {


                        }


                        }, (error) => {
        
                    
                    
                        });

    }

    const exportDataExcel = (dataReder) => {

        var DataExport = dataReder;
          let workBook = XLSX.utils.book_new();
        const workSheet = XLSX.utils.json_to_sheet(DataExport);

        XLSX.utils.book_append_sheet(workBook, workSheet, `data`);

        let exportFileName = `dataMaster.xls`;
        XLSX.writeFile(workBook,exportFileName);

    }

    const renderData = (dataReder) => {
            let totalPage = 1;

            if(dataReder.total <1 )
            {
                totalPage = 1;
            }
            if( obejctPaging.limt <1)
            {
                totalPage = 1;
            }
            else 
            {
                totalPage = Math.floor(dataReder.total/obejctPaging.limt ) +1;
            }
           
            setData(prew=>({...prew,tbodyDataUser:dataReder.data}));

            setObjectPaging((prevalue) => {
                return {
                  ...prevalue,
                  totalRecord:dataReder.total,
                  totalPage: totalPage

                }
              })

    }
    
    const showloadingData= () => {

        Swal.fire({
            title: 'Đang được cập nhật!',
            html: 'Vui lòng <b></b> chờ trong bản sau.',
            didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
          
            },
          
            });
            
    }
    const searchData =()=> {
        
        Swal.fire({
            title: 'Bạn chắn chắn thao tác phân',
            text: "Bạn sẽ không backup lại thao tác",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý!'
          })
          .then((result) => {
            if (result.isConfirmed) {
                showloadingData();
                ProcessAssignee();
             }
          })


    }

    const ProcessAssignee =(event)=> {
        let campaignId =   window.location.pathname.split("/").pop();
        var bodyRequest = {
            DataRequest:  dataSelect,
            CampangId: campaignId
        };
        CampagnService.ProcessAssigee(ConstantData.HEADERS,
            bodyRequest,
            processAssigeeSuccess, 
            handleDeleteError);
    }

    const processAssigeeSuccess  = (data) => {
        
            if(data.statusCode == 200)
            { 
                Swal.fire({
                    icon: 'success',
                    title: 'Phân case thành công',
                    showConfirmButton: true
                })
            }
            else 
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Có lỗi',
                    text: 'Có lỗi xảy ra khi phân case!',
                    footer: '<a href="">Liên hệ admin?</a>'
                })
            }

    }

    const handleInputChangesearch =(event)=> {
        let valueControl = event.target.value;
        let nameControl = event.target.name;
       
        setKeySearch((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: valueControl
            }
          })
     
    }
    
    const  deleteEmploy = (idEmp) => { 
          const deleteIdModel = {
            Id:  idEmp
           };
          EmployeeService.delete(ConstantData.URL_campagn_Delete,ConstantData.HEADERS,
            deleteIdModel,
            handleDeleteSucess, 
            handleDeleteError);
    }
    const handleDeleteSucess = (data) => {
        if(data.statusCode == 200)
        {   
                getDataEmployee();
                Swal.fire(
                'Đã xóa!',
                'Đã xóa thành công.',
                'success'
                )
        }
        else 
        {
                toast.error('Có lỗi khi xóa:'+ data.value, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                });
        }

    }

    const handleDeleteError = (data) => {

    }
    


    return (
        <div className="user">
            <div className='box-tbl'>
                <h4 className='box-tit'>
                    <FaTable className="icon-tit" />
                    Danh sách sale cần phân
                </h4>

                <div className="list-feature">
                    
                <div className="search-feature">
                    <FaFilter />
                    <input className="input-search" name ="tokenSearch" onChange={handleInputChangesearch} value= {obejctSearch.tokenSearch}  type="text" placeholder="Tìm kiếm" />
                    <button  className="btn-search"  onClick= {searchData}>Tìm kiếm</button>
                </div>
                </div>
                <div className='navAssignee'>
                    <Button variant="outline-primary">Chiến dịch </Button>
                    <Button variant="outline-primary">Tổng ({modelCampagnOverview.total }) </Button>
                    <Button variant="outline-info">Chưa phân({modelCampagnOverview.numberHaveNotAssigee})</Button>
                    <Button variant="outline-info">Đã phân({modelCampagnOverview.numberHasAssigee})</Button>
                    <Button variant="outline-info">Đóng({modelCampagnOverview.numberHasClose})</Button>
                    <Button variant="outline-info">Giữ case({modelCampagnOverview.numberHasSkip})</Button>
                     </div>
                <Table theadData={ DataJson.theadDataCampangAssi } dataDraw={dataEmployee} 
                 tbodyData={ DataJson.tbodyDataUser }
                handleimportRow = {handleimportRow}
                updateDataSelect = {updateDataSelect}
                tblClass="tbl-custom-data" />
                <Paging dataPaging = {obejctPaging} handlePaging = {handlePaging}/>

              
            
            </div>

            <div className="list-feature">
                <div className="search-feature">
                    <button  className="btn-search"  onClick= {searchData}>Tiến hành phân</button>
                
            </div>

         
            </div>

        </div>
    );
};

export default CampaignAssign;