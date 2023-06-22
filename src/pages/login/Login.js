import './Login.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaKey, FaPhoneAlt } from 'react-icons/fa';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import ConstantData from '../../utils/Constants';
// import md5 from 'crypto-js/md5';
import md5 from 'md5';
import jwt_decode from "jwt-decode";
import LoginService from '../../services/LoginService';
import { InputGroup, FormControl } from 'react-bootstrap';

const Login = () => {
  const [valueSelect, setValueSelect] = useState("vn");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [extension, setExtension] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    let isUseEffect = true;

    if (isUseEffect) {
      const userInfo =  JSON.parse(localStorage.getItem('user-info'));
      if (userInfo === null || userInfo.isLogin === 201) {
        return;
      } else {
        navigate('/follow-up-new/new-list');
        setIsLoading(false);
      }
    }

    return () => { isUseEffect = false };
  }, [navigate]);

  const handleChange = (event) => {
    setValueSelect(event.target.value);
  }
  const LoginSucess = (data) => {
    setErrorUsername("");
    setErrorLogin("");
     var userInfo = jwt_decode(data);
    console.log(userInfo);
    var dataJson = {
      role: userInfo.RoleUser,
      name: userInfo.Name,
      userId: userInfo.userId,
      lineCode: userInfo.lineCode,
      userName: userInfo.userName,
      isLogin: true
    };
    localStorage.setItem('authorizeKey', JSON.stringify(data));
    localStorage.setItem('user-info', JSON.stringify(dataJson));

    navigate('/follow-up-new/new-list');
  };
  // function LoginSucess(data)
  // {

  //   setErrorUsername("");
  //   setErrorLogin("");
  //    var userInfo = jwt_decode(data.token);

  //   var dataJson = {
  //     role: userInfo.role,
  //     isLogin: data.status
  //   };
  //   localStorage.setItem('user-info', JSON.stringify(dataJson));

  //   navigate('/follow-up');

  // }
  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "") {
      setErrorUsername("Username is not empty!");
      setErrorPassword("");
      setErrorLogin("");
      return false;
    } else if (password === "") {
      setErrorUsername("");
      setErrorLogin("");
      setErrorPassword("Password is not empty!");
      return false;
    } else {
      setErrorPassword("");
      setIsLoading(true);

      // const body = {
      //userName: username,
      //password: md5(password),
      // };
      const body = {
        userName: username,
        password: password,
      };


      LoginService.login(ConstantData.URL_LOGIN, ConstantData.HEADERS, body, (response) => {
    
        if (response.statusCode === 200) {
          LoginSucess(response.value);
        } else {

          setErrorUsername("");
          setErrorLogin("");
          setErrorLogin("Đăng nhập thất bại");
          setIsLoading(false);
        }
      }, (error) => {
        console.log(error);
        setIsLoading(false);
      });
    }
  }

  return (
		<div className='login'>
      {isLoading ? <LoadingSpinner /> : <div></div>}
      <p className='logo-login'><img alt='logo' src='/HCMLawFirm.png' /></p>
      <form className='form-login'>
        <div className='input-container'>
          <InputGroup className="mb-2">
            <InputGroup.Text className="input-group-icon"><FaUser /></InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </InputGroup>
          <p className='error-message'>{ errorUsername }</p>
        </div>
        <div className="input-container">
          <InputGroup className="mb-2">
            <InputGroup.Text className="input-group-icon"><FaKey /></InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="password"
              placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </InputGroup>
          <p className='error-message'>{ errorPassword }</p>
        </div>
     

        <select className='sl-language' value={valueSelect} onChange={(event) => handleChange(event)}>
          <option value="vn">Vietnamese</option>
          <option value="en">English</option>
        </select>

        <p className='error-message'>{ errorLogin }</p>

        <div className="button-container">
          <input className='btn-submit' type="submit" value="Sign in" onClick={(event) =>handleSubmit(event)} />
        </div>
      </form>
    </div>
	);
}

export default Login;