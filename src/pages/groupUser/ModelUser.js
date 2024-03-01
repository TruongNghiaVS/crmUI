import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';

import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import GroupEmpService from '../../services/GroupEmpService';
import { toast } from 'react-toastify';
import {GiSightDisabled} from 'react-icons/gi';
const ModelAddUser = (props) => {
    


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

            let isActive =0;
            if( dataItem.isActive == 1)
            {
                isActive =1;
            }
          
            setmodel((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              id: dataItem.id,
              name: dataItem.name,
              isActive:(dataItem.isActive==true)?1:0,
              code: dataItem.code,
              managerId: dataItem.managerId

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

        ;
        if(dataItem.id =="-1")
        {
            

            setmodel((prevalue) => {
                return {
                  ...prevalue,   // Spread Operator               
                  id: dataItem.id,
                  fullName: dataItem.fullName,
                  userName: dataItem.userName, 
                  phoneNumber: dataItem.phoneNumber,
                  email: dataItem.email, 
                  lineCode: dataItem.lineCode,
                  address: dataItem.address,
                  companyName: dataItem.companyName,
                  roleEm: "1",
                  isView: false
                }
              })
             
          
        }

        else 

        {
            
          
            enableEdit(true);

            const bodyRequest = {
                id:  dataItem.id,
                
              
              };
              
              GroupEmpService.getById(ConstantData.URL_GroupEmployee_GetById,ConstantData.HEADERS,
                bodyRequest,
                handleDisplayData, 
                handleDisplayDataErro);


            return;
            
        }


        

        
        

        

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
    
    // const AddEmploy =(event)=> {
      
    // }
    const  AddEmploy = (event) => { 

        
        const employeeAdd = {
            code: model.code,
            name:  model.name,
            managerId: model.managerId,
            isActive: model.isActive
          };
    

       
   
        GroupEmpService.add(ConstantData.URL_GroupEmployee_Add,ConstantData.HEADERS,
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
    
        const modelUpdate = {
            id: model.id,
            code: model.code,
            name:  model.name,
            managerId: model.managerId,
            isActive: model.isActive

          };

        GroupEmpService.update(ConstantData.URL_GroupEmployee_Update,ConstantData.HEADERS,
                                modelUpdate,
                                handleSucessUpdate, 
                                handleErrUpdate
                                );
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
                            <h4>Thêm mới nhóm</h4>
                    ) : 
                    (
                            <h4>Thông tin nhóm</h4>
                    )}
            </div>

            <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate   validated={validated}>

                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaUser /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        name ="code" placeholder="Tên nhóm" disabled ={isEdit}
                        onChange={handleInputChange} value = {model.code} required />
                        <Form.Control.Feedback type="invalid">
                                Trường bặt buộc
                        </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <FormControl  aria-label="Small" aria-describedby="inputGroup-sizing-sm"  name = "name"  placeholder="Mã nhóm" 
                           onChange={handleInputChange} value = {model.name} required />
                    </InputGroup>

    
                    <InputGroup className="mb-2">

                             <InputGroup.Text className="input-group-icon">
                                    <GiSightDisabled    />
                             </InputGroup.Text>
                             <Form.Select aria-label="Mã nhân viên" name ="managerId" onChange={handleInputChange} value = {model.managerId} >

                             <option  selected disabled >Chọn người quản lý</option>
                             {
                                  props.listManager.map((item, index) => {
                                            return  <option value={item.id}>{item.userName +"-" +item.fullName }</option>
                                  })
                              }
                              </Form.Select>
                    </InputGroup>

                    <InputGroup className="mb-2">
                       <InputGroup.Text className="input-group-icon">
                             <GiSightDisabled    />
                        </InputGroup.Text>

                        <Form.Select aria-label="Collection" name ="isActive" onChange={handleInputChange} value = {model.isActive==true?1:0}>
                                <option value= "1">Hoạt động</option>
                                <option selected value= "0">Không hoạt động</option>
                              
                        </Form.Select>
                    </InputGroup>
               
                </form>
            </div>

            <div className="footer-model">

                 {
                    model.id == "-1"  ? (
                    <button className="btn-model btn-add" onClick= {AddEmploy}>Lưu lại</button>
                ) : (
                        <button className="btn-model btn-add" hidden = {isView} onClick= {UpdateEmploy}>Cập nhật</button>
                )   }
              
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
            </div>
        </div>
    );
};
export default ModelAddUser;