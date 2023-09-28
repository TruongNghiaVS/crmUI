import {Col, InputGroup, FormControl, Form } from 'react-bootstrap';
import { useEffect,useRef  } from 'react';
import Swal from 'sweetalert2';
import ProcessingCall from '../../../../services/ProcessingCall';

const InfoProduct = ({data, handleInputChange}) => {
    let allowCall = true;
    const callToline2 =(valueCall)=> {

        if(!allowCall)
          return;
    
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
     
          allowCall = false;

       

          
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
               allowCall  =true;
         } else{
             Swal.fire({
                 icon: 'error',
                 title: 'Có lỗi xảy ra',
                 text: 'Không gọi được!',
                 footer: 'Liên hệ IT hỗ trợ'
               })
               allowCall  =true;
         }
         }, (error) => {
 
 
             Swal.fire({
                 icon: 'error',
                 title: 'Có lỗi xảy ra',
                 text: 'Không gọi được!',
                 footer: 'Liên hệ IT hỗ trợ'
               })
               allowCall  =true;
         
         });


     }

     let valuePhoneClick = "";

    useEffect(() => {

        
    });
    const displayMobilePhone = (numberPhone) => 
{   
    if(numberPhone == null)
    {
        return ;
    }
    if(numberPhone.length <10)
    {
        return;

    }
    return  numberPhone.substring(0, 3) + 'xxxxxxx';
 

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
      
        var res = str.match(re).map(function(s){
            str = str.replace(s, "<a valueTemp ="+s+" class =" +'"' + "clicktocall" +'"'+  " onclick = callToAction("+s+")>" + displayMobilePhone(s)+  "</a>")
            // str = str.replace(s, "<a class =" +'"' + "clicktocall" +'"'+  "  onClick={this.callToAction()}>" + displayMobilePhone(s)+  "</a>")
           
            return s +";"
        
        });
        return str;
     }
    return (
        <Col>
            <Form.Label>Thông tin sản phẩm</Form.Label>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Tên hàng</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value ={data.nameProduct} name ="nameProduct"  onChange={handleInputChange}   />
            </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Code</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value ={data.codeProduct} name ="codeProduct" onChange={handleInputChange}  />
            </InputGroup> 
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text>Giá</InputGroup.Text>
                <FormControl readOnly  aria-label="Small" value ={data.priceProduct} name ="priceProduct"  onChange={handleInputChange}  />
            </InputGroup>
            <Form.Group className="mt-3">
                <Form.Label>Ghi chú ban đầu</Form.Label>
                <Form.Control readOnly as="textarea" rows={8} value ={data.noteFirstTime} name ="noteFirstTime"   onChange={handleInputChange}  />
            </Form.Group>

            <Form.Group className="mt-3">
                <Form.Label>Ghi chú tham chiếu</Form.Label>
                
                {/* <div dangerouslySetInnerHTML={{__html: searchandReplace(data.noteRel)}} /> */}
                <Form.Control readOnly as="textarea" rows={7} value ={data.noteRel} name ="noteRel"   onChange={handleInputChange}  />
            </Form.Group>
        </Col>
    );
};

export default InfoProduct;