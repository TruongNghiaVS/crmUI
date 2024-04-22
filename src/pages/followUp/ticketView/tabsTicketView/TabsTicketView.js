import { Tabs, Tab } from 'react-bootstrap';
import { Col,Row, InputGroup, FormControl, Button,Form } from 'react-bootstrap';
import UpdateVotes from './UpdateVotes';
import ImpactHistory from './ImpactHistory';
import SkipExtra from './SkipExtra';
import Skip from './Skip';
import Assigee from './Assigee';
import Swal from 'sweetalert2';
const TabsTicketView = ({showOrHide,handleInputChange1,handleInputChange,dataHistory, dataView, dataView2,dataReason,saveImpact,saveSkip, masterData,handleClick, listUser, handleInputChangeColor,dataSkip}) => {
    
    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));

    const roleUser = jsonProfile.role;
    
    var isAdmin = false;
    if(roleUser === "2") {
        isAdmin = true;
    }
    

    const ProcessOtherCase = () => {
        
        // Swal.fire({
        //     title: 'Bạn có muốn tiếp tục thao tác? ',
        //     text: "",
        //     icon: 'info',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Xem HĐ khác'
        //     })
        //     .then((result) => {
        //     if (result.isConfirmed) {
               
        //     }
        // })
        showOrHide();   
      
    }

    const ProcessOtherCase2 = () => {
        
        Swal.fire({
            title: 'Bạn có muốn tiếp tục thao tác? ',
            text: "",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xem HĐ khác'
            })
            .then((result) => {
            if (result.isConfirmed) {
               
            }
        })
        
      
    }
    return (
        <Col>
         <div className="mt-3 text-right">
                            <a className='viewcase' variant="outline-primary"  onClick={ ()=> ProcessOtherCase()} >Xem hợp đồng khác</a> <br></br>
                            {/* <a className='viewcase' variant="outline-primary"  onClick={ ()=> ProcessOtherCase2()} >Hệ thống chọn hợp đồng </a> */}
        </div>
          

            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
          
              
            >
            <Tab eventKey="home" title="Cập nhật phiếu">
                <UpdateVotes handleClick= {handleClick} dataView2 ={dataView2} dataView1 = {dataView} handleInputChangeColor = {handleInputChangeColor}  handleInputChange = {handleInputChange1} masterData = {masterData} dataReason = {dataReason} listUser = {listUser} saveImpact = {saveImpact} />
                <br>
                </br>
                <br>
                </br>
                <strong> Lịch sử tác động </strong>

                <ImpactHistory data = {dataHistory} />
            </Tab>


           
            <Tab  eventKey="skipnew" title="Thông tin thêm">
                <SkipExtra data = {dataSkip} />
            </Tab>
    
        </Tabs>

      
        </Col>
    );
};

export default TabsTicketView;