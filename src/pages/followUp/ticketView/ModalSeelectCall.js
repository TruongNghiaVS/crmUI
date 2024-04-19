import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import moment from "moment"; 
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';


import  { useState } from "react";
import { useEffect } from 'react';
import Paging from  "../../fololowNew/Paging";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import ConstantData from '../../../utils/Constants';
import EmployeeService from '../../../services/EmployeeService';

const ModalSeelectCall = (props) => {
    
    const [fileTran , setfilUPload]=useState({

    });

    const [obejctPaging, setObjectPaging ] = useState({
        limt: 10, 
        totalRecord : 28,
        totalPage: 3,
        currentPage: 1,
      
    });
    const [dataEmployee, setData] = useState( {
        tbodyDataUser: [
         
        ],
    }  ); 
    const [obejctSearch, setKeySearch] = useState({
        tokenSearch: "",
       
     
    });
    const [isInit, setInit] = useState(false);
    const handlePaging = (data)=> {

        const key = 'currentPage';
        const value = data;
   
        setObjectPaging(prevState => ({
        ...prevState,
        [key]: value
        }
        ));
        loadData();

      
}
    const [id , setid]=useState("");


     useEffect(() => {
      
        loadData();



     },[]);
     

 
 

     const loadData = (PackageKey ='')=> {
        let typegetData = "0";


        var skipData  = false;
   
        
        let bodySearch = {
           Token: obejctSearch.token, 
           
           Page:  obejctPaging.currentPage,
           Limit: 10,
          typegetData: "0",
        

         };
         EmployeeService.GetAll(ConstantData.URL_campagnProfile_GetALl, ConstantData.HEADERS, bodySearch, (response) => {
               if (response.statusCode === 200) {
                      renderData(response.value);
               } else {

               }
         }, (error) => {
          
         });

   }


   
   const renderData = (dataReder) => {

          
    let totalPage = 1;

    if(dataReder.total <1 )
    {
        totalPage = 1;
    }
    if( obejctPaging.limt <1)
    {
        totalPage = 1;
       

    }
    else 
    {
         totalPage = Math.floor(dataReder.total/obejctPaging.limt ) +1;

        //totalPage =10;
    }
    totalPage =10;
    setData(prew=>({...prew,tbodyDataUser:dataReder.data}));

    setObjectPaging((prevalue) => {
        return {
          ...prevalue,
          totalRecord:dataReder.total,
          totalPage: totalPage

        }
      })

}

const handleInputChange = (event) => {
     
    let valueControl = event.target.value;
    let nameControl = event.target.name;
    setKeySearch((prevalue) => {
        return {
            ...prevalue,   // Spread Operator               
            [nameControl]: valueControl
        }
    })

}

const searchData =()=> {

           

    loadData();

}

const openDetail =(id)=> {
    props.handleClose();

    window.location.href = '/follow-up/' +id;

}
const TableRow = ({data ,rowIndex }) => {
  
    rowIndex = rowIndex +1;
    let likUrl = "/follow-up/" + data.id;
    let colorcode = data.colorCode;

    if(colorcode =="" || colorcode == null)
    {
        colorcode ="white";
    }
    return (
         <tr>
                        <td>  {rowIndex} </td>
                        <td>
                              {data.noAgreement}

                        </td>
                        <td>
                              DPD:  {data.dpd}  <br></br>

                            

                        </td>
                        <td>
                              <a href="javascript:void(0)"  onClick={() => openDetail(data.id)}  > 
                                 Xem thông tin
                              </a>

                        </td>

                       
                </tr>
    );
};
    return (
        <div className="model">
            <div className="header-model">
                  <h4>Các hồ sơ chưa xử lý</h4>
            </div>
            
             <div className="main-model">
                <form id ="frmElement" className='form-login' noValidate  >

                <Row>
                                <Col>

                                     <Form.Group className="mb-3" >
                                        <Form.Label>Từ khóa:</Form.Label>
                                        <InputGroup className="mb-2">
                                        <Form.Control
                                        type="text" name ="token" placeholder="Họ tên"  onChange={handleInputChange} value ={obejctSearch.token} 
                                        />
                                        </InputGroup>
                                     </Form.Group>
                                </Col>
                    </Row>                  
     
         
                    
              </form>
              <div className="list-feature">
                    
                  
              
                <div className="search-feature">
                  
                    <button  className="btn-search"  onClick= {searchData}>Tìm kiếm </button>
                </div>
            </div>

              <table className="tbl-custom-data">
                 <thead>
                            <tr className='headRow'>
                            <th> STT</th>
                            <th> Số HĐ</th>
                            <th> Vắn tắt</th>
                            <th>Thao tác </th> 
                        </tr>
                </thead>
                <tbody>
               

                {
                
                dataEmployee.tbodyDataUser.map((item, index) => {

                     return <TableRow data={item} rowIndex = { index } />;
                })
                }
                </tbody>
              
          </table>
                  <Paging dataPaging = {obejctPaging} handlePaging = {handlePaging}/>
            </div>

            <div className="footer-model">
                <button className="btn-model btn-closes" onClick={props.handleClose}>Đóng</button>
            </div>
        </div>
    );
};

export default ModalSeelectCall;