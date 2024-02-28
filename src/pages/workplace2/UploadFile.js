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

     const [ dataNoted , setdataNoted]=useState([]);
     useEffect(() => {

        getDataNoted();
      
     }, []);

     const getDataNoted =(event)=> {
        const bodySearch = {
            ProfileId :  props.idPass
        };
       
        EmployeeService.GetAllNoted( bodySearch, (response) => {
            if (response.statusCode === 200) {
                debugger;
                setdataNoted(response.value.data);
            } else {

            }
      }, (error) => {
       
      });
     }

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
                title: 'Thao tác lưu ghi chú thông tin cho hợp đồng này?',
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
                 getDataNoted();
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
            <div className="footer-model">
                 <button className="btn-model btn-add" onClick= {UploadFileServer}>Thêm ghi chú </button>
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
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
                    { 
                            dataNoted.map((item, index) =>
                             {
                                var zone  = "America/New_York";

                                const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone
                                let timeCalText = moment(item.createAt).zone("+7:00").format("DD/MM/YYYY HH:mm:ss");
                                if(item.createAt < "2023-06-19T15:07:50")
                                {
                                    timeCalText = moment(item.createAt).zone("+14:00").format("DD/MM/YYYY HH:mm:ss");
                                }  
                            return (
                                    <tr>
                                        <td>{timeCalText}</td>
                                        <td>{item.author}</td>
                                        <td>{item.noted}</td>
                                    </tr>

                            );
                            })
                    }
                    
                   
                    </table>
            </div>

           


            
        </div>
    );
};

export default UploadFile;