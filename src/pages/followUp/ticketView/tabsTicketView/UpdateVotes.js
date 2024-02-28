import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import moment from "moment"; 
import Swal from 'sweetalert2';
import { FaTicketAlt } from "react-icons/fa";
const UpdateVotes = ({dataView1,dataView2, handleInputChange, masterData, dataReason,listUser,saveImpact, handleInputChangeColor, handleClick}) => {


    const SaveIpactTry =() =>
    {
       
       
        if(dataView1.colorCode == '' || dataView1.colorCode == '-1' ||  dataView1.colorCode =='white')
        {
            Swal.fire({
                icon: 'error',
                title: 'Chưa phân loại hồ sơ',
                text: 'Chưa phân loại hồ sơ',
                footer: 'Yêu cầu nghiệp vụ!'
            })
            return;
        }
   
      
        
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
        if(dataView1.placeCode == '' || dataView1.placeCode == '-1')
        {
            Swal.fire({
                icon: 'error',
                title: 'Chọn chơi nơi liên hệ',
                text: 'Chọn chơi nơi liên hệ',
                footer: 'Yêu cầu nghiệp vụ!'
            })
            return;
        }

       
        if(dataView1.wayContact == '' || dataView1.wayContact == '-1')
        {
            Swal.fire({
                icon: 'error',
                title: 'Chọn phương thức liên hệ',
                text: 'Chọn phương thức liên hệ',
                footer: 'Yêu cầu nghiệp vụ!'
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

    const  use_number =(node)=>{
        var empty_val = false;
        const value = node.value;
        if (node.value == '')
          empty_val = true;
        node.type = 'number';
        if (!empty_val)
          node.value = Number(value.replace(/,/g, '')); // or equivalent per locale
      }
      
    const   use_text = (node) => {
        var empty_val = false;
        const value = Number(node.value);
        if (node.value == '')
          empty_val = true;
        node.type = 'text';
        if (!empty_val)
          node.value = value.toLocaleString('en');  // or other formatting
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
                
                    <InputGroup.Text id="inputGroup-sizing-sm">Tình trạng</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="statusIm" value ={dataView1.statusIm}    onChange={handleInputChange}  >
                    
                    <option value = "-1" selected>Chọn lý do</option>
                    {
                              dataReason.data.map((item, i) => {    
                              
                                    return ( <>
                                        <option value = {item.id}> {item.code} - {item.displayName}</option>
   
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
                    <FormControl onChange={handleInputChange}   name ="moneyPromise" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value ={dataView1.moneyPromise} />
                </InputGroup>

                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Liên hệ</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="noteCode" value ={dataView1.noteCode}    onChange={handleInputChange}  >
                    
                                    <option value = "-1" selected>Người liên hệ</option>
                            
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
                              
                            
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Phương thức liên hệ</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="wayContact" value ={dataView1.wayContact}    onChange={handleInputChange}  >
                    
                                    <option value = "-1" selected>Chọn phương thức liên hệ</option>
                                    <option value = "LET">Gửi thư thông báo nợ</option>
                                    <option value = "PHAP_LY">Thu hồi nợ pháp lý</option>
                                    <option value = "DIA_BAN">Thu hồi nợ tại địa bàn</option>
                                    <option value = "DIEN_THOAI" selected >Thu hồi nợ qua điện thoại</option>
                                    <option value = "SMS">Gửi SMS nhắc nợ</option>
                                    <option value = "SKIP_CALL">Truy tìm thông tin khách hàng qua điện thoại</option>
                                    <option value = "SKIP_SOCIAL_NETWORK">Truy tìm thông tin khách hàng qua mạng xã hội</option>
                                  
                                   
                            
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Nơi liên hệ</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="placeCode" value ={dataView1.placeCode}    onChange={handleInputChange}  >
                    
                                    <option value = "-1" selected>Chọn nơi liên hệ</option>
                                    <option value = "KHAC">kHÁC</option>
                                    <option value = "TAM_TRU">TẠM TRÚ</option>
                                    <option value = "HO_KHAU">HỘ KHẨU</option>
                                    <option value = "CONG_TY">CÔNG TY</option>
                                    <option value = "TOA_AN">TÒA ÁN</option>
                                    <option value = "VIEN_KIEM_SAT">VIỆN KIỂM SÁT</option>
                                    <option value = "CONG_AN">CÔNG AN</option>
                                    <option value = "SO_KH">SỐ KHÁCH HÀNG</option>
                                    <option value = "SO_CONG_TY">SỔ CÔNG TY</option>
                                    <option value = "SO_NGUOI_THAN1">SỐ NGƯỜI THÂN 1</option>
                                    <option value = "SO_NGUOI_THAN2">SỐ NGƯỜI THÂN 2</option>
                                    <option value = "SO_KHAC">SỐ KHÁC</option>
                                   
                            
                    </Form.Select>
                </InputGroup>

              

                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Phân loại hồ sơ:</InputGroup.Text>
                   
                     <div className='btnGroup'>
                                    <button class="button green "  title=" Góp kỳ"  id ="green" onClick={()=>handleClick("green")} ></button>
                                    <button class="button red" id ="red"  title="Thanh lý"   onClick={()=>handleClick("red")}  ></button>
                                    <button class="button yellow "  title="Đi Skip thông tin"  id ="yellow"  onClick={()=>handleClick("yellow")} ></button>
                                   
                                    <button class="button black " id ="black" title="Hồ sơ ko thể skip được thông tin và sẽ trả lại cuối tháng" onClick={()=>handleClick("black")} ></button>

                                    <button class="button greenBlude " id ="greenBlude" title="Thông tin kết nối được với khách hàng" onClick={()=>handleClick("greenBlude")} ></button>
                                    
                     </div>
                </InputGroup>
               
            </Col>
            <Col>
                <Form.Label htmlFor="basic-url">Ghi chú</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={5}  name ="noteIm" onChange={handleInputChange} 
                       value = {dataView1.noteIm}  />
                </Form.Group>
            </Col>
           
        </Row>

                <div className="mt-3 text-center">
                            <Button variant="outline-primary" onClick={SaveIpactTry}>Lưu tác động</Button>
                 </div>
        </>
    );
};

export default UpdateVotes;