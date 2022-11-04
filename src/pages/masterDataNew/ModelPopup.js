import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';

import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/MasterDataNewService';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
const ModelPopup = (props) => {
    let { edit } = useParams();
    let typeGet =-1;
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
              name: dataItem.name,
              code: dataItem.code, 
              type:typeGet
           
            }
          })
        }
      };

      const handleDisplayDataErro = (event) => {
        
      };

    useEffect(() => {

        let dataItem = props.dataItem;
      
        if(edit=="quan-ly-nguoi-than")
        {
            document.title = "Danh sách người thân";
            typeGet = 1;
        }
        else if(edit=="quan-ly-phong-ban")
        {
            document.title = "Danh sách phòng ban";
            typeGet = 2;
        }
    
        else if(edit=="quan-ly-trang-thai-follow")
        {
            document.title = "Danh sách trạng thái follow";
            typeGet = 3;
        }
        else 
        {
            document.title = "danh sách masterdata";
            typeGet = -1;
        }
    
        
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
                  fullName: dataItem.name,
                  code: dataItem.code, 
                  type:typeGet
                
               
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


        let groupId =   window.location.pathname.split("/").pop();
      
        
        const employeeAdd = {
            Code:  model.code,
            name:  model.name, 
            type: model.type
           
          };
          
          EmployeeService.add(
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
            type: props.typeMasterData,
            code: model.code,
            name:model.name,
         
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
                            <h4>Thông tin</h4>
                    )}
            </div>

            <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate   validated={validated}>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaUser /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        name ="name" placeholder="Tên" 
                        onChange={handleInputChange} value = {model.name} required />
                            <Form.Control.Feedback type="invalid">
                                    Trường bặt buộc
                            </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <FormControl  aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled ={isEdit} name = "code"  placeholder="Mã"    onChange={handleInputChange} value = {model.code} required />
                    </InputGroup>


                  
                    
                   
               
                </form>
            </div>

            <div className="footer-model">

                 {
                    model.id == "-1"  ? (
                    <button className="btn-model btn-add" onClick= {AddEmploy}>Lưu lại</button>
                    ) : (
                    <button className="btn-model btn-add" hidden = {isView} onClick= {UpdateEmploy}>Cập nhật</button>
                    )
                   }
              
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
            </div>
        </div>
    );
};

export default ModelPopup;