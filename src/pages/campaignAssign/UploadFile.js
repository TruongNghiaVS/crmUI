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
import Swal from 'sweetalert2';

const UploadFile = (props) => {
    
    const [fileTran , setfilUPload]=useState({

    });

    const [id , setid]=useState("");


     useEffect(() => {

      
     }, []);

     const UploadFileServer = () => {
        
        var file = fileTran;
         Swal.fire({
            title: 'Đang xử lý!',
            html: 'Vui lòng <b></b> chờ trong giây lát.',
            didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
          
            },
          
            })
            .then((result) => {
                 if (result.dismiss === Swal.DismissReason.timer) {
         
                 }
            })
         var data = new FormData();
        data.append('fileData', file)
        data.append('id', props.idPass);
        fetch('http://118.69.182.32:7777/api/campagn/importDataById', {
            method: 'POST',
            body: data
        })
        .then((response) =>
        {
            if(response.status == "200")
            {
                return response.json();
            }
            else 
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Có lỗi',
                    text: 'Có lỗi xảy ra!'
                  })

            }
        } )
        .then((responseJson) => {

                if(responseJson.statusCode == 200)
                {
                        Swal.fire(
                            'Thao tác thành công',
                            'Đã import thành công.',
                            'success'
                        )
                }
                else 
                {
                        Swal.fire({
                            icon: 'error',
                            title: 'Có lỗi',
                            text: responseJson.value
                            // footer: '<a href="">?</a>'
                        })


                }  
         })
      
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Có lỗi',
                text: error
                // footer: '<a href="">?</a>'
              })
        });
        

     }

    const handleInputChange =(event)=> {
        
        var files = event.currentTarget.files;
        if(files.length < 1)
        {
             return;
        }
        var file= files[0];
        setfilUPload(file);
        return;

        Swal.fire({
            title: 'Đang xử lý!',
            html: 'Vui lòng <b></b> chờ trong giây lát.',
            didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
          
            },
          
            }).then((result) => {
                 if (result.dismiss === Swal.DismissReason.timer) {
         
                 }
            })

        var file= files[0];
        var data = new FormData();
        data.append('fileData', file)
        data.append('id', 1);
        fetch('http://118.69.182.32:7777/api/campagn/importDataById', {
            method: 'POST',
            body: data
        })
        .then((response) =>
        {
            if(response.status == "200")
            {

              
                return response.json();
                       
                
            }
            else 
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Có lỗi',
                    text: 'Có lỗi xảy ra!'
                    // footer: '<a href="">?</a>'
                  })

            }
        } )

        .then((responseJson) => {

                if(responseJson.statusCode == 200)
                {
                        Swal.fire(
                            'Thao tác thành công',
                            'Đã import thành công.',
                            'success'
                        )
                }
                else 
                {
                        Swal.fire({
                            icon: 'error',
                            title: 'Có lỗi',
                            text: responseJson.value
                            // footer: '<a href="">?</a>'
                        })


                }  
         })
      
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Có lỗi',
                text: error
                // footer: '<a href="">?</a>'
              })
        });

      
     }
    return (
        <div className="model">
            <div className="header-model">
                  <h4> Hoạt động</h4>
            </div>
             <div> 
                <storng> Chuyển case</storng>
                <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Chọn nhân viên chuyển đến:</Form.Label>
                      <InputGroup className="mb-2">
                    
                      <Form.Select
                          name="groupId"
                      
                        >
                            
                              <option value='0'>Nguyễn Trường Nghĩa_ nghiaNT15</option>
                         
                          
                        </Form.Select>
                      </InputGroup>
               </Form.Group>
               <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                     
                      <InputGroup className="mb-2">
                         <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Làm mới lại case"
                        />
                      </InputGroup>
               </Form.Group>


               <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Phân bổ lại case:</Form.Label>
                      <InputGroup className="mb-6">
                      <Form.Check type="radio"  name ="randomradio" label="Ngẫu nhiên" />
                            <Form.Check type="radio" name ="randomradio" label="Chọn" />
                      </InputGroup>
                    
                       
                     
               </Form.Group>

               <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Số lượng case:</Form.Label>
                      <InputGroup className="mb-2">
                    
                      <Form.Control
                          type="number" name ="token" placeholder="Số lượng case" 
                      />
                      </InputGroup>
               </Form.Group>
               
               


             </div>

             <div> 
                <storng> Rút case</storng>

             </div>
             <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate  >
                  
                   
                    
                </form>
            </div>

            <div className="footer-model">

                 <button className="btn-model btn-add" onClick= {UploadFileServer}>Import dữ liệu </button>
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
            </div>
        </div>
    );
};

export default UploadFile;