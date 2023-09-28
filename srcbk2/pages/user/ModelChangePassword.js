import { FaLock } from 'react-icons/fa';
import { InputGroup, FormControl } from 'react-bootstrap';
import EmployeeService from '../../services/EmployeeService';
import  { useState } from "react";
import { NavLink, useNavigate  } from 'react-router-dom';

import Swal from 'sweetalert2'
const ModelChangePassword1 = (props) => {

    const [model  , setmodel]=useState({
        PaswordNew: '',
        RepeatPassword: '',
        userId: props.userId
        
    });
    let navigate = useNavigate();

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
    
    const handleChangePass = () => {
        var dataJson = {
            PaswordNew: model.PaswordNew,
            RepeatPassword: model.RepeatPassword,
            userId: model.userId
        };
        
        var dataJson1 = {
            role: "",
            isLogin: 201
        };
        console.log(dataJson);
        EmployeeService.ResetPassword( dataJson, (response) => {
             if (response.statusCode === 200) {
                    localStorage.setItem('user-info', JSON.stringify(dataJson1));
                    localStorage.removeItem('user-info');
                    localStorage.removeItem('authorizeKey');

                    Swal.fire({
                        
                        icon: 'success',
                        title: 'Đổi thành công',
                        showConfirmButton: false,
                        
                    })
                  
        } else {
                Swal.fire({
                    icon: 'error',
                    text: response.value,
                
                })
        }
      }, (error) => {
         console.log(error);
        // setIsLoading(false);
      });
        
    }


    return (
        <div className="model">
            <div className="header-model">
                <h4>Đổi mật khẩu</h4>
            </div>

            <div className="main-model">
                <form className='form-login'>
                    <label for="basic-url">Nhập mật khẩu mới</label>
                    <InputGroup> 
                        <InputGroup.Text className="input-group-icon"><FaLock /></InputGroup.Text>
                        <FormControl name ="PaswordNew"
                        onChange={handleInputChange} value = {model.PaswordNew} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <label for="basic-url">Nhập lại mật khẩu mới</label>
                    <InputGroup >
                        <InputGroup.Text className="input-group-icon"><FaLock /></InputGroup.Text>
                        <FormControl  name ="RepeatPassword"
                        onChange={handleInputChange} value = {model.RepeatPassword} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                </form>
            </div>
             <div className="footer-model">
                <button className="btn-model btn-add"  onClick={handleChangePass}>Đổi mật khẩu</button>
                <button className="btn-model btn-closes" onClick={props.handleClose}>Hủy</button>
            </div>
        </div>
    );
};

export default ModelChangePassword1;