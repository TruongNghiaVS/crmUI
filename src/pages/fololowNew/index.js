import React, { useState } from "react";
import { Tabs, Tab } from 'react-bootstrap';
import { FaTable, FaFilter } from "react-icons/fa";
import { Row, Form, InputGroup, Col, FormControl, Button } from 'react-bootstrap';

import {
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import moment from "moment";
import Table from "./Table";
import DataJson from "../../utils/Data";
import Model from "../../components/model/Model";
import ModelPopup from "./ModelPopup";
import "./User.scss";
import { useEffect,useRef  } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/EmployeeService';
import MangagementPackageService from '../../services/PackageService';
import Paging from  "./Paging";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import UploadFile  from "./UploadFile";
let XLSX = require("xlsx");



const Reason = () => {
    let { detail } = useParams();
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isInit, setInit] = useState(false);

    const [campagnIdSelect, setCampagnSelect] = useState(-1);

    const [isOPenUploadFile, setisOPenUploadFile] = useState(false);

    const [obejctPaging, setObjectPaging ] = useState({
        limt: 10, 
        totalRecord : 28,
        totalPage: 3,
        currentPage: 1
    });

    const [packageManagement, setPackageManagement ] = useState({
         packageManagement:[]
    });

    const [obejctSearch, setKeySearch] = useState({
        tokenSearch: "",
        IdPackage: ""
    });
   
    const handleimportRow = ()=> {

         setisOPenUploadFile(!isOPenUploadFile);
   }

   let keyLoop = '';
    const handleSelect =(key)=>{
     
        if(keyLoop == key)
        {
            return;
        }
        keyLoop =key;

        let valueControl = key;
        let nameControl = "IdPackage";
        setKeySearch((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                [nameControl]: valueControl
            }
        })
        getDataEmployee(key);
      
    }

   const getAllPackage = ()=> {
        
    let bodyRequest = {
           
      };
    MangagementPackageService.GetAllInfo( bodyRequest, (response) => {
    if (response.statusCode === 200) {
     
        let dataDPD= response.value.data;

        let items =[]
        dataDPD.forEach(dataDPD => {

       
          items.push(dataDPD);
         
        
        });
        setPackageManagement((prevalue) => {
          return {
            ...prevalue,   // Spread Operator               
            packageManagement: items
          }
        })




    } else {



      }
    }, (error) => {

    });

    }
    const handleShowModelUploadFile = () => {
        

        setisOPenUploadFile(!isOPenUploadFile);
        
    }

    const handleInputChange = (event) => {
     
        let valueControl = event.target.value;
        let nameControl = event.target.name;
        setKeySearch((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                [nameControl]: valueControl
            }
        })

    }
    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));

    const roleUser = jsonProfile.role;

    var isAdmin = false;
    if(roleUser === "2") {
        isAdmin = true;
    }
    const dateForPicker = (dateString) => {
        return moment(new Date(dateString)).format('YYYY-MM-DD')
    };

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

    const [employeeItem, setDataItem] = useState({
        "id": "-1",
        "fullName": "",
        "code": "",
        "displayName": "",
        "hour": 0,
        "day": 0
    });


    
    const handleUpdateById = (id)=> {
            setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                id:id
            }
            });
            setDataItem((prevalue) => {
                return {
                    ...prevalue,   // Spread Operator               
                    isView:false
                }
                });
            setIsOpenModel(!isOpenModel);
    }

    const handleViewById = (id)=> {
        setDataItem((prevalue) => {
        return {
            ...prevalue,   // Spread Operator               
            id:id
        }
        });
        setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                    isView:true
            }
            })


            setIsOpenModel(!isOpenModel);
    }


    

    

    const [dataEmployee, setData] = useState( {
        tbodyDataUser: [
         
        ],
    }  );


    useEffect(() => {

        if(!isInit)
        {

            document.title = "Danh sách hồ sơ";
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const token = params.get('token');
           
            //  console.log(token)//123
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
             getAllPackage();
             setInit(true);
        }
      
        
        

    }, [obejctPaging]);

    const btnSerachKey = useRef(null);

    const handleAddUser = (data) => {
        
        setIsOpenModel(!isOpenModel);
        toast.success('Thêm thành công!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        getDataEmployee();
    }
    
    const handleUpdate = (data) => {
        
        toast.success('Câp nhật thành công!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        });
        getDataEmployee();
    }


    


    const getDataEmployee = (PackageKey ='')=> {
         let typegetData = 0;


         
         if(detail== "new-list")
         {
            typegetData = "0";
         }
         else if( detail == "watch-list")
         {
            typegetData = "1";
         }
         else if( detail == "data")
         {
            typegetData = "10";
         }
         else if( detail == "skipcase")
         {
            typegetData = "2";
         }
         else 
         {
            typegetData = "3";
         }

         var idpackageserach = obejctSearch.IdPackage;
         if(PackageKey != '')
         {
            idpackageserach = PackageKey; 
         }
         let bodySearch = {
            Token: obejctSearch.token, 
            IdPackage: idpackageserach,
            Page:  obejctPaging.currentPage,
            Limit: obejctPaging.limt,
            dpd: obejctSearch.dpd,
            lineCode:  obejctSearch.lineCode,
            phoneSerach:  obejctSearch.phoneSerach,
            from: obejctSearch.fromTime,
            to: obejctSearch.endTime,
            typegetData: typegetData

          };
          EmployeeService.GetAll(ConstantData.URL_campagnProfile_GetALl, ConstantData.HEADERS, bodySearch, (response) => {
                if (response.statusCode === 200) {
                    renderData(response.value);
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


    const handleShowModel = () => {

        setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                id:"-1"
            }
            })
      setIsOpenModel(!isOpenModel);
        // setIsOpenModel(!isOpenModel);
    }

    const searchData =()=> {

           

            getDataEmployee();

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
            Id:  idEmp,
           
          };
          EmployeeService.delete(ConstantData.URL_campagnProfile_Delete,ConstantData.HEADERS,
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
    
    const handleDeleteEmpl = (id)=> {
         Swal.fire({
            title: 'Bạn chắc chắn xóa',
            text: "Bạn sẽ không lấy lại được dữ liệu",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý!'
          }).then((result) => {
             if (result.isConfirmed) {
                deleteEmploy(id);
                 
            }
          })

    }


    return (
        <div className="user">
            <div className='box-tbl'>
                <h4 className='box-tit'>
                <FaTable className="icon-tit" />
                     Hồ sơ theo dõi
                </h4>
                <Form>
                            <Row>
                                <Col>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Từ ngày:</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                                            <Form.Control
                                                type="date"
                                                name="fromTime"
                                                value={dateForPicker(obejctSearch.fromTime)}
                                                placeholder="Từ ngày"
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Đến ngày:</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                                            <Form.Control
                                                type="date"
                                                name="endTime"
                                                value={dateForPicker(obejctSearch.endTime)}
                                                placeholder="Đến ngày"
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>

                                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Từ khóa:</Form.Label>
                                        <InputGroup className="mb-2">
                                        <Form.Control
        type="text" name ="token" placeholder="Số hợp đồng,họ tên"  onChange={handleInputChange} value ={obejctSearch.token} 
      />
                                        </InputGroup>
                                     </Form.Group>
                                </Col>

                                <Col>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Số điện thoại:</Form.Label>
        <InputGroup className="mb-2">
        <Form.Control
type="text"
name ="phoneSerach"  value ={obejctSearch.phoneSerach} onChange={handleInputChange}
/>
        </InputGroup>
    </Form.Group>
</Col>


                                <Col>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>DPD:</Form.Label>
        <InputGroup className="mb-2">
        <Form.Select aria-label="Default select example" name ="dpd" value ={obejctSearch.dpd} onChange={handleInputChange} >
                        <option value ="-1">Chọn DPD</option>
                        <option value="0">DPD ~30</option>
                        <option value="1">DPD 31 ~60</option>
                        <option value="2">DPD 61 ~90</option>
                        <option value="3">DPD 91 ~ 180</option>
                        <option value="4">DPD 181 ~ 360</option>
                        <option value="5">DPD 361 ~ 1000</option>
                        <option value="6">DPD 1001 ~</option>
        </Form.Select >
        </InputGroup>
    </Form.Group>
</Col>

{
    isAdmin?<Col>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>tài khoản:</Form.Label>
            <InputGroup className="mb-2">
            <Form.Control
            type="text" name ="lineCode"  onChange={handleInputChange} value ={obejctSearch.lineCode} 
            />
            </InputGroup>
    </Form.Group>
    </Col>:<></>
}

                                
                            </Row>

                            <Row>
                    

                            </Row>
                 </Form>
                

                <div className="list-feature">
                    {
                        isAdmin?  <div className="button-feature">
                        
                        <button className="btn-ft btn-export" onClick={()=>handleimportRow()}  >Import Thông tin thêm</button> 
                         
                    </div>:<></>
                    }
                  
                    <div className="search-feature">
                        <button  className="btn-search"  onClick= {searchData}>Tìm kiếm</button>
                    </div>
                </div>
                {/* <Tabs
                        onSelect={(e)=>handleSelect(e)}
                            transition={false}
                            className="mb-3"
                        >
                            
                        { 
                                packageManagement.packageManagement.map((item, index) => {
                                        return <Tab 
                                        
                                                eventKey={item.id} title={item.name}>

                                                </Tab>;
                                })
                            }
                </Tabs> */}

                <Table theadData={ DataJson.theadDataFollowUpNew } dataDraw={dataEmployee} handleDelete = {handleDeleteEmpl} handleViewById = {handleViewById} handleUpdateById = {handleUpdateById} tbodyData={ DataJson.tbodyDataUser } tblClass="tbl-custom-data" />
                <Paging dataPaging = {obejctPaging} handlePaging = {handlePaging}/>
            
            </div>

            { isOpenModel && <Model handleClose ={handleShowModel} content={<ModelPopup dataItem= {employeeItem}  handleAdd={handleAddUser}  handleUpdate={handleUpdate}  handleClose={handleShowModel} />} /> }

            {
                isOPenUploadFile && <Model                                        
                    handleClose ={handleShowModelUploadFile}
                    content={<UploadFile
                    idPass = "3333"  
                    handleClose={handleShowModelUploadFile} 
                />} />
             }

        </div>
    );
};

export default Reason;