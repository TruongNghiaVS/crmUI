import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copy-right">Copyright &copy; Realtime</p>
            <div className="right-footer">
                <Link className='nav-link' to="/">Privacy Policy</Link>
                <span className='dot'>.</span>
                <Link className='nav-link' to="/">Terms &amp; Conditions</Link>
            </div>
        </footer>
    );
};

export default Footer;