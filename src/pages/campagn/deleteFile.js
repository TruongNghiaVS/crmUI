import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import moment from "moment"; 
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import BaseService from '../../services/BaseService';

import EmployeeService from '../../services/MasterDataService';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const DeleteFile = (props) => {
    
    const [fileTran , setfilUPload]=useState({

    });

    const [id , setid]=useState("");


     useEffect(() => {
      

      
     }, []);

     const UploadFileServer = () => {


        
        var file = fileTran;
    
        if(Object.keys(file).length === 0)
        {
            Swal.fire({
                icon: 'error',
                title: 'Chưa có file',
                text: 'Vui lòng chọn lại file!'
                // footer: '<a href="">?</a>'
              })
        }
      
     
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
        fetch('http://192.168.1.3:7777/api/campagn/deleteProfile', {
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
                            'Xoá thành công.',
                            'success'
                        )
                }
                else 
                {
                        Swal.fire({
                            icon: 'error',
                            title: 'Không xoá được, vui lòng liên hệ IT',
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
                  <h4>Nhập file excel dữ liệu cần xoá</h4>
            </div>
            
             <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate  >
                  

                    <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Chọn file excel</Form.Label>
                            <Form.Control type="file" accept=".xlsx, .xls, .csv"  onChange={handleInputChange} />
                     </Form.Group>

                     <Form.Group  className="mb-3">
                            <a href='/template/campagn/deleteCase.xlsx' download >Tải file template</a>
                     </Form.Group>
                    
              </form>
            </div>

            <div className="footer-model">

                 <button className="btn-model btn-add" onClick= {UploadFileServer}>Xoá case </button>
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
            </div>
        </div>
    );
};

export default DeleteFile;