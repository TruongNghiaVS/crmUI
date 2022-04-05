import './Login.scss';
import React, { useState } from 'react';
import { FaUser, FaKey, FaPhoneAlt } from 'react-icons/fa';

const Login = () => {
  const [valueSelect, setValueSelect] = useState("vn");

  const handleChange = (event) => {
    setValueSelect(event.target.value);
  }

  return (
		<div className='login'>
      <p className='logo-login'><img alt='logo' src='http://s6.realtime.vn:8082/crm/layout/assets/img/logo.png?fbclid=IwAR1Fdc7PhXTzGXqlIRMRddjzqe8ImFwBcryX_9R7hwmmnAegXIy1vzOs2jY' /></p>
      <form className='form-login'>
        <div className='input-container'>
          <label className='icon-lbl'><FaUser /></label>
          <input className='input-field' type="text" name="username" placeholder="Username" required />
        </div>
        <div className="input-container">
          <label className='icon-lbl'><FaKey /> </label>
          <input className='input-field' type="password" name="password" placeholder="Password" required />
        </div>
        <div className="input-container">
          <label className='icon-lbl'><FaPhoneAlt /> </label>
          <input className='input-field' type="text" name="extension" placeholder="extension" required />
        </div>

        <select className='sl-language' value={valueSelect} onChange={(event) => handleChange(event)}>
          <option value="vn">Vietnamese</option>
          <option value="en">English</option>
        </select>

        <div className="button-container">
          <input className='btn-submit' type="submit" value="Sign in" />
        </div>
      </form>
    </div>
	);
}

export default Login;