import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';

import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/MasterDataService';
import { toast } from 'react-toastify';
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

        ;
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
            id: model.id,
            fullName: model.fullName,
            displayName:model.displayName,
            hour: model.hour,
            day: model.day,
            groupId: groupId
        };

        EmployeeService.update(ConstantData.URL_masterdata_Update,ConstantData.HEADERS,
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
                            <h4>Thêm trạng thái mới</h4>
                    ) : 
                    (
                            <h4>Thông tin trạng thái</h4>
                    )}
            </div>

            <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate   validated={validated}>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaUser /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        name ="fullName" placeholder="Tên tháng thái" 
                        onChange={handleInputChange} value = {model.fullName} required />
                            <Form.Control.Feedback type="invalid">
                                    Trường bặt buộc
                            </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <FormControl  aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled ={isEdit} name = "code"  placeholder="Mã trạng thái"    onChange={handleInputChange} value = {model.code} required />
                    </InputGroup>


                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <FormControl  aria-label="Small" aria-describedby="inputGroup-sizing-sm"  name = "displayName"  placeholder="Tên Hiển thị"    onChange={handleInputChange} value = {model.displayName} required />
                    </InputGroup>
                    
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Giờ" name ="hour" onChange={handleInputChange}  value = {model.hour}  required />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaEnvelope /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Ngày"  name ="day"  onChange={handleInputChange}  value = {model.day}   />
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

export default ModelPopup;