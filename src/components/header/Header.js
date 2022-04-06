import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaCaretDown } from 'react-icons/fa';
import React, { useState } from 'react';
import Model from "../model/Model";
import ModelChangePassword from './ModelChangePassword';

const Header = ({ classHeader }) => {
    const [isHiddenProfile, setIsHiddenProfile] = useState(false);
    const [isOpenModel, setIsOpenModel] = useState(false);
    
    let navigate = useNavigate();

    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));
    const roleUser = jsonProfile.role;

    var isHiddenMenu = false;

    if(roleUser === "ADMIN") {
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
        navigate('/login');
    };

    return (
        <header className={classHeader}>
            <nav className='nav'>
                <ul className='menu'>
                    <li className='list-link'><Link className='nav-link link-main' to="/">ACS</Link></li>
                    <li className='list-link'>
                        <Link className='nav-link' to="/">Trang làm việc <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Trang làm việc 1</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Trang làm việc 2</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Trang làm việc 3</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Trang làm việc 4</Link></li>
                        </ul>
                    </li>
                    <li className='list-link'>
                        <Link className='nav-link' to="/">Báo cáo <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Báo cáo 1</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Báo cáo 2</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Báo cáo 3</Link></li>
                        </ul>
                    </li>
                    { isHiddenMenu ? <li className='list-link'>
                        <Link className='nav-link' to="/">Quản trị hệ thống <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Quản trị hệ thống 1</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Quản trị hệ thống 2</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Quản trị hệ thống 3</Link></li>
                        </ul>
                    </li> : <></>}
                    <div className='nav-profile'>
                        <li className='list-link'><Link className='nav-link' to="/">Xin chào {roleUser}!</Link></li>
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