import { FaLock } from 'react-icons/fa';
import { InputGroup, FormControl } from 'react-bootstrap';

const ModelChangePassword = (props) => {
    return (
        <div className="model">
            <div className="header-model">
                <h4>Đổi mật khẩu</h4>
            </div>

            <div className="main-model">
                <form className='form-login'>

                     <label for="basic-url">Nhập mật khẩu mới</label>
                    <InputGroup>
                        <InputGroup.Text className="input-group-icon"><FaLock /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <label for="basic-url">Nhập lại mật khẩu mới</label>
                    <InputGroup>
                        <InputGroup.Text className="input-group-icon"><FaLock /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                </form>
            </div>

            <div className="footer-model">
                <button className="btn-model btn-add"  onClick={props.handleSave}>Đổi mật khẩu</button>
                <button className="btn-model btn-closes" onClick={props.handleClose}>Hủy</button>
            </div>
        </div>
    );
};

export default ModelChangePassword;