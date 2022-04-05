import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';

const ModelAddUser = (props) => {
    return (
        <div className="model">
            <div className="header-model">
                <h4>Thêm người dùng mới</h4>
            </div>

            <div className="main-model">
                <form className='form-login'>
                    <div className='input-container'>
                        <label className='icon-lbl'><FaUser /></label>
                        <input className='input-field' type="text" placeholder="Tên người dùng" required />
                    </div>
                    <div className="input-container">
                        <label className='icon-lbl'><FaAt /> </label>
                        <input className='input-field' type="password" placeholder="Tên đăng nhập" required />
                    </div>
                    <div className="input-container">
                        <label className='icon-lbl'><FaLock /> </label>
                        <input className='input-field' type="text" placeholder="Mật khẩu" required />
                    </div>
                    <div className='input-container'>
                        <label className='icon-lbl'><FaBuilding /></label>
                        <div className="col-input">
                            <input className='input-field' type="text" placeholder="ACS" required />
                            <input className='input-field' type="text" placeholder="Collection" required />
                            <input className='input-field' type="text" placeholder="Điện thoại viên" required />
                        </div>
                    </div>
                    <div className="input-container">
                        <label className='icon-lbl'><FaPhone /> </label>
                        <input className='input-field' type="password" placeholder="Điện thoại" required />
                    </div>
                    <div className="input-container">
                        <label className='icon-lbl'><FaEnvelope /> </label>
                        <input className='input-field' type="text" placeholder="Email" required />
                    </div>
                    <div className="input-container">
                        <label className='icon-lbl'><FaPortrait /> </label>
                        <input className='input-field' type="text" placeholder="Địa chỉ liên hệ" required />
                    </div>
                </form>
            </div>

            <div className="footer-model">
                <button className="btn-model btn-add"  onClick={props.handleAdd}>Thêm</button>
                <button className="btn-model btn-close" onClick={props.handleClose}>Đóng</button>
            </div>
        </div>
    );
};

export default ModelAddUser;