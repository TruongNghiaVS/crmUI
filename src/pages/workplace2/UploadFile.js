import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import moment from "moment"; 
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import BaseService from '../../services/BaseService';

import EmployeeService from '../../services/NoteCampagnService';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const UploadFile = (props) => {
     const [id , setid]=useState("");


     useEffect(() => {
      

      
     }, []);

     const [model , setmodel]=useState({

     });
     const handleInputChange1 =(event)=> {
       
        let valueControl = event.target.value;
        let nameControl = event.target.name;
        setmodel((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: valueControl
            }
         })
     }

 
     const UploadFileServer = () =>   {
        if(model == '' || model == '-1')
        {
            Swal.fire({
                icon: 'error',
                title: 'Chưa có thông tin ghi chú',
                text: 'Yêu cầu nhập thông tin ',
                footer: 'Yêu cầu nghiệp vụ!'
            })
            return;
        }
   
        saveImpact();
    }
    const saveImpact = ()=> {
        const bodyUpdate = {
            profileId: props.idPass, 
            noted: model.noteIm
        };
          
             Swal.fire(
            {
                title: 'Bạn có muốn lưu lịch sử tác động',
                text: "",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Lưu'
            })
            .then((result) => {
            if (result.isConfirmed) {
                const modelUpdate = model;
                let profileId =   "1";

                EmployeeService.add(
                    bodyUpdate,
                    handleSucessUpdateImpact, 
                    handleErrUpdateImpact
                );
            }
        })

}
const handleSucessUpdateImpact = (data) => {
    if(data.statusCode == 200)
   {
           Swal.fire({
               
               icon: 'success',
               title: 'Lưu thành công',
            
           }).then(function() {
               window.open("/follow-up-new/new-list ","_self");
           });
          
   }
   else 
   {

       Swal.fire({
           icon: 'error',
           title: 'lưu thất bại',
           text: 'Thao tác thất bại',
         
         })
   }
}

const handleErrUpdateImpact = (data) => {



}
  
    return (
        <div className="model">
            <div className="header-model">
            <h4>Ghi chú thông tin</h4>
            </div>
            
             <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate  >
                  
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={5}  name ="noteIm" onChange={handleInputChange1} 
                       value = {model.noteIm}  />
                </Form.Group> 
                    
              </form>
            </div>

            <div className='datalist'>
                    <table>
                    <tr>
                    <th>Ngày</th>
                    <th>Bởi</th>
                    <th>Nội dung</th>
                    </tr>
                    <tr>
                    <td>{props.idPass}</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    </tr>
                    <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    </tr>
                    <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    </tr>
                    <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                    </tr>
                    <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                    </tr>
                    <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                    </tr>
                    </table>
            </div>

            <div className="footer-model">
                 <button className="btn-model btn-add" onClick= {UploadFileServer}>Thêm ghi chú </button>
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
            </div>


            
        </div>
    );
};

export default UploadFile;