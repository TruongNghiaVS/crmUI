import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';

import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import PackageService from '../../services/PackageService';
import DpdService from '../../services/DpdService';
import EmployeeService from '../../services/EmployeeService';
import { toast } from 'react-toastify';
import { mode } from 'crypto-js';

import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const ModelPopup = (props) => {
  const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));
  const roleUser = jsonProfile.role;
    const [model  , setmodel]=useState({ 

       value: [
          ],

        idUser: [
        
        ]

        
    });

    const [model1  , setmodel1]=useState({ 

      value: [
         ],

         dataUser: [
          
         ],
       idUser: [
       
       ]

       
   });
    const animatedComponents = makeAnimated();
    let options = [
      
         
     ]


     const optionsUser = [
      
      { value: '1', label: '1-30' },
      { value: '2', label: '31-60' },
      { value: '3', label: '61-90' }
 ]


     
    const [validated, setValidated] = useState(false);
    const [isEdit, enableEdit] = useState(false);
    const [isView, enbaleView] = useState(false);
    const [isOperator, setOpeartor] = useState(false);

    const getALLDPD = ()=> {
        
      let bodyRequest = {
             
        };
      DpdService.GetAll( bodyRequest, (response) => {
      if (response.statusCode === 200) {
       
          let dataDPD= response.value.data;

          let items =[]
          dataDPD.forEach(dataDPD => {

            var item = {
              value: dataDPD.id, 
              label:dataDPD.name
            };

            items.push(item);
           
          
          });

          options = items;
          setmodel1((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              value: items
            }
          })




      } else {



        }
      }, (error) => {

      });

      }

      const getAllEmployee = ()=> {
        
            let bodyRequest = {
                  
              };
              EmployeeService.GetAll(ConstantData.URL_Employee_GetALl, ConstantData.HEADERS, bodyRequest, (response) => {
            if (response.statusCode === 200) {
            
                let dataDPD= response.value.data;
      
                let items =[]
              
                options = items;
                setmodel1((prevalue) => {
                  return {
                    ...prevalue,   // Spread Operator               
                    dataUser: dataDPD
                  }
                })
              
            } else {
      
      
      
              }
            }, (error) => {
      
            });
  
        }



        
      
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
                value: JSON.parse(dataItem.value)
           
            }
          })



          // setmodel1((prevalue) => {
          //   return {
          //     ...prevalue,   // Spread Operator               
          //     value:dataItem.value
           
          //   }
          // })
        }
      };

      const handleDisplayDataErro = (event) => {
        
      };

      let isInit = false;

    useEffect(() => {
       
      if( isInit ==true)
      {
        return;
      }

       getALLDPD();
       getAllEmployee();

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

              PackageService.getById(
              bodyRequest,
              handleDisplayData, 
              handleDisplayDataErro);
              return;

        }

        isInit = true;

  }, []);

    const handleInputChange =(event)=> {
      
        let valueControl = event.target.value;
        let nameControl = event.target.name;
        console.log( valueControl);
        debugger;

        setmodel((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: valueControl
            }
          })
     
    }

    const handleInputChangeSelectDpd =(event)=> {
      

      let nameControl ="value";
      // console.log( valueControl);
      // debugger;

      setmodel((prevalue) => {
          return {
            ...prevalue,   // Spread Operator               
            [nameControl]: event
          }
        })
   
  }


  
  const handleInputChangeUserId =(event)=> {
      

    let nameControl ="idUser";
    // console.log( valueControl);
    // debugger;

    setmodel((prevalue) => {
        return {
          ...prevalue,   // Spread Operator               
          [nameControl]: event
        }
      })
 
}
  
    
    // const AddEmploy =(event)=> {
      
    // }
    const  AddEmploy = (event) => {

         const itemAdd = {
           
            name: model.name,
            type: "1", 
            value: JSON.stringify(model.value),
            idUser: model.idUser,
            status: model.status
          };
          
          PackageService.add(
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
            type: "1", 
            value: JSON.stringify(model.value),
            idUser: model.idUser,
            status: model.status
          
        };
        
        PackageService.update(
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
                            <h4>Thông tin gói</h4>
                    )}
            </div>

            <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate   validated={validated}>
                <Form.Group className="mb-3">
                      <Form.Label>Tên gợi nhớ:</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaUser /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        name ="name" placeholder="Tên gợi nhớ" 
                        onChange={handleInputChange} value = {model.name} required />
                            <Form.Control.Feedback type="invalid">
                                    Trường bặt buộc
                            </Form.Control.Feedback>
                    </InputGroup>
                   </Form.Group>

              
                    <Form.Group className="mb-3">
                  
                        <Form.Label>Loại gói:</Form.Label>
                        <Form.Select aria-label="Collection" name ="type" onChange={handleInputChange} value = {model.type}>
                                <option value="-1">Chọn loại gói</option>
                                <option value="1">Tất cả</option>
                                <option  value="2">Dự án</option>
                                <option  value="3">Id user</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Chọn DPD tương ứng:</Form.Label>
                      <Select options={model1.value} 
                        className="basic-multi-select"
                        classNamePrefix="select"
                        components={animatedComponents}
                        isMulti
                        name ="dpdvalue" onChange={handleInputChangeSelectDpd} 
                        value={model.value}
                      />

                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Label>Chọn User Id tương ứng:</Form.Label>
                 
                      <Form.Select aria-label="Collection" name ="idUser" onChange={handleInputChange} value = {model.idUser}>
                            <option  value="-1">Gán cho user</option>
                              {
                                model1.dataUser.map ((item, index) => {
                                      return  <option value={item.id}>{item.fullName}</option>    
                                })
                              }
                        </Form.Select>
                      </Form.Group>  
                      <Form.Group className="mb-3">
                      <Form.Label>Trạng thái:</Form.Label>
                     
                      <Form.Select aria-label="Collection" name ="status" onChange={handleInputChange} value = {model.status}>
                              <option value="1">Hoạt động</option>
                              <option  value="2">Không hoạt động</option>
                            
                      </Form.Select>
                  </Form.Group>
                    
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