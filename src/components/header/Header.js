import './Header.scss';
import { Link } from 'react-router-dom';
import { FaUser, FaCaretDown } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
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
                    <li className='list-link'>
                        <Link className='nav-link' to="/">Quản trị hệ thống <FaCaretDown className='nav-icon icon-caret-down' /></Link>
                        <ul className='sub-menu'>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Quản trị hệ thống 1</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Quản trị hệ thống 2</Link></li>
                            <li className='sub-list-link'><Link className='nav-link' to="/">Quản trị hệ thống 3</Link></li>
                        </ul>
                    </li>
                    <div className='nav-profile'>
                        <li className='list-link'><Link className='nav-link' to="/">Xin chào ACS Admin!</Link></li>
                        <li className='list-link'>
                            <FaUser className='nav-icon icon-user' />
                            <FaCaretDown className='nav-icon icon-caret-down' />
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;