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
        // data.append('id', props.idPass);
        fetch('http://192.168.1.2:8888/api/campagn/importDataSkipInfo', {
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

    const handleInputChange =(event)=> {
        
        var files = event.currentTarget.files;
        if(files.length < 1)
        {
             return;
        }
        var file= files[0];
        setfilUPload(file);
        
      
     }
    return (
        <div className="model">
            <div className="header-model">
                  <h4>Nhập dữ liệu import</h4>
            </div>
            
             <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate  >
                  

                    <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Chọn file excel</Form.Label>
                            <Form.Control type="file" accept=".xlsx, .xls, .csv"  onChange={handleInputChange} />
                     </Form.Group>

                     <Form.Group  className="mb-3">
                            <a href='javsacript:void(0)'>Tải file template</a>
                     </Form.Group>
                    
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