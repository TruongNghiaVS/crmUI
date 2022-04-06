import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaCaretDown } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

const Header = ({ classHeader }) => {
    const [isHiddenProfile, setIsHiddenProfile] = useState(false);
    const [isHiddenMenu, setIsHiddenMenu] = useState(false);
    const [role, setRole] = useState("");
    
    let navigate = useNavigate();

    useEffect(() => {
        const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));
        setRole(jsonProfile.role);
        jsonProfile.role === "ADMIN" ? setIsHiddenMenu(true) : setIsHiddenMenu(false);
    });

    const handleLogout = () => {
        console.log('logout');

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
                        <li className='list-link'><Link className='nav-link' to="/">Xin chào {role}!</Link></li>
                        <li className='list-link link-icon' onClick={() => setIsHiddenProfile(!isHiddenProfile)}>
                            <FaUser className='nav-icon icon-user' />
                            <FaCaretDown className='nav-icon icon-caret-down' />
                        </li>
                        { isHiddenProfile ? <div className="box-profile">
                            <span className="change-pass">Đổi mật khẩu</span>
                            <span className="logout" onClick={handleLogout}>Đăng xuất</span>
                        </div> : <></>}
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;