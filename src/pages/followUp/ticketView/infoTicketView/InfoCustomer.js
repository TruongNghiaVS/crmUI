import React, { useState } from "react";
import { useEffect,useRef  } from 'react';
import { FaEnvelope, FaPhone, FaSms } from "react-icons/fa";
import { Col,Row, InputGroup, FormControl, Form } from 'react-bootstrap';
import ProcessingCall from '../../../../services/ProcessingCall';
import Model from "../../../../components/model/Model";
import PopupSms from './PopupSms';
import { SimpleUser, SimpleUserOptions } from "sip.js/lib/platform/web";
import moment from "moment";
import Swal from 'sweetalert2';
import { mode } from "crypto-js";
import { TbPhoneCall } from "react-icons/tb";
// var ami = new require('asterisk-manager')('5038','127.0.0.1','admin','BdqYzZCXXOHB', true);

// const process = require('process'); 
import $ from 'jquery';

const displayMobilePhone = (numberPhone) => 
{
   
    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));

    const roleUser = jsonProfile.role;
   
    var isShowPhoneMobile =false;

    if( roleUser === "2" || roleUser === "5" || roleUser === "6"   )
    {
     isShowPhoneMobile  = true;
  
    }
   if(isShowPhoneMobile == true)
   {
    return numberPhone;
   }

    if(numberPhone)
    {
        if(numberPhone.length <7)
        {
            return "";
        }
        return  numberPhone.substring(0, 3) + 'xxxxxxx';
    }
    return "";

}


const jsonProfileTemp =  JSON.parse(localStorage.getItem('user-info'));
let roleUserTemp = "-1";
if(jsonProfileTemp == null)
{
    
}
else {
    roleUserTemp =  jsonProfileTemp.role;
}







const InfoCustomer = ({data,handleInputChange}) => {
    const dateForPicker = (dateString) => {
        return moment(new Date(dateString)).format('YYYY-MM-DD');
    };

    const [isOpenModel, setIsOpenModel] = useState(false);
    const [modelsms , setModelsms]=useState({
        "PhoneNumber":"",
        "ContentSms":"",
        "NoAgree": ""


    });
    const handleShowModel = ()=> {
         setIsOpenModel(!isOpenModel);
    }
    

    
    const callToline1 =(valueCall)=> {


        // let inputValue = e.target.parentElement.parentElement.getElementsByTagName("input");
        let PhoneLog = valueCall;
  
        if(PhoneLog.length <1)
        {
             Swal.fire({
                 icon: 'error',
                 title: 'Không có số điện thoại',
                 text: 'Không có số điện thoại',
                 footer: 'Yêu cầu thông tin!'
             })
             return;
        }
         let NoAgree =  data.noAgreement;
 
         let bodySearch = {
             phoneNumber: PhoneLog, 
             noAgree:  NoAgree, 
             profileId: window.location.pathname.split("/").pop()
            
          };
     
     
          
     ProcessingCall.MakeCall( bodySearch, (response) => {
         if (response.statusCode === 200) {
                   
             Swal.fire({
                 title: 'Đang thực hiện gọi. Đang chuyển phần mềm gọi',
                 width: 600,
                 timer: 4000,
                 showConfirmButton: false,
                 padding: '3em',
                 color: '#716add',
                 background: '#fff',
                 backdrop: `
                   rgba(0,0,123,0.4)
                   left top
                   no-repeat
                 `
               });
         } else{
             Swal.fire({
                 icon: 'error',
                 title: 'Có lỗi xảy ra',
                 text: 'Không gọi được!',
                 footer: 'Liên hệ IT hỗ trợ'
               })
         }
         }, (error) => {
 
 
             Swal.fire({
                 icon: 'error',
                 title: 'Có lỗi xảy ra',
                 text: 'Không gọi được!',
                 footer: 'Liên hệ IT hỗ trợ'
               })
         
         });


     }
  
    


     const dateForPicker1 = (dateString) => {
        return moment(new Date(dateString)).format('YYYY-MM-DD');

    };


    function numberWithCommas(x) {

        if(x =='' || x == null)
        {
            return '';
        }
        return x.toLocaleString();
    }

     const checkEmptystring = ( str)  =>  {

                if(str ==null || str == undefined)
                {
                    return true;
                }
        
                if( str.length  < 1 )

                {
                    return true;
                }
                return false;
     }


     const searchandReplace = (str) => {



        if(str == null)
    {
        return ;
    }
    if(str.length <1)
    {
        return;

    }
        var re = /(?:[-+() ]*\d){10,13}/gm; 
      
        var res = str.match(re);
        if( res )
        {
            res.map(function(s)
            {
                str = str.replace(s, "<a valueTemp ="+s+" class =" +'"' + "clicktocall" +'"'+  " >" + displayMobilePhone(s)+  "</a>")
                return s +";"
            
            });
        }
        else 
        {
            return;
        }
  
        return str;
     }
     return (
         <Col className="rowInfoCustomer">
          
            <Row>

                <Col> 
                
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text  >Họ tên</InputGroup.Text>
                <FormControl readOnly
                  aria-label="Small" value = {data.customerName} 
                 onChange={handleInputChange} 
                 name = "customerName"
                />
            </InputGroup>
                </Col>

                <Col> 
                
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text >Năm sinh </InputGroup.Text>
                <FormControl readOnly 
                name = "dayOfBirth"
                type="date"
                aria-label="Small"  value ={dateForPicker1(data.dayOfBirth)} onChange={handleInputChange} />
            </InputGroup>
                </Col>
            </Row>
       
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>CMT/CCCD</InputGroup.Text>
                <FormControl   aria-label="Small" readOnly value = {data.nationalId} name = "nationalId" onChange={handleInputChange} />
              </InputGroup>


            <strong>Tương tác gọi </strong>

            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số điện thoại</InputGroup.Text>
                <FormControl readOnly aria-label="Small" value =  {displayMobilePhone(data.mobilePhone)}  name = "mobilePhone" />
                <InputGroup.Text  className="input-group-icon"><FaPhone  onClick  = {(e)=>callToline1(data.mobilePhone)}/></InputGroup.Text>
                {/* <InputGroup.Text className="input-group-icon"><FaSms  onClick  = {(e)=>smsToMessage(data.mobilePhone)}/></InputGroup.Text> */}
                
            </InputGroup>



            { checkEmptystring(data.phone1) == false  ?   <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Khác</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value = {displayMobilePhone(data.phone1)}   name = "phone1"  />
                <InputGroup.Text className="input-group-icon"><TbPhoneCall  onClick  = {(e)=>callToline1(data.phone1)}/></InputGroup.Text>
              
            </InputGroup>: <> </> }
           


            { 
            checkEmptystring(data.houseNumber) ==false   ?  <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số nhà</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value = {displayMobilePhone(data.houseNumber)}  name = "houseNumber"  />
                <InputGroup.Text className="input-group-icon"><TbPhoneCall onClick  = {(e)=>callToline1(data.houseNumber)} /></InputGroup.Text>
               
            </InputGroup>: <> </> 
            }




            { 
               checkEmptystring(data.officeNumber) == false   ?    <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Văn phòng</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value = {displayMobilePhone(data.officeNumber)}   name = "officeNumber"    />
                <InputGroup.Text className="input-group-icon"><TbPhoneCall onClick  = {(e)=>callToline1(data.officeNumber)} /></InputGroup.Text>
         
                
              </InputGroup>: <> </> 
            }
            
           
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Gọi SĐT khác</InputGroup.Text>
                <FormControl aria-label="Small" value ={data.otherPhone}  placeholder="Nhập số điện thoại liên quan KH để gọi" name = "otherPhone"  onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><TbPhoneCall  onClick  = {(e)=>callToline1(data.otherPhone)} /></InputGroup.Text>
             
                
            </InputGroup>


            { checkEmptystring(data.email) ==false     ?  <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value ={data.email} name = "email"  onChange={handleInputChange} />
                <InputGroup.Text className="input-group-icon"><FaEnvelope /></InputGroup.Text>
            </InputGroup>: <> </> }
            
            
         <strong> Thông tin khoản vay </strong>
       <Row >
            <Col>
            
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Ngày giải ngân</InputGroup.Text>
                <FormControl readOnly type="date" value ={dateForPicker1(data.registerDay)} onChange={handleInputChange}  aria-label="Small"  />
            </InputGroup>
            </Col>

            <Col>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>DPD</InputGroup.Text>
                <FormControl aria-label="Small"  readOnly onChange={handleInputChange} name ="dpd"  value ={data.dpd} />
            </InputGroup>
            </Col>

       </Row>
     

    
            <Row>
                    <Col>
                    <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tên hàng (SP)</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value ={data.nameProduct} name ="nameProduct"  onChange={handleInputChange}   />
           
            </InputGroup>
                    </Col>
                    <Col>
                    <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Mã SP (code)</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value ={data.codeProduct} name ="codeProduct" onChange={handleInputChange}  />
            </InputGroup> 
                    </Col>
                    <Col>
                    <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Giá SP</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value ={data.priceProduct} name ="priceProduct"  onChange={handleInputChange}  />
            </InputGroup>
                    </Col>

       </Row>

            <Row>

                <Col>
                        <InputGroup size="sm" className="mb-1">
                        <InputGroup.Text>Tiền vay</InputGroup.Text>
                        <FormControl readOnly aria-label="Small" value = {numberWithCommas(data.amountLoan)} name = "amountLoan" onChange={handleInputChange}   />
                    </InputGroup>
                </Col>

                <Col>
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tổng đã TT</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value = {numberWithCommas(data.totalPaid)} name = "totalPaid"  onChange={handleInputChange}  />
            </InputGroup>
                </Col>
            </Row>
            <Row> 
                <Col>
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Kỳ hạn TT</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value = {data.tenure} name ="tenure" onChange={handleInputChange}  />
            </InputGroup>
            </Col>
            <Col>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Số kỳ đã TT</InputGroup.Text>
                <FormControl readOnly aria-label="Small" value = {data.noTenure} name = "noTenure" onChange={handleInputChange}   />
            </InputGroup>   
                </Col>
             
            </Row>
            <Row>

                <Col>
                      
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Trả tháng(EMI)</InputGroup.Text>
                <FormControl readOnly aria-label="Small"  value ={numberWithCommas(data.emi)} name ="emi" onChange={handleInputChange}  />
            </InputGroup>
                </Col>

                <Col>
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Nợ Gốc</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value = {numberWithCommas(data.debitOriginal)} name ="debitOriginal" onChange={handleInputChange}  />
            </InputGroup>
                </Col>

            </Row>

      
       
            <Row>
                <Col>
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tổng phải trả</InputGroup.Text>
                <FormControl readOnly aria-label="Small" value = {numberWithCommas(data.totalMoneyPaid)} name ="totalMoneyPaid" onChange={handleInputChange}  />
            </InputGroup>

                </Col>
                <Col>
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tổng phạt</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value = {numberWithCommas(data.totalFines)} name ="totalFines" onChange={handleInputChange}   />
            </InputGroup>
                </Col>
            </Row>
           
            
         
            <Row>

                <Col>
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Ngày TT</InputGroup.Text>
                <FormControl readOnly  type ="text" aria-label="Small" value ={dateForPicker(data.lastPadDay)} name ="lastPadDay"  onChange={handleInputChange}  />
            </InputGroup>
                </Col>

                <Col>
                     
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>TT gần nhất</InputGroup.Text>
                <FormControl readOnly aria-label="Small" value = {numberWithCommas(data.lastPaid)} name ="lastPaid" onChange={handleInputChange}  />
            </InputGroup>
                </Col>
            </Row>
       <strong>Lưu ý quan trọng </strong>

       <div className="noteImportant" dangerouslySetInnerHTML={{__html:  searchandReplace( '' + data.noteFirstTime + ' ' +data.noteRel) }} />
            {/* <InputGroup size="sm" className="mb-1">
                <InputGroup.Text >Trạng thái hồ sơ </InputGroup.Text>
                <FormControl aria-label="Small" readOnly value = {data.statusProfile}   />
            </InputGroup> */}

<strong> Thông tin địa chỉ</strong>

            <Row>

                <Col>
                   

                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP(chính)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange} name = "provice"  value ={data.provice} />
            </InputGroup>
                    </Col>
                   
                    <Col>
                    <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text>Quận/Huyện(c)</InputGroup.Text>
                    <FormControl aria-label="Small" readOnly  onChange={handleInputChange}  name ="suburbanDir" value ={data.suburbanDir}  />
                </InputGroup>
                    </Col>
            </Row>
            <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text>Đường(chính)</InputGroup.Text>
                    <FormControl aria-label="Small" readOnly onChange={handleInputChange} name = "road"  value = {data.road} />
                </InputGroup>
            <Row> 
                <Col>
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tỉnh/TP(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange} name ="provice1"   value ={data.provice1} />
            </InputGroup>
                </Col>
                <Col>
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Quận/Huyện(t)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly  onChange={handleInputChange}  name = "suburbanDir1" value ={data.suburbanDir1} />
            </InputGroup>
                </Col>
            </Row>
         
    
       
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Đường(tạm)</InputGroup.Text>
                <FormControl aria-label="Small" readOnly   onChange={handleInputChange} name ="road1"   value ={data.road1} />
            </InputGroup>
         
           

            { isOpenModel && <Model handleClose ={handleShowModel}  content={<PopupSms handleShowModel ={handleShowModel}  modelsms = {modelsms} />} /> }

        </Col>
    );
};

export default InfoCustomer;