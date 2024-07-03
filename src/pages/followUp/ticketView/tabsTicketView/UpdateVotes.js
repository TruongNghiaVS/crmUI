import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import moment from "moment"; 
import Swal from 'sweetalert2';
import { FaTicketAlt } from "react-icons/fa";
const UpdateVotes = ({dataView1,dataCustomer2,dataView2, handleInputChange, masterData, dataReason,listUser,saveImpact, handleInputChangeColor, handleClick}) => {

    const handleActivetype  = (e) => {

    }

    const changePhoneNumber = (e) => {
        handleInputChange(e);


    }

    const datalist = [
        {
          text: "RPC - Authorized Representative",
          value: "RPC - Authorized Representative",
          dataDraw: [
                {
                    text: "Callback",
                    value: 302
                 },
                 {
                    text: "Claim - BKY",
                    value: 303
                 }, 
                 {
                    text: "Claim - DCD",
                    value: 304
                 }, 
                 {
                    text: "Claim - FP",
                    value: 305
                 }, 
                 {
                    text: "Claim - NC",
                    value: 306
                 }, 
                 {
                    text: "PP - Approved",
                    value: 307
                 },
                 {
                    text: "PP - Pending",
                    value: 308
                 },  
                 {
                    text: "PP - Reminder",
                    value: 309
                 },
                 {
                    text: "RTP - BKY",
                    value: 310
                 },
                 {
                    text: "RTP - DC",
                    value: 311
                 },
                 {
                    text: "RTP - Financial Difficulty",
                    value: 312
                 }
          ]   
        },
        {
            text: "RPC - Customer",
            value: "RPC - Customer",
            dataDraw: [
                {
                    text: "Callback",
                    value: 302
                 },
                 {
                    text: "Claim - BKY",
                    value: 303
                 }, 
                 {
                    text: "Claim - DCD",
                    value: 304
                 }, 
                 {
                    text: "Claim - FP",
                    value: 305
                 }, 
                 {
                    text: "Claim - NC",
                    value: 306
                 }, 
                 {
                    text: "PP - Approved",
                    value: 307
                 },
                 {
                    text: "PP - Pending",
                    value: 308
                 },  
                 {
                    text: "PP - Reminder",
                    value: 309
                 },
                 {
                    text: "RTP - BKY",
                    value: 310
                 },
                 {
                    text: "RTP - DC",
                    value: 311
                 },
                 {
                    text: "RTP - Financial Difficulty",
                    value: 312
                 }
            ]   
          },
          {
            text: "PTP",
            value: "PTP",
            dataDraw: [
                {
                    text: "RTP - BKY",
                    value: 310
                 },
                 {
                    text: "RTP - DC",
                    value: 311
                 },
                 {
                    text: "RTP - Financial Difficulty",
                    value: 312 
                 }
               
            ]   
          },
          {
            text: "Third Party Contact",
            value: "Third Party Contact",
            dataDraw: [
                {
                    text: "Third Party Contact",
                    value: 313
                 }
               
            ]   
          },
          {
            text: "Wrong Party Contact",
            value: "Wrong Party Contact",
            dataDraw: [
                {
                    text: "Wrong Party Contact",
                    value: 314
                 }
               
            ]   
          },
          {
            text: "RTP",
            value: "RTP",
            dataDraw: [
                {
                    text: "RTP - BKY",
                    value: 310
                 },
                 {
                    text: "RTP - DC",
                    value: 311
                 },
                 {
                    text: "RTP - Financial Difficulty",
                    value: 312
                 }
               
            ]   
          },
          {
            text: "Busy",
            value: "Busy",
            dataDraw: [
                {
                    text: "Busy",
                    value: 315
                 }
                 
               
            ]   
          },
          {
            text: "Drop",
            value: "Drop",
            dataDraw: [
                {
                    text: "Drop",
                    value: 316
                 }
                 
               
            ]   
          },
          {
            text: "Invalid Number",
            value: "Invalid Number",
            dataDraw: [
                {
                    text: "Invalid Number",
                    value: 317
                 }
                 
               
            ]   
          },
          {
            text: "No Answer",
            value: "No Answer",
            dataDraw: [
                {
                    text: "No Answer",
                    value: 318
                 }
                 
               
            ]   
          },
          {
            text: "Not In Service",
            value: "Not In Service",
            dataDraw: [
                {
                    text: "Not In Service",
                    value: 319
                 }
                 
               
            ]   
          },
          {
            text: "Not Reached",
            value: "Not Reached",
            dataDraw: [
                {
                    text: "Not Reached",
                    value: 320
                 }
                 
               
            ]   
          },
          {
            text: "System Hang Up",
            value: "System Hang Up",
            dataDraw: [
                {
                    text: "System Hang Up",
                    value: 321
                 }
                 
               
            ]   
          },
          {
            text: "UC",
            value: "UC",
            dataDraw: [
                {
                    text: "UC",
                    value: 322
                 }
                 
               
            ]   
          },
          {
            text: "Unknown Contact",
            value: "Unknown Contact",
            dataDraw: [
                {
                    text: "Unknown Contact",
                    value: 323
                 }
                 
               
            ]   
          },
          {
            text: "Voice Message / Operator",
            value: "Voice Message / Operator",
            dataDraw: [
                {
                    text: "Voice Message / Operator",
                    value: 324
                 }
                 
               
            ]   
          },
          {
            text: "Invalid Address",
            value: "Invalid Address",
            dataDraw: [
                {
                    text: "Invalid Address",
                    value: 325
                 }
                 
               
            ]   
          }
          

    ];

    const handleCallDispositon  = (e) => {
        handleInputChange(e);
        var callDis = e.target.value;
        let arrayDraw = [];
        for (let index = 0; index < datalist.length; index++) {
            const itemis = datalist[index];
            if(itemis.value == callDis)
                {
                    arrayDraw = itemis.dataDraw;
                }
         }
        document.getElementById("callOUtCome").innerHTML ="";
        var optionSelect1 = document.createElement("option");
        optionSelect1.text = "Chọn";
        optionSelect1.value = -1;
        document.getElementById("callOUtCome").appendChild(optionSelect1);
        for (let index = 0; index < arrayDraw.length; index++) {
            const itemDraw = arrayDraw[index];
            var optionSelect = document.createElement("option");
            optionSelect.text = itemDraw.text;
            optionSelect.value = itemDraw.value;
            
            document.getElementById("callOUtCome").appendChild(optionSelect);
            
        }
       
        if(arrayDraw.length  < 2 )
            {
              
                // var fristSelected = document.getElementById("callOUtCome").getElementsByTagName('option')[1];
                // fristSelected.selected = true;
                
                
            }

   
    }
    const SaveIpactTry =() =>
    {
      

        if( dataCustomer2.status == 215)
        {

            if(dataView1.statusIm ==   dataCustomer2.status  )
            {
                 return;
            }
        
             
            if( dataView1.statusIm != 291 && dataView1.statusIm  !=292 &&  dataView1.statusIm !=293  )
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Không cho chuyển đổi trạng thái',
                    text: 'Đang ở trạng thái thanh toán (PTP), sẽ không được chuyển đôi sang trạng thái  không thanh toán',
                    footer: 'Yêu cầu nghiệp vụ! , liên hệ QC để biết rõ thông tin'
                })
                return;

            }
           
        }
   

        if( dataView1.statusIm == 215  )
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


       //291 292 215
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
         // 215 291 292
        
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

    function checknull  (itemcheck)  {
        
        if(itemcheck == null ||  itemcheck == undefined ||  itemcheck == "")
            {
                return true;
            }

        if(itemcheck <  1) 
            {
                return true;
            }

        return false;
    }   
    const SaveIpactTry2 =() =>
        {
           //291 292 215
          
             // 215 291 292
             debugger;
            
            if( checknull (dataView1.activetype)  == true)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Chưa chọn Activetype',
                    text: 'Chưa chọn Activetype',
                    footer: 'Yêu cầu thông tin!'
                })
                return;
            }
        
            if( checknull (dataView1.callDisposition)  == true  || dataView1.callDisposition == '' || dataView1.callDisposition == '-1')
                {
                    Swal.fire({
                        icon: 'error',
                        title: 'Chọn Call_Disposition',
                        text: 'Chọn Call_Disposition',
                        footer: 'Yêu cầu nghiệp vụ!'
                    })
                    return;
                }
            if( checknull (dataView1.callOutcome)  == true ||  dataView1.callOutcome == '' || dataView1.callOutcome == '-1')
               {
                    Swal.fire({
                        icon: 'error',
                        title: 'Chọn chơi Call_Outcome',
                        text: 'Chọn chơi Call_Outcome',
                        footer: 'Yêu cầu nghiệp vụ!'
                    })
                    return;
                }
    
           
                if( checknull (dataView1.noteCode)  == true ||   dataView1.noteCode == '' || dataView1.noteCode == '-1')
                    {
                        Swal.fire({
                            icon: 'error',
                            title: 'Chọn chơi ngườI liên hệ',
                            text: 'Chọn chơi ngườI liên hệ',
                            footer: 'Yêu cầu nghiệp vụ!'
                        })
                        return;
                    }
        
            if(  checknull (dataView1.noteCode)  == true || dataView1.colorCode == '' || dataView1.colorCode == '-1' ||  dataView1.colorCode =='white')
                {
                    Swal.fire({
                        icon: 'error',
                        title: 'Chưa phân loại hồ sơ',
                        text: 'Chưa phân loại hồ sơ',
                        footer: 'Yêu cầu nghiệp vụ!'
                    })
                    return;
                }
            
         
             if(dataView1.phoneSelect ==2)
                {
                     if(  checknull (dataView1.phoneNumber)  == true || dataView1.phoneNumber == null ||dataView1.phoneNumber == "" )    
                        {
                            Swal.fire({
                                icon: 'error',
                                title: 'Bạn chưa nhập số điện thoại đã gọi',
                                text: 'yêu  cầu số điện thoại đã gọi',
                                footer: 'Yêu cầu nghiệp vụ!'
                            })
                            return;

                        }
                }
        
            if(checknull (dataView1.noteIm) || dataView1.noteIm =='')
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
                <strong>Tác động mớI { dataCustomer2.campaignId }    </strong>

           
               
                {dataCustomer2.campaignId !=1050? <>
                 <InputGroup size="sm" className="mb-1">
                <InputGroup.Text id="inputGroup-sizing-sm">Tình trạng</InputGroup.Text>
                    <Form.Select aria-label="Default select example" name ="statusIm" value ={dataView1.statusIm}    onChange={handleInputChange}  >
                    
                    <option value = "-1" selected>Chọn lý do</option>
                    {
                              dataReason.data.map((item, i) => {    
                              
                                    return ( <>
                                        <option value = {item.id}> {item.code} </option>
                                         </>)
                              
                       
                        })
                        }
                
                    </Form.Select>
                </InputGroup>

                </> : <></> }
                    

                

                 {dataCustomer2.campaignId ==1050? <>
                 
                 
                <InputGroup size="sm" className="mb-1">   <InputGroup.Text >Activetype</InputGroup.Text>
                <Form.Select aria-label="Default select example" name ="activetype" value ={dataView1.activetype}    onChange={handleInputChange}  >
                <option value = "-1" selected>Chọn lý do</option>
                <option value = "Phone Call"> Phone Call </option>
                <option value = "SMS"> SMS </option>
                <option value = "Email"> Email </option>
                <option value = "WA"> WA </option>
                <option value = "Viber"> Viber </option>
                <option value = "Social Media"> Social Media </option>
                <option value = "Field Visit"> Field Visit</option>
                </Form.Select>
                   </InputGroup>
            <InputGroup size="sm" className="mb-1">
                <InputGroup.Text >Call_Disposition</InputGroup.Text>
                <Form.Select aria-label="Default select example"   name ="callDisposition" value ={dataView1.callDisposition}   onChange={handleCallDispositon}  >
                <option value = "-1" selected>Chọn</option>

                <option value = "RPC - Customer"> RPC - Customer </option>
                <option value = "RPC - Authorized Representative"> RPC - Authorized Representative </option>
                <option value = "PTP"> PTP </option>
                <option value = "Third Party Contact"> Third Party Contact </option>
                <option value = "Wrong Party Contact"> Wrong Party Contact </option>
                <option value = "RTP"> RTP </option>
                <option value = "Busy"> Busy</option>
                <option value = "Drop"> Drop</option>
                <option value = "Invalid Number"> Invalid Number</option>  

                 <option value = "No Answer"> No Answer</option>   
                 <option value = "Not In Service">Not In Service</option> 
                 <option value = "Not Reached">Not Reached</option>  
                 <option value = "System Hang Up">System Hang Up</option> 
                 <option value = "UC">UC</option>      
                 <option value = "Unknown Contact">Unknown Contact</option>          
                 <option value = "Voice Message / Operator">Voice Message / Operator</option> 
                 <option value = "Invalid Address">Invalid Address</option>          
                </Form.Select>
              </InputGroup>


               <InputGroup size="sm" className="mb-1">
                <InputGroup.Text >Call_Outcome</InputGroup.Text>
                <Form.Select aria-label="Default select example" id ="callOUtCome" name ="callOutcome" value ={dataView1.callOutcome}    onChange={handleInputChange}   >
                <option value = "-1" selected>Chọn</option>
              
                </Form.Select>
              </InputGroup>

           
              <InputGroup size="sm" className="mb-1">
                <InputGroup.Text >Số điện thoại đang gọi</InputGroup.Text>
                <Form.Select aria-label="Default select example" name ="phoneSelect" value ={dataView1.phoneSelect}    onChange={changePhoneNumber}    >
                    <option value = "1" selected>Hệ thống tự chọn (lần gọi mới nhất)</option>
                    <option value = "2" >Số khác (nhập tay) </option>
              
                </Form.Select>
              </InputGroup>

                {
                    dataView1.phoneSelect == 2 ? <>  
                     <InputGroup size="sm" className="mb-1">
                     <InputGroup.Text >Nhập SĐT</InputGroup.Text>
                    <FormControl 
                    aria-label="phoneNumber" value = {dataView1.phoneNumber}
                   onChange={handleInputChange} 
                   name = "phoneNumber"

                  />
                  
                  </InputGroup>
                   </>  : <> </>
                }

              
                </>: <></>


                }
           
                

              

                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Ngày hứa(TT)</InputGroup.Text>
                    <FormControl 
                        name = "promiseday"
                        type="date"
                        aria-label="Small"  value ={dateForPicker(dataView1.promiseday)}   
                        onChange={handleInputChange} />
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
              

              {dataCustomer2.campaignId !=1050? <>
                  <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">PT liên hệ</InputGroup.Text>
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

                </> : <></> }
                    

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

                <div className="mt-3">
                     {dataCustomer2.campaignId !=1050? 
                     <> <Button variant="outline-primary" onClick={SaveIpactTry}>Lưu tác động</Button></>: <> <Button variant="outline-primary" onClick={ SaveIpactTry2}>Lưu tác động</Button></> }
                </div>
            </Col>
       
           
        </Row>

               
        </>
    );
};

export default UpdateVotes;