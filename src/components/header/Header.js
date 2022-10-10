import './Header.scss';
import { NavLink, useNavigate  } from 'react-router-dom';
import { FaUser, FaCaretDown } from 'react-icons/fa';
import React, { useState } from 'react';
import Model from '../model/Model';
import ModelChangePassword from './ModelChangePassword';

const Header = ({ classHeader }) => {
    const [isHiddenProfile, setIsHiddenProfile] = useState(false);
    const [isOpenModel, setIsOpenModel] = useState(false);
    
    let navigate = useNavigate();

    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));
    const roleUser = jsonProfile.role;
    const fullName = jsonProfile.name;

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
        localStorage.setItem('user-info', JSON.stringify(dataJson));
        localStorage.removeItem('user-info');
        localStorage.removeItem('authorizeKey');
        navigate('/login');
    };

    return (
        <header className={classHeader}>
            <nav className='nav-header'>
                <ul className='menu'>
                    <li className='list-link'><NavLink className='nav-link link-main' to="/">ACS</NavLink></li>
                    <li className='list-link'>
                        <NavLink className='nav-link' to="/follow-up">Trang làm việc <FaCaretDown className='nav-icon icon-caret-down' /></NavLink>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><NavLink  className='nav-link' to="/follow-up/watch-list">Danh sách theo dõi</NavLink></li>
                            <li className='sub-list-link'><NavLink  className='nav-link' to="/follow-up/new-list">Danh sách mới phân</NavLink></li>
                        </ul>
                    </li>
                    <li className='list-link'>
                        <NavLink className='nav-link' to="/">Báo cáo <FaCaretDown className='nav-icon icon-caret-down' /></NavLink>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/">Báo cáo 1</NavLink></li>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/">Báo cáo 2</NavLink></li>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/">Báo cáo 3</NavLink></li>
                        </ul>
                    </li>
                    { isHiddenMenu ? <li className='list-link'>
                        <NavLink className='nav-link' to="/">Quản trị hệ thống <FaCaretDown className='nav-icon icon-caret-down' /></NavLink>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/">Chiến dịch</NavLink></li>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/reason">Trạng thái phiếu</NavLink></li>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/user">Người dùng</NavLink></li>
                            <li className='sub-list-link'><NavLink className='nav-link' to="/">Nhóm người dùng</NavLink></li>
                        </ul>
                    </li> : <></>}
                    <div className='nav-profile'>
                        <li className='list-link'><NavLink className='nav-link' to="">Xin chào {fullName}!</NavLink></li>
                        <li className='list-link link-icon' onClick={() => setIsHiddenProfile(!isHiddenProfile)}>
                            <FaUser className='nav-icon icon-user' />
                            <FaCaretDown className='nav-icon icon-caret-down' />
                        </li>
                        { isHiddenProfile ? <div className="box-profile">
                            <span className="change-pass" onClick={() => handleShowModel()}>Đổi mật khẩu</span>
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