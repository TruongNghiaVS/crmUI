import { FaLock } from 'react-icons/fa';

const ModelChangePassword = (props) => {
    return (
        <div className="model">
            <div className="header-model">
                <h4>Đổi mật khẩu</h4>
            </div>

            <div className="main-model">
                <form className='form-login'>
                    <div className="input-container">
                        <label className='icon-lbl'><FaLock /> </label>
                        <input className='input-field' type="text" placeholder="Mật khẩu" required />
                    </div>
                </form>
            </div>

            <div className="footer-model">
                <button className="btn-model btn-add"  onClick={props.handleSave}>Lưu</button>
                <button className="btn-model btn-close" onClick={props.handleClose}>Huỷ</button>
            </div>
        </div>
    );
};

export default ModelChangePassword;