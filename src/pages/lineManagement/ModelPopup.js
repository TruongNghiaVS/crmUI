import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';

import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/LineService';
import { toast } from 'react-toastify';
import { mode } from 'crypto-js';
const ModelPopup = (props) => {
    
    const [model  , setmodel]=useState({
       
        
    });

    const [validated, setValidated] = useState(false);
    const [isEdit, enableEdit] = useState(false);
    const [isView, enbaleView] = useState(false);
    const [isOperator, setOpeartor] = useState(false);



      const handleDisplayData = (data) => {
          let dataItem = data.value;

        if(data.statusCode == 200)
    
        {
           
            setmodel((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
                id: dataItem.id,
                name: dataItem.name,
                code: dataItem.code, 
                status: dataItem.status,
                updateByName: dataItem.updateByName,
                authorName: dataItem.authorName,
                updatedTime: dataItem.updatedTime,
                createdTime: dataItem.createdTime,
           
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
        if(dataItem.id =="-1")
        {
            setmodel((prevalue) => {
                return {
                  ...prevalue,   // Spread Operator               
                  id: dataItem.id,
                  name: dataItem.name,
                  code: dataItem.code, 
                 
                  updateByName: dataItem.updateByName,
                  authorName: dataItem.authorName,
                  updatedTime: dataItem.updatedTime,
                  createdTime: dataItem.createdTime
               
                }
              })
             
          
        }

        else 

        {
              enableEdit(true);
              const bodyRequest = {
              id:  dataItem.id,


              };

              EmployeeService.getById(
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
      
         const itemAdd = {
           
            name: model.name,
            code: model.code,
            status: model.status,
          

          };
          
          EmployeeService.add(
            itemAdd,
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
      
        const modelUpdate = {
            id: model.id,
            name: model.name,
            code: model.code, 
            status: model.status
          
        };

        EmployeeService.update(
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
                            <h4>Thêm mới</h4>
                    ) : 
                    (
                            <h4>Thông tin line</h4>
                    )}
            </div>

            <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate   validated={validated}>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaUser /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        name ="name" placeholder="Tên gợi nhớ" 
                        onChange={handleInputChange} value = {model.name} required />
                            <Form.Control.Feedback type="invalid">
                                    Trường bặt buộc
                            </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <FormControl  aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled ={isEdit} name = "code"
                          placeholder="Mã line"    onChange={handleInputChange} value = {model.code} required />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <Form.Select aria-label="Collection" name ="status" onChange={handleInputChange} value = {model.status}>
                                <option value="1">Đang dùng</option>
                                <option  value="2">Line trống</option>
                                <option  value="3">Vô hiệu hóa</option>
                              
                        </Form.Select>
                    </InputGroup>


                   
               </form>
            </div>

            <div className="footer-model">
              
              {
                    model.id == "-1"  ? (
                           <button className="btn-model btn-add" onClick= {AddEmploy}>Lưu lại</button>
                    ) : 
                    (
                            <button className="btn-model btn-add" hidden = {isView} onClick= {UpdateEmploy}>Cập nhật</button>
                    )   
                }
              
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
            </div>
        </div>
    );
};

export default ModelPopup;