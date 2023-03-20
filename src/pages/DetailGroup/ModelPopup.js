import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';

import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/MasterDataService';
import { toast } from 'react-toastify';
import {GiSightDisabled} from 'react-icons/gi';
const ModelPopup = (props) => {
    
    const [model  , setmodel]=useState({
       
        
    });

    const [validated, setValidated] = useState(false);
    const [isEdit, enableEdit] = useState(false);
    const [isView, enbaleView] = useState(false);
    const [isOperator, setOpeartor] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };


      const handleDisplayData = (data) => {
          let dataItem = data.value;

        if(data.statusCode == 200)
    
        {
           
            setmodel((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              id: dataItem.id,
              fullName: dataItem.fullName,
              code: dataItem.code, 
              displayName: dataItem.displayName,
              hour: dataItem.hour,
              day: dataItem.day
           
            }
          })
        }
      };

      const handleDisplayDataErro = (event) => {
        
      };

    useEffect(() => {

        let dataItem = props.dataItem;

        
        if(dataItem.isView)
        {
            enbaleView(true);
        }

        console.log(dataItem);
        if(dataItem.id =="-1")
        {
            

            setmodel((prevalue) => {
                return {
                  ...prevalue,   // Spread Operator               
                  id: dataItem.id,
                  fullName: dataItem.fullName,
                  code: dataItem.code, 
                  displayName: dataItem.displayName,
                  hour: dataItem.hour,
                  day: dataItem.day
               
                }
              })
             
          
        }

        else 

        {
            
          
            enableEdit(true);

            const bodyRequest = {
                id:  dataItem.id,
                
              
              };
              
              EmployeeService.getById(ConstantData.URL_masterdata_GetById,ConstantData.HEADERS,
                bodyRequest,
                handleDisplayData, 
                handleDisplayDataErro);


            return;
            
        }


        

        
        

        

  }, []);

    const handleInputChange =(event)=> {
        let valueControl = event.target.value;
        let nameControl = event.target.name;
        console.log( valueControl);
        setmodel((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: valueControl
            }
          })
     
    }
    
    // const AddEmploy =(event)=> {
      
    // }
    const  AddEmploy = (event) => { 


        let groupId =   window.location.pathname.split("/").pop();
        
        const employeeAdd = {
            Code:  model.code,
            DisplayName:  model.displayName,
            FullName: model.fullName,
            GroupId: groupId
           
          };
    

       
   
        EmployeeService.add(ConstantData.URL_masterdata_Add,ConstantData.HEADERS,
            employeeAdd,
            handleSucess, 
            handleErr);
        // props.handleAdd(model);

    }
    const handleSucess = (data) => {    
        if(data.statusCode == 200)
       {
          //loading success
          props.handleAdd(model);  
       }
       else 
       {
            toast.error('Có lỗi khi thêm mới:'+ data.value, {
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

    const handleErr = (data) => {

    }



    const  UpdateEmploy = (event) => { 
        
        // if(isOperator ==true)
        // {
        //     return;
        // }
        // setOpeartor(true);
        let groupId =   window.location.pathname.split("/").pop();
        const modelUpdate = {
          Groupid: groupId,
          Memberid: model.memberid,
            
        };

        EmployeeService.update(ConstantData.URL_addMemberGroupRequest,ConstantData.HEADERS,
            modelUpdate,
            handleSucessUpdate, 
            handleErrUpdate);
            props.handleUpdate(model);

    }
    const handleSucessUpdate = (data) => {    


        if(data.statusCode == 200)
       {
        
          props.handleUpdate(model);  
       }
       else 
       {

        toast.error('Có lỗi khi cập nhật:'+ data.value, {
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

    const handleErrUpdate = (data) => {
     
       
       
    }



    return (


      
        <div className="model">
            <div className="header-model">
                    {
                    model.id == "-1" ? (
                            <h4>Thêm nhân viên vào nhóm</h4>
                    ) : 
                    (
                            <h4>Thông tin trạng thái</h4>
                    )}
            </div>

            <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate   validated={validated}>
                    

                     <InputGroup className="mb-2">
                       <InputGroup.Text className="input-group-icon">
                             <GiSightDisabled    />
                        </InputGroup.Text>
                        
                        <Form.Select aria-label="Collection" name ="memberid" onChange={handleInputChange} value = {model.memberid}>
                               

                            {
                                  props.listUserNotGroup.map((item, index) => {
                                            return  <option value={item.id}>{item.userName +'_' + item.fullName }</option>
                                  })
                              }
                              
                        </Form.Select>
                    </InputGroup>
               
               
                </form>
            </div>

            <div className="footer-model">

             <button className="btn-model btn-add" onClick= {UpdateEmploy}>Lưu lại</button>
              
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
            </div>
        </div>
    );
};

export default ModelPopup;