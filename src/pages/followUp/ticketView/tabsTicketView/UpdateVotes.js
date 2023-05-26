import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import moment from "moment"; 
import Swal from 'sweetalert2';
import { FaTicketAlt } from "react-icons/fa";
const UpdateVotes = ({dataView1, handleInputChange, masterData, dataReason,listUser,saveImpact}) => {


    const SaveIpactTry =() =>
    {
     
      
        if(dataView1.statusIm  <0)
        {
            Swal.fire({
                icon: 'error',
                title: 'Chưa chọn lý dó',
                text: 'Chưa chọn lý dó',
                footer: 'Yêu cầu thông tin!'
            })
            return;
        }

        if(dataView1.statusIm ==215 || dataView1.statusIm ==243 )
        {

            if(dataView1.moneyPromise =='')
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Bạn chưa nhập số tiền hứa thanh toán',
                    text: 'Ràng buộc nghiệp vụ',
                    footer: 'Yêu cầu điền số tiền hứa thanh toán!'
                })
                return;
            }

            debugger;
            if(dataView1.promiseday == null || dataView1.promiseday =="")
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Bạn chưa nhập thông tin ngày thanh toán',
                    text: 'Ràng buộc nghiệp vụ',
                    footer: 'Yêu cầu thông tin ngày thanh toán!'
                })
                return;
            }
          
        }
       
    
        if(dataView1.noteIm =='')
        {
            Swal.fire({
                icon: 'error',
                title: 'Chưa điền ghi chú',
                text: 'Chưa điền ghi chú',
                footer: 'Yêu cầu thông tin!'
            })
            return;
        }

       
        saveImpact();
    }
    const dateForPicker = (dateString) => {
         if( dateString == null)
         {
            return null;
         }
        return moment(new Date(dateString)).format('YYYY-MM-DD')
    };

    const [model , setmodel]=useState({
       
    });


    return (
        <>
        
        <Row>
            <Col>
                <Form.Label htmlFor="basic-url">Tác động</Form.Label>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Liên hệ</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="noteCode" value ={dataView1.noteCode}    onChange={handleInputChange}  >
                    
                                    <option value = "-1" selected>Người liên hệ</option>
                                    <option value = "DIEN_THOAI">Điện thoại</option>
                                    <option value = "KHACH_HANG">Khách hàng</option>
                                    <option value = "CON">Con</option>
                                    <option value = "CHA">Cha</option>
                                    <option value = "ME">Mẹ</option>
                                    <option value = "CHI_GAI/EM_GAI">Chị gái,em gái</option>
                                    <option value = "ANH_TRAI/EM_TRAI">Anh trai, em trai</option>
                                    <option value = "VO">Vợ</option>
                                    <option value = "CHONG">Chồng</option>
                                    <option value = "NGUOI_THAM_CHIEU_KHAC">Người tham chiếu khác</option>
                                    <option value = "KHONG_GAP_AI">không gặp ai</option>
                                    <option value = "NGUOI_THAN_XA">Người thân xa</option>
                                    <option value = "BAN_BE">Bạn bè</option>
                                    <option value = "DONG_NGHIEP">Đồng nghiệp</option>
                                    <option value = "CHU_SO_HUU">Chủ sở hữu</option>
                                    <option value = "KHONG_XAC_DINH">Không xác định</option>
                            
                    </Form.Select>
                </InputGroup>
               
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Tình trạng</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="statusIm" value ={dataView1.statusIm}    onChange={handleInputChange}  >
                    
                    <option value = "-1" selected>Chọn lý do</option>
                    {
                              dataReason.data.map((item, i) => {    
                              
                                    return ( <>
                                        <option value = {item.id}>{item.displayName}</option>
   
                                   </>)
                              
                       
                        })
                        }
                
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Ngày hứa(TT)</InputGroup.Text>
                    <FormControl 
                        name = "promiseday"
                        type="date"
                        aria-label="Small"  value ={dateForPicker(dataView1.promiseday)}   onChange={handleInputChange} />
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Tiền hứa</InputGroup.Text>
                    <FormControl   onChange={handleInputChange}   name ="moneyPromise" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value ={dataView1.moneyPromise} />
                </InputGroup>
            </Col>
            <Col>
                <Form.Label htmlFor="basic-url">Ghi chú</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={5}  name ="noteIm" onChange={handleInputChange} 
                       value = {dataView1.noteIm}  />
                </Form.Group>
            </Col>
            <Col>
                <Form.Label htmlFor="basic-url">Hẹn theo dõi</Form.Label>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Hẹn</InputGroup.Text>
                    <FormControl 
                        name = "daysuggestTime"
                        type="date"
                        aria-label="Small"    onChange={handleInputChange}   value ={dateForPicker(dataView1.daysuggestTime)}/>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Theo dõi</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name = "statusFollow"  
                    
                    onChange={handleInputChange}  value = {dataView1.statusFollow}>
                         <option  value="15" selected >Theo dõi</option>
                     
                        <option value="16">Đóng</option>
                       
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Mối quan hệ</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="relationship" 
                      onChange={handleInputChange} 
                       value ={dataView1.relationship} >

                    <option value = "-1" selected>Chọn mối quan hệ</option>
                                {
                                masterData.data.map((item, i) => {    
                                        if( item.type == "1")
                                        {
                                            return ( <>
                                                <option value = {item.id}>{item.name}</option>
           
                                           </>)
                                        }
                               
                                })
                            }
                       
                    </Form.Select>
                </InputGroup>
            </Col>
      
           
        </Row>

                <div className="mt-3 text-center">
                            <Button variant="outline-primary" onClick={SaveIpactTry}>Lưu tác động</Button>
                 </div>
        </>
    );
};

export default UpdateVotes;