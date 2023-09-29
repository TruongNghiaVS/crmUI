import './Header.scss';
import { Link, useNavigate  } from 'react-router-dom';
import { FaUser, FaCaretDown } from 'react-icons/fa';
import React, { useState } from 'react';
import Model from '../model/Model';
import ModelChangePassword from './ModelChangePassword';
import LoginService from '../../services/LoginService';
import moment from "moment";

const Header = ({ classHeader }) => {
    const [isHiddenProfile, setIsHiddenProfile] = useState(false);
    const [isOpenModel, setIsOpenModel] = useState(false);
    const formTime =  moment().format("YYYY-MM-DD");
    const endTime =  moment().format("YYYY-MM-DD");
    
    let navigate = useNavigate();
    // navigate('/campangn');

    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));


   
    const roleUser = jsonProfile.role;
    const fullName = jsonProfile.name;

    const lineCode = jsonProfile.lineCode;

    var isHiddenMenu = false;
    if(roleUser === "2" ||  roleUser === "4") {
        isHiddenMenu = true;
    } else {
        isHiddenMenu = false;
    }
 
     const handleChangePass = () => {
       
       
      
        
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
                    <li className='list-link'><Link className='nav-link link-main' to="/">HCM</Link></li>
                    <li className='list-link'>
                        <Link className='nav-link' to="/follow-up-new">Trang làm việc <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><Link reloadDocument  className='nav-link' to="/follow-up-new/watch-list">Danh sách theo dõi</Link></li>
                            <li className='sub-list-link'><Link reloadDocument  className='nav-link' to="/follow-up-new/skip-data">Danh sách skip</Link></li>
                            <li className='sub-list-link'><Link  reloadDocument className='nav-link' to="/follow-up-new/new-list">Danh sách mới phân</Link></li>
                            <li className='sub-list-link'><Link  reloadDocument className='nav-link' to="/danh-sach-goc">Danh sách gốc</Link></li>
                            { isHiddenMenu ? <li className='sub-list-link'><Link  reloadDocument className='nav-link' to="/follow-up-new/data">Danh sách kho</Link></li>: <></> }
                        </ul>
                    </li>
                    <li className='list-link'>
                        <Link className='nav-link' to="/">Báo cáo <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                        <ul className='sub-menu'>
                            {/* <li className='sub-list-link'><Link className='nav-link' to="/">BC chiến dịch gọi ra</Link></li> */}
                            <li  className='sub-list-link'><Link reloadDocument className='nav-link' to="/historical">BC Lịch sử tác động</Link></li>
                            {/* <li className='sub-list-link'><Link className='nav-link' to="/">BC theo khung giờ</Link></li> */}
                          
                            {/* <li className='sub-list-link'><Link className='nav-link' to="/">Nhập kết quả</Link></li> */}
                            <li className='sub-list-link'>
                                <Link reloadDocument className='nav-link' 
                                to={"/bao-cao-ghi-am?fromTime="+formTime+"&endTime="+endTime}>
                                Báo cáo ghi âm
                                </Link>
                            </li>

                            <li className='sub-list-link'>
                                <Link reloadDocument className='nav-link' 
                                to={"/bao-cao-ghi-am-theo-so-hop-dong?fromTime="+formTime+"&endTime="+endTime}>
                                BCGhi âm theo HĐ
                                </Link>
                            </li>
                           
                            <li className='sub-list-link'><Link className='nav-link' to="/bao-cao-tin-nhan">Báo cáo Sms</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/tong-quan-tin-nhan">Tổng quan tin nhắn</Link></li>

                       
                            <li className='sub-list-link'><Link className='nav-link' to="/bao-cao-talktime">BC talktime</Link></li>
                             { isHiddenMenu ? <li className='sub-list-link'><Link  reloadDocument className='nav-link' to="/reportCDR">BC CDR</Link></li>: <></> }
                            <li className='sub-list-link'><Link className='nav-link' to="/report/login">BC Đăng nhập </Link></li>
                            
                            { isHiddenMenu ? <li className='sub-list-link'><Link className='nav-link' to="/bao-cao-tong-quan-qc">Báo cáo QC(Tổng quan)</Link></li>: <></> }
                            { isHiddenMenu ? <li className='sub-list-link'><Link className='nav-link' to="/bao-cao-qc">Báo cáo QC</Link></li>: <></> }
                            <li className='sub-list-link'><Link className='nav-link' to="/dashboard">Dashboard </Link></li>
                        </ul>
                    </li>
                    { isHiddenMenu ? <li className='list-link'>
                        <Link className='nav-link' to="/">Quản trị hệ thống <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><Link className='nav-link' to="/campangn">Chiến dịch</Link></li>
                            <li className='sub-list-link'><Link reloadDocument  className='nav-link' to="/groupReason">Trạng thái phiếu</Link></li>
                            <li className='sub-list-link'><Link reloadDocument  className='nav-link' to="/quan-ly-nguoi-dung">Người dùng</Link></li>
                            <li className='sub-list-link'><Link reloadDocument className='nav-link' to="/danh-sach-nhom">Nhóm người dùng</Link></li>

                            <li className='sub-list-link'><Link reloadDocument className='nav-link' to="/masterData/quan-ly-phong-ban">Phòng Ban</Link></li>
                            <li className='sub-list-link'><Link reloadDocument className='nav-link' to="/masterData/quan-ly-nguoi-than">Mối quan hệ</Link></li>
                            <li className='sub-list-link'><Link reloadDocument className='nav-link' to="/masterData/quan-ly-trang-thai-follow">Trạng thái theo dõi case</Link></li>
                          
                            <li className='sub-list-link'><Link  className='nav-link' to="/thong-tin-chien-dich">Thông tin chiến dịch</Link></li>
                        </ul>
                    </li> : <></>}
                  { roleUser == "4"?  <li className='list-link'>
                        <Link className='nav-link' to="/follow-up-new">Chương trình <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><Link reloadDocument  className='nav-link' to="/quan-ly-goi">Quản lý gói</Link></li>
                            <li className='sub-list-link'><Link  reloadDocument className='nav-link' to="/quan-ly-dpd">Quản lý DPD</Link></li>
                            <li className='sub-list-link'><Link  reloadDocument className='nav-link' to="/bao-cao-goi">Quản lý DPD</Link></li>
                   
                           
                        </ul>
                    </li>:<></> } 


                  

                    <li className='list-link'>
                        <Link className='nav-link' to="/document-data">Tài nguyên <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                     
                    </li>

                    { roleUser == "4"?  <li className='list-link'>
                        <Link className='nav-link' to="/follow-up-new">Vận hành <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><Link reloadDocument  className='nav-link' to="/campangn">Chuyển case</Link></li>
                            <li className='sub-list-link'><Link  reloadDocument className='nav-link' to="/xoa-case">Xóa case</Link></li>
                            <li className='sub-list-link'><Link  reloadDocument className='nav-link' to="/hoat-dong-chien-dich">Hoạt động chiến dịch</Link></li>
                            <li className='sub-list-link'><Link  className='nav-link' to="/quan-ly-line">Quản lý line</Link></li>
                        
                        </ul>
                    </li>:<></> } 
                    
                     <div className='nav-profile'>
                        <li className='list-link'><Link className='nav-link' to="">Xin chào {fullName}!</Link></li>
                        <li className='list-link link-icon' 
                            onClick={() => setIsHiddenProfile(!isHiddenProfile)}>
                            <FaUser className='nav-icon icon-user' />
                            <FaCaretDown className='nav-icon icon-caret-down' />
                        </li>
                        { isHiddenProfile ? <div className="box-profile">
                            <span className="change-pass" onClick={() => handleShowModel()}>Đổi mật khẩu</span>
                            
                            {!isHiddenMenu?<span className="change-pass">Line gọi: {lineCode}</span>: <></>} 
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