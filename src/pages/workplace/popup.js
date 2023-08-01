import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import moment from "moment"; 
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Popup = (props) => {
    
    const [fileTran , setfilUPload]=useState({

    });
    const [model , setmodel]=useState({

    });
  
    const [id , setid]=useState("");


     useEffect(() => {
      

      
     }, []);
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
     const UploadFileServer = () => {
        
        if(model.noteIm =='')
        {
            Swal.fire({
                icon: 'error',
                title: 'Chưa điền ghi chú',
                text: 'Chưa điền ghi chú',
                footer: 'Yêu cầu thông tin!'
            })
            return;
        }
   
      
        
      
       
        
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
        fetch('http://192.168.1.2:8888/api/campagn/importDataById', {
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
                  <h4>Ghi chú thông tin</h4>
            </div>

           
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={5}  name ="noteIm" onChange={handleInputChange1} 
                       value = {model.noteIm}  />
                </Form.Group>
                <div className="footer-model">

<button className="btn-model btn-add" onClick= {UploadFileServer}>Thêm ghi chú </button>
<button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
</div>

<table id="customers">
  <tr>
    <th>STT</th>
    <th>Ngày</th>
    <th>Ghi chú</th>
  </tr>
  <tr>
    <td>1</td>
    <td>28/07/2023</td>
    <td>Đang tương tác</td>
  </tr>
 
</table>

            
            
        </div>
    );
};

export default Popup;