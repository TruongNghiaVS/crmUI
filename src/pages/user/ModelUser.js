import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import { InputGroup, FormControl } from 'react-bootstrap';

const ModelAddUser = (props) => {
    return (
        <div className="model">
            <div className="header-model">
                <h4>Thêm người dùng mới</h4>
            </div>

            <div className="main-model">
                <form className='form-login'>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaUser /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Tên người dùng" required />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Tên đăng nhập" required />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaLock /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"type="password" placeholder="Mật khẩu" required />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FaBuilding /></InputGroup.Text>
                        <FormControl aria-label="Small" placeholder="ACS required" required />
                        <FormControl aria-label="Small" placeholder="Collection" required />
                        <FormControl aria-label="Small" placeholder="Điện thoại viên" required />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaPhone /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Điện thoại" required />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text className="input-group-icon"><FaEnvelope /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Email" required />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input-group-icon"><FaPortrait /></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Địa chỉ liên hệ" required />
                    </InputGroup>
                </form>
            </div>

            <div className="footer-model">
                <button className="btn-model btn-add"  onClick={props.handleAdd}>Thêm</button>
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
            </div>
        </div>
    );
};

export default ModelAddUser;