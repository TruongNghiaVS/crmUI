import './Login.scss';
import React, { useState, useEffect } from 'react';
import { FaUser, FaKey, FaPhoneAlt } from 'react-icons/fa';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import ConstantData from '../../utils/Constants';
import md5 from 'crypto-js/md5';
import jwt_decode from "jwt-decode";
import LoginService from '../../services/LoginService';

const Login = () => {
  const [valueSelect, setValueSelect] = useState("vn");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [extension, setExtension] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (event) => {
    setValueSelect(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const body = {
      username: username,
      password: md5(password).toString(),
    };

    await LoginService.login(ConstantData.URL_LOGIN, ConstantData.HEADERS, body, (response) => {
      console.log(response);
      var userInfo = jwt_decode(response.data.token);
      console.log(userInfo);

      var dataJson = {
        role: userInfo.role,
        isLogin: response.status
      };
      localStorage.setItem('user-info', JSON.stringify(dataJson));

      setIsLoading(false);
    });
  }

  useEffect(() => {
    const userInfo =  localStorage.getItem('user-info');
    console.log(userInfo);
  });

  return (
		<div className='login'>
      {isLoading ? <LoadingSpinner /> : <div></div>}
      <p className='logo-login'><img alt='logo' src='http://s6.realtime.vn:8082/crm/layout/assets/img/logo.png?fbclid=IwAR1Fdc7PhXTzGXqlIRMRddjzqe8ImFwBcryX_9R7hwmmnAegXIy1vzOs2jY' /></p>
      <form className='form-login'>
        <div className='input-container'>
          <label className='icon-lbl'><FaUser /></label>
          <input className='input-field' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-container">
          <label className='icon-lbl'><FaKey /> </label>
          <input className='input-field' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-container">
          <label className='icon-lbl'><FaPhoneAlt /> </label>
          <input className='input-field' type="text" placeholder="extension" value={extension} onChange={(e) => setExtension(e.target.value)} required />
        </div>

        <select className='sl-language' value={valueSelect} onChange={(event) => handleChange(event)}>
          <option value="vn">Vietnamese</option>
          <option value="en">English</option>
        </select>

        <div className="button-container">
          <input className='btn-submit' type="submit" value="Sign in" onClick={(event) =>handleSubmit(event)} />
        </div>
      </form>
    </div>
	);
}

export default Login;