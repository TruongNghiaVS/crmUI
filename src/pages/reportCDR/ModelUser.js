import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';

import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/EmployeeService';
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
              fullName: dataItem.fullName,
              status:isActive,
              userName: dataItem.userName, 
              phoneNumber: dataItem.phoneNumber,
              email: dataItem.email, 
              roleEm: dataItem.roleId,
              address: dataItem.address,
              lineCode: dataItem.lineCode,
              companyName: dataItem.companyName
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
              
              EmployeeService.add(ConstantData.URL_Employee_GetById,ConstantData.HEADERS,
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
            UserName:  model.userName,
            RoleId:  model.roleEm,
            lineCode: model.lineCode,
            Email: model.email,
            FullName: model.fullName,
            Phone: model.phoneNumber,
            Pass: model.password,
            status: model.status
          };
    

       
   
        EmployeeService.add(ConstantData.URL_Employee_Add,ConstantData.HEADERS,
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
            lineCode: model.lineCode,
            RoleId:  model.roleEm,
            Email: model.email,
            FullName: model.fullName,
            Phone: model.phoneNumber,
            Address: model.address,
            companyId:model.companyName,
            status: model.status


          };

        EmployeeService.update(ConstantData.URL_Employee_Update,ConstantData.HEADERS,
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
                            <h4>Thêm người dùng mới</h4>
                    ) : 
                    (
                            <h4>Thông tin người dùng</h4>
                    )}
            </div>

            <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate   validated={validated}>

                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaUser /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        name ="fullName" placeholder="Tên người dùng" 
                        onChange={handleInputChange} value = {model.fullName} required />
                            <Form.Control.Feedback type="invalid">
                                    Trường bặt buộc
                            </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <FormControl  aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled ={isEdit} name = "userName"  placeholder="Tên đăng nhập" 
                           onChange={handleInputChange} value = {model.userName} required />
                    </InputGroup>

                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <FormControl  aria-label="Small" aria-describedby="inputGroup-sizing-sm"  
                        name = "lineCode"  placeholder="Mã gọi"    onChange={handleInputChange} value = {model.lineCode} required />
                    </InputGroup>


                    {
                 model.id == "-1" ? (
                    <InputGroup className="mb-2">
                    <InputGroup.Text className="input-group-icon"><FaLock /></InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name ="password" type="password" placeholder="Mật khẩu" onChange={handleInputChange} value = {model.password}  required />
                </InputGroup>
                ) : (
                    <div></div>
                )}
                  
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FaBuilding /></InputGroup.Text>
                        <Form.Select aria-label="Công ty" name = "companyName" 
                        onChange={handleInputChange} value = {model.companyName}>
                        <option selected value="1" >ACS</option>
                        <option value="2" >ACS2</option>
              
                        </Form.Select>

                        <Form.Select aria-label="Collection" name ="groupName" onChange={handleInputChange} value = {model.groupName}>
                                <option value="1">Collection</option>
                                <option selected value="2">Collection2</option>
                              
                        </Form.Select>

                        <Form.Select aria-label="Role nhân viên" name ="roleEm" onChange={handleInputChange} value = {model.roleEm} >
                            <option selected value="1">Điện thoại viên</option>
                            <option value="2">Admin</option>
                            <option value="3">Quản lý</option>
                        </Form.Select>

                    </InputGroup>
                    
                      <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Điện thoại" name ="phoneNumber" onChange={handleInputChange}  value = {model.phoneNumber}  required />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaEnvelope /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Email"  name ="email"  onChange={handleInputChange}  value = {model.email}   />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input-group-icon"><FaPortrait /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Địa chỉ liên hệ" name ="address" onChange={handleInputChange} value  = {model.address}  />
                    </InputGroup>

                    <InputGroup className="mb-2">
                       <InputGroup.Text className="input-group-icon">
                             <GiSightDisabled    />
                        </InputGroup.Text>

                        <Form.Select aria-label="Collection" name ="status" onChange={handleInputChange} value = {model.status}>
                                <option value= "1">Hoạt động</option>
                                <option selected value= "0">Vô hiệu hóa</option>
                              
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