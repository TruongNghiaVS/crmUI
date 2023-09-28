import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import moment from "moment"; 
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/MasterDataService';
import { toast } from 'react-toastify';


const ModelPopup = (props) => {
    
    const [model , setmodel]=useState({

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
            console.log( dataItem);
            
            setmodel((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                code:  dataItem.code,
                id: dataItem.id,
                displayName:  dataItem.displayName,
                status: true,
                beginTime: dataItem.beginTime,
                endTime: dataItem.endTime,
                priority: dataItem.priority,
                shortDes: dataItem.shortDes
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
                    id:  dataItem.id
                };
                EmployeeService.getById(
                ConstantData.URL_campagn_GetById,
                ConstantData.HEADERS,
                bodyRequest,
                handleDisplayData, 
                handleDisplayDataErro);
            
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
  
    const  AddEmploy = (event) => { 
        
            const employeeAdd = {
                code:  model.code,
                displayName:  model.displayName,
                status: true,
                sumCount:0,
                processingCount: 0,
                closedCount: 0,
                beginTime: model.beginTime,
                endTime: model.endTime,
                priority: 1,
                ShortDes: model.shortDes
            
            };
            EmployeeService.add(
            ConstantData.URL_campagn_Add,
            ConstantData.HEADERS,
            employeeAdd,
            handleSucess, 
            handleErr);
    }
       

    
    const handleSucess = (data) => {    
        if(data.statusCode == 200)
        {
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
                displayName:  model.displayName,
                status: true,
                sumCount:0,
                processingCount: 0,
                closedCount: 0,
                beginTime: model.beginTime,
                endTime: model.endTime,
                priority: model.priority,
                ShortDes: model.shortDes
            };
            EmployeeService.update(
                ConstantData.URL_campagn_Update,
                ConstantData.HEADERS,
                modelUpdate,
                handleSucessUpdate, 
                handleErrUpdate
            );
            props.handleUpdate(model);

    }
    const dateForPicker = (dateString) => {
        return moment(new Date(dateString)).format('YYYY-MM-DD')
    };
    
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
                            <h4>Thêm chiến dịch mới</h4>
                    ) : 
                    (
                            <h4>Thông tin chiến dịch</h4>
                    )}
            </div>

            <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate   validated={validated}>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaUser /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        name ="displayName" placeholder="Tên chiến dịch" 
                        onChange={handleInputChange} value = {model.displayName} required />
                        <Form.Control.Feedback type="invalid">
                                Trường bặt buộc
                        </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <FormControl  aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled ={isEdit} name = "code"
                          placeholder="Mã chiến dịch"   
                           onChange={handleInputChange} 
                           value = {model.code} required />
                    </InputGroup>
                    
                   <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                         <Form.Control
                            type="date"
                            name="beginTime"
                            value ={dateForPicker(model.beginTime)}
                            placeholder="Ngày bắt đầu"
                            onChange={handleInputChange} 
                        
                             />

                    </InputGroup>
                    
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <Form.Control
                        type="date"
                        name="endTime"
                        value ={dateForPicker(model.endTime)}
                        placeholder="Ngày kết thúc"
                        onChange={handleInputChange} 
                     />
                    </InputGroup>

                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaEnvelope />
                        </InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Mô tả"  name ="shortDes"  onChange={handleInputChange}  value = {model.shortDes}   />
                    </InputGroup>

                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon">
                             <FaEnvelope />
                        </InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Độ ưu tiên"  name ="priority"  onChange={handleInputChange}  value = {model.priority}   />
                    </InputGroup>
              </form>
            </div>

            <div className="footer-model">

                {
                        ( model.id == "-1" )  ? (
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