import React, { useState } from "react";
import { Tabs, Tab } from 'react-bootstrap';
import { FaTable, FaFilter } from "react-icons/fa";
import { Row, Form, InputGroup, Col, FormControl, Button } from 'react-bootstrap';

import {
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import moment from "moment";
import Table from "./Table";
import SkipTable from "./SkipTable";
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

let XLSX = require("xlsx");



const Index = () => {
   
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isInit, setInit] = useState(false);
    const [showRessult, setshowRessult] = useState(0);
    const [showNotFound, setisshowNotFound] = useState(0);




    const [obejctPaging, setObjectPaging ] = useState({
        limt: 10, 
        totalRecord : 28,
        totalPage: 3,
        currentPage: 1,
      
    });

  
    const [obejctSearch, setKeySearch] = useState({
        tokenSearch: "",
        isActive: true,
        dpd: "-1",
        noAgree: "", 
        cmnd:  "",
        statusSearch: "-1",
        IdPackage: "",
        fromTime: moment().subtract(90, 'days'),
        endTime: moment()
    });
  
  

    

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

   


    const [employeeItem, setDataItem] = useState({
        "id": "-1",
        "fullName": "",
        "code": "",
        "displayName": "",
        "hour": 0,
        "day": 0
    });


    
    

    

    const [dataEmployee, setData] = useState( {
        result: {},
        listSkipNew:  [],
        tbodyDataUser: [
         
        ],
    }  );


    useEffect(() => {

        if(!isInit)
        {

           

             getDataEmployee(); 
             setInit(true);
        } 

    }, [obejctPaging]);
    const getDataEmployee = (PackageKey ='')=> {
        const search = window.location.search;
        const query = new URLSearchParams(search);
        let tokenInput = query.get('keysearch');
         if( tokenInput!= null && tokenInput !="")
          {
                  let valueControl =tokenInput;
                  let nameControl ="tokenSearch";
                  setKeySearch((prevalue) => {
                      return {
                          ...prevalue,   // Spread Operator               
                          [nameControl]: valueControl
                      }
                   })
           }
           else 
           {
             if( obejctSearch.tokenSearch != null && obejctSearch.tokenSearch !="")
             {
                tokenInput = obejctSearch.tokenSearch;
             }
            
           }
           console.log(obejctSearch);

          let bodySearch = {
            Token: tokenInput  
          };

   
          EmployeeService.GetAll(ConstantData.URL_store_search, ConstantData.HEADERS, bodySearch, (response) => {
                if (response.statusCode === 200) {
                     var datare = response.value;

                    if(datare.success)
                    {
                        
                       
                        setshowRessult(2);
                        setisshowNotFound(3);
                    }
                    else 
                    {   
                        setshowRessult(3);
                        setisshowNotFound(2);
                
                       
                   
                    }
                    var listSkipNew  =datare.listSkipNew;
                    var result = datare.result;
                    setData(prew=>({...prew,result:result}));
                    setData(prew=>({...prew,listSkipNew:listSkipNew}));
                 
                    // renderData(response.value);
                } else {
                   
                }
                setTimeout(() => {
                    let valueControl =true;
                    let nameControl ="isActive";
                    setKeySearch((prevalue) => {
                        return {
                            ...prevalue,   // Spread Operator               
                            [nameControl]: valueControl
                        }
                    })
                }, 1000);
          });

    }

  
    const searchData =()=> {
        if(obejctSearch.tokenSearch.length <1)
        {
            Swal.fire({
                icon: 'error',
                title: 'Thiếu thông tin',
                text: 'Chưa nhập thông tin !'
                
              })
        }
    
        if(!obejctSearch.isActive)
          return;
        let valueControl =false;
        let nameControl ="isActive";
        setKeySearch((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                [nameControl]: valueControl
            }
        })
       
        var urlPag= "/tra-cuu?keysearch=";
        let tokenSearch =obejctSearch.tokenSearch;
        if(tokenSearch !='' && tokenSearch !='')
        {
            urlPag +='' +tokenSearch;
        }
         window.history.pushState(null,"",urlPag);
        getDataEmployee();
    }


    
   
    var isActive = false;
  


    return (
        <div className="storeSearch">
            <div >
            

               <div className="formSearch">
               <div className="headStore">
                  Tra cứu thông tin hồ sơ
               </div>
                           


                            <Row>
                            
                            <span> Nhập CCCD/SĐT/Số hợp đồng :</span>
                            <div className="inputSearch">
                            <Form.Control
                                type="text" name ="tokenSearch" placeholder="Có thể nhập CCCD, Số điện thoại, Số HĐ"  onChange={handleInputChange} value ={obejctSearch.tokenSearch} 
                            />
                            
                            <button  className="btn-search"  onClick= {searchData}>Tra cứu </button>
                            </div>
                                 </Row>


                          


                        
               </div>
                {
                    (showRessult ==2)&&<div className="bodyStore" > 
                    <h5> Kết quả trả về: </h5>
                    <Table theadData={ DataJson.theadDataStore } data={dataEmployee.result}  tblClass="tbl-custom-data" />
                  
                    </div>
    
                }

               {
                 (showNotFound ==2)&& obejctSearch.tokenSearch!="" &&   <div className="bodyNotfound">
                  Không tìm thấy hồ sơ có thông tin tương ứng.
                  </div>
               }
            

                
            </div>

           { (showRessult ==2)&& dataEmployee.listSkipNew !=null && dataEmployee.listSkipNew.length>0 && <>
            <a className="titlesection">Thông tin thêm</a>

             <SkipTable  data= {dataEmployee.listSkipNew} tblClass="tbl-custom-data" />
            </>
            }
           
      </div>
    );
};

export default Index;