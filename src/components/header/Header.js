import './Header.scss';
import { NavLink, useNavigate  } from 'react-router-dom';
import { FaUser, FaCaretDown } from 'react-icons/fa';
import React, { useState } from 'react';
import Model from '../model/Model';
import ModelChangePassword from './ModelChangePassword';
import LoginService from '../../services/LoginService';
const Header = ({ classHeader }) => {
    const [isHiddenProfile, setIsHiddenProfile] = useState(false);
    const [isOpenModel, setIsOpenModel] = useState(false);
    
    let navigate = useNavigate();

    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));
    console.log(jsonProfile);
    const roleUser = jsonProfile.role;
    const fullName = jsonProfile.name;

    const lineCode = jsonProfile.lineCode;

    var isHiddenMenu = false;
    if(roleUser === "2") {
        isHiddenMenu = true;
    } else {
        isHiddenMenu = false;
    }
     const handleChangePass = () => {
        console.log('change pass');
        setIsOpenModel(!isOpenModel);
    }

    const handleShowModel = () => {
        setIsHiddenProfile(false);
        setIsOpenModel(!isOpenModel);
    }

    const handleLogout = () => {
            var dataJson = {
                role: "",
                isLogin: 201
            };
            LoginService.logout( (response) => {
            if (response.statusCode === 200) {
                localStorage.setItem('user-info', JSON.stringify(dataJson));
                localStorage.removeItem('user-info');
                localStorage.removeItem('authorizeKey');
                navigate('/login');
            } else {

            }
          }, (error) => {
             console.log(error);
            // setIsLoading(false);
          });

      
    };

    return (
        <header className={classHeader}>
            <nav className='nav-header'>
                <ul className='menu'>
                    <li className='list-link'><NavLink className='nav-link link-main' to="/">Vietstar</NavLink></li>
                    <li className='list-link'>
                        <NavLink className='nav-link' to="/follow-up-new">Trang làm việc <FaCaretDown className='nav-icon icon-caret-down' /></NavLink>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><NavLink reloadDocument  className='nav-link' to="/follow-up-new/watch-list">Danh sách theo dõi</NavLink></li>
                            <li className='sub-list-link'><NavLink  reloadDocument className='nav-link' to="/follow-up-new/new-list">Danh sách mới phân</NavLink></li>
                            { isHiddenMenu ? <li className='sub-list-link'><NavLink  reloadDocument className='nav-link' to="/follow-up-new/data">Danh sách kho</NavLink></li>: <></> }
                        </ul>
                    </li>
                    <li className='list-link'>
                        <NavLink className='nav-link' to="/">Báo cáo <FaCaretDown className='nav-icon icon-caret-down' /></NavLink>
                        <ul className='sub-menu'>
                            {/* <li className='sub-list-link'><NavLink className='nav-link' to="/">BC chiến dịch gọi ra</NavLink></li> */}
                            <li  className='sub-list-link'><NavLink reloadDocument className='nav-link' to="/historical">BC Lịch sử tác động</NavLink></li>
                            {/* <li className='sub-list-link'><NavLink className='nav-link' to="/">BC theo khung giờ</NavLink></li> */}
                          
                            {/* <li className='sub-list-link'><NavLink className='nav-link' to="/">Nhập kết quả</NavLink></li> */}
                            <li className='sub-list-link'><NavLink className='nav-link' to="/bao-cao-ghi-am">Báo cáo ghi âm</NavLink></li>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/bao-cao-talktime">BC talktime</NavLink></li>
                             { isHiddenMenu ? <li className='sub-list-link'><NavLink  reloadDocument className='nav-link' to="/reportCDR">BC CDR</NavLink></li>: <></> }
                            <li className='sub-list-link'><NavLink className='nav-link' to="/report/login">BC Đăng nhập </NavLink></li>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/dashboard">Dashboard </NavLink></li>
                        </ul>
                    </li>
                    { isHiddenMenu ? <li className='list-link'>
                        <NavLink className='nav-link' to="/">Quản trị hệ thống <FaCaretDown className='nav-icon icon-caret-down' /></NavLink>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/campangn">Chiến dịch</NavLink></li>
                            <li className='sub-list-link'><NavLink reloadDocument  className='nav-link' to="/groupReason">Trạng thái phiếu</NavLink></li>
                            <li className='sub-list-link'><NavLink reloadDocument  className='nav-link' to="/user">Người dùng</NavLink></li>
                            <li className='sub-list-link'><NavLink reloadDocument className='nav-link' to="/danh-sach-nhom">Nhóm người dùng</NavLink></li>

                            <li className='sub-list-link'><NavLink reloadDocument className='nav-link' to="/masterData/quan-ly-phong-ban">Phòng Ban</NavLink></li>
                            <li className='sub-list-link'><NavLink reloadDocument className='nav-link' to="/masterData/quan-ly-nguoi-than">Mối quan hệ</NavLink></li>
                            <li className='sub-list-link'><NavLink reloadDocument className='nav-link' to="/masterData/quan-ly-trang-thai-follow">Trạng thái theo dõi case</NavLink></li>
                        </ul>
                    </li> : <></>}
                    <div className='nav-profile'>
                        <li className='list-link'><NavLink className='nav-link' to="">Xin chào {fullName}!</NavLink></li>
                        <li className='list-link link-icon' 
                            onClick={() => setIsHiddenProfile(!isHiddenProfile)}>
                            <FaUser className='nav-icon icon-user' />
                            <FaCaretDown className='nav-icon icon-caret-down' />
                        </li>
                        { isHiddenProfile ? <div className="box-profile">
                            <span className="change-pass" onClick={() => handleShowModel()}>Đổi mật khẩu</span>
                            <span className="change-pass">Line gọi: {lineCode}</span>
                            <span className="logout" onClick={() => handleLogout()}>Đăng xuất</span>
                        </div> : <></>}
                    </div>
                </ul>
            </nav>
            { isOpenModel && <Model content={<ModelChangePassword handleSave={handleChangePass} handleClose={handleShowModel} />} handleClose={handleShowModel} /> }
        </header>
    );
};

export default Header;