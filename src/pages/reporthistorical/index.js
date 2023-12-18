
import React, { useState } from "react";
import { FaTable, FaFilter } from "react-icons/fa";
import {
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import { Row, Form, InputGroup, Col, FormControl, Button } from 'react-bootstrap';
import Table from "./Table";
import DataJson from "../../utils/Data";
import Model from "../../components/model/Model";
import ModelPopup from "./ModelPopup";
import Chartsection from "./chartsection";
import TableRate from "./TableRate";
import "./User.scss";
import { useEffect,useRef  } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/ReportService';
import Paging from  "./Paging";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from "moment";
import UploadFile  from "./UploadFile";

import MasterDataService from '../../services/MasterDataNewService';


let XLSX = require("xlsx");

const dateForPicker = (dateString) => {
    return moment(new Date(dateString)).format('YYYY-MM-DD')
};



const Reporthistorical = () => {
    let { edit } = useParams();
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isInit, setInit] = useState(false);
    const [isOPenUploadFile, setisOPenUploadFile] = useState(false);
    // let typeMasterData = 5;

    const handleShowModelUploadFile = () => {
      

        setisOPenUploadFile(!isOPenUploadFile);
        
    }


    const importFile = ()=> {
        setisOPenUploadFile(!isOPenUploadFile);
  }
  const [statusList , setStatusList]=useState([]);


  const getAllStatus = ()=> {
            
    let bodySearch = {
            Token:"", 
            Page:  1,
            Limit: 100
    };
    
    MasterDataService.GetAllStatus( bodySearch, (response) => {
    if (response.statusCode === 200) {
      
                  setStatusList(response.value.data);
    } else {

    }
}, (error) => {

});

}

    const [obejctPaging, setObjectPaging ] = useState({
            limt: 10, 
            totalRecord : 28,
            totalPage: 3,
            currentPage: 1,
            type :  -1
    });

  

    
    const [objectDraw, setobjectDraw ] = useState({
            data : [],
            arrayPercent : [],
            arrayLable : []
    });

    const [obejctSearch, setKeySearch] = useState({
           tokenSearch: "",
           from: moment(),
           to: moment()
    });

    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));

    const roleUser = jsonProfile.role;
    
    var isAdmin = false;
    if(roleUser === "2" || roleUser === "5" || roleUser === "3" ) {
        isAdmin = true;
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
    
    useEffect(() => {
        if(!isInit)
        {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const token = params.get('token');
           
            //  console.log(token)//123
            if( token!= null && token !="")
             {
                  let valueControl =token;
                  let nameControl ="tokenSearch";
                 
                  setKeySearch((prevalue) => {
                      return {
                        ...prevalue,   // Spread Operator               
                        [nameControl]: valueControl
                      }
                    })
                    
    
             }
             getData();
             getAllStatus();
             setInit(true);
        }
    }, [obejctPaging]);


    const handlePaging = (data)=> {
         const key = 'currentPage';
            const value = data;
            setObjectPaging(prevState => ({
            ...prevState,
            [key]: value
            }
            ));
            getData();

            setInit(false);
    }

    const [employeeItem, setDataItem] = useState({
        "id": "-1",
        "fullName": "",
        "code": "",
        "displayName": "",
        "hour": 0,
        "day": 0
    });


    
    const handleUpdateById = (id)=> {
            setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                id:id
            }
            });
            setDataItem((prevalue) => {
                return {
                    ...prevalue,   // Spread Operator               
                    isView:false
                }
                });
            setIsOpenModel(!isOpenModel);
    }

    const handleViewById = (id)=> {
        setDataItem((prevalue) => {
        return {
            ...prevalue,   // Spread Operator               
            id:id
        }
        });
        setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                    isView:true
            }
            })


            setIsOpenModel(!isOpenModel);
    }




    

    const [dataEmployee, setData] = useState( {
        tbodyDataUser: [
         
        ],
    }  );


    const btnSerachKey = useRef(null);

    const handleAddUser = (data) => {
        
        setIsOpenModel(!isOpenModel);
        toast.success('Thêm thành công!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        getData();
    }

   

    const handleUpdate = (data) => {
        
        toast.success('Câp nhật thành công!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        });
        getData();
    }


    


    const getData = ()=> {

        let numberAss =-1;
        if(edit=="quan-ly-nguoi-than")
    {
        document.title = "Danh sách người thân";
        numberAss = 1;
    }
    else if(edit=="quan-ly-phong-ban")
    {
        document.title = "Danh sách phòng ban";
        numberAss = 2;
    }

    else if(edit=="quan-ly-trang-thai-follow")
    {
        document.title = "Danh sách trạng thái follow";
        numberAss = 3;
    }
    else 
    {
        document.title = "danh sách masterdata";
        numberAss = -1;
    }

    
        // let groupStatus =   window.location.pathname.split("/").pop();
        let bodySearch = {
            Token: obejctSearch.tokenSearch, 
            Page:  obejctPaging.currentPage,
            Limit: obejctPaging.limt, 
            type: numberAss,
            lineCode : obejctSearch.lineCode,
            statusSearch : obejctSearch.statusSearch,
            from: obejctSearch.from,
            to: obejctSearch.to
         };
       
      
          EmployeeService.GetAll( bodySearch, (response) => {
            if (response.statusCode === 200) {

             
                let dataDrawChart = response.value.data;
                let percent = 0;
                let arrayLable = [];
                let arrayPercent = [];
                var total = 0;
                dataDrawChart.forEach(item => {
                         total += item.sum;
                 });
                dataDrawChart.forEach(item => {
                        if(item.sum>0 && total >0)
                        {
                            item.percent = item.sum/total*100;
                        }
                        else 
                        {
                            item.percent =0;
                        }
                });

                dataDrawChart.forEach(item =>
                     {
                    arrayLable.push(item.reasonName);
                    arrayPercent.push(item.percent);
                    }
                );
                
                setobjectDraw((prevalue) => {
                return {
                ...prevalue,   // Spread Operator               
                data: dataDrawChart,
                arrayPercent: arrayPercent,
                arrayLable: arrayLable
                }
                });
          } else {
                
             }
          }, (error) => {
           
          });
          EmployeeService.GetAllImpactHistory( bodySearch, (response) => {
                if (response.statusCode === 200) {

                    renderData(response.value);
                
            } else {
                    
                }
          }, (error) => {
           
          });

    }
    const exportData2 =()=> {
        let fromDate = obejctSearch.from;
        if(fromDate=="")
        {
            fromDate = null;
        }
        let bodySearch = {
            Token: obejctSearch.tokenSearch,
            Page: obejctPaging.currentPage,
            Limit: obejctPaging.limt,
            LineCode: obejctSearch.lineCode,
            statusSearch: obejctSearch.statusSearch,
            phoneLog: obejctSearch.phoneLog,
            Disposition: obejctSearch.status,
            from:fromDate,
            to: obejctSearch.to

        };
  
        EmployeeService.exportDataImpact2(  bodySearch, (response) => {
                if (response.statusCode === 200) {
                    exportDataExcel2(response.value.data);
                } else {
                    
                }
        }, (error) => {

        });
    }

    const exportData = () => {
    
        let fromDate = obejctSearch.from;
        if(fromDate=="")
        {
            fromDate = null;
        }
        let bodySearch = {
            Token: obejctSearch.tokenSearch,
            Page: obejctPaging.currentPage,
            Limit: obejctPaging.limt,
            LineCode: obejctSearch.lineCode,
            statusSearch: obejctSearch.statusSearch,
            phoneLog: obejctSearch.phoneLog,
            Disposition: obejctSearch.status,
            from:fromDate,
            to: obejctSearch.to

        };
  
        EmployeeService.exportDataImpact(  bodySearch, (response) => {
                if (response.statusCode === 200) {
                    exportDataExcel(response.value.data);
                } else {
                    
                }
        }, (error) => {

        });

    }


    const exportDataExcel = (dataReder) => {

        var DataExport = dataReder;
          let workBook = XLSX.utils.book_new();
          const Heading = [
            [
                'Số hợp đồng', 'Tên khách hàng', 'Ngày sinh','CCCD/CMND', 'Ngày đăng ký',
                    'Mã SP', 'Tên SP',
                    'Giá SP',
                    'Tổng phạt',
                    'Tổng phải trả',
                    'Kỳ hạn TT',
                    'Trả tháng(EMI)',
                    'Ngày TT gần nhất',
                    'Số kỳ đã TT',
                    'Nợ Gốc',
                    'DPD',
                    'SĐT',
                    'Ghi chú ban đầu',
                    'Đường(chính)',
                    'Quận/Huyện(c)',
                    'Tỉnh/TP(chính)',
                    'Đường(tạm)',
                    'Quận/Huyện(t)',
                    'Tỉnh/TP(tạm)',
                    'Đường',
                    'Quận/Huyện',
                    'Tỉnh/TP',
                    'Đã thanh toán',
                    'Lý do',
                    'trạng thái',
                    'Nhân viên',
                    'Ghi chú tác động',
                    'Ghi chú tác động',
                    'Ngày hứa',
                    'Số tiền hứa',
                    'Ngày hẹn',
                    'Ngày tạo',
                    'Ngày cập nhật',
                    'Cuộc gọi thứ'



            ]
        ];
          
        const workSheet = XLSX.utils.json_to_sheet(DataExport,  
            { origin: 'A2', skipHeader: true }
            );
        XLSX.utils.sheet_add_aoa(workSheet, Heading, { origin: 'A1' });
        XLSX.utils.book_append_sheet(workBook, workSheet, `data`);

        let exportFileName = `impactHistory.xls`;

                // var i;
                // for (i = 1; i <= sheets["data"].length; i++) {
                // spreadsheet.Sheets["data"]["A"+i].s = {
                // fill: {
                // patternType: "solid",
                // fgColor: { rgb: "111111" }
                // }
                // };
                // }
         XLSX.writeFile(workBook,exportFileName);

}


const exportDataExcel2 = (dataReder) => {

    var DataExport = dataReder;
      let workBook = XLSX.utils.book_new();
      const Heading = [
        [
         
           'Ngày tác động(MM/dd/yyyy)',
           'Mã nhân viên',
           'Mã KH',
           'Phương thức liên hệ',
           'Nơi liên hệ',
           'Người liên hệ',
           'Mã liên hệ',
           'Ngày hứa TT(MM/dd/yyyy)',
           'Số tiền hứa thanh toán',
           'Nghi ngờ gian lận',
           'Ghi chú T12',
           'Cuộc gọi thứ'
        ]
    ];
 
      
    const workSheet = XLSX.utils.json_to_sheet(DataExport,  
        { origin: 'A2', skipHeader: true }
        );
    XLSX.utils.sheet_add_aoa(workSheet, Heading, { origin: 'A1' });
    XLSX.utils.book_append_sheet(workBook, workSheet, `data`);

    let exportFileName = `impactHistoryFinal.xls`;

     XLSX.writeFile(workBook,exportFileName);

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

    
            }
           
            setData(prew=>({...prew,tbodyDataUser:dataReder.data}));

            setObjectPaging((prevalue) => {
                return {
                  ...prevalue,
                  totalRecord:dataReder.total,
                  totalPage: totalPage

                }
              })

    }


    const handleShowModel = () => {

        setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                id:"-1"
            }
            })
      setIsOpenModel(!isOpenModel);
        // setIsOpenModel(!isOpenModel);
    }

    const searchData =()=> {
            getData();

    }

    const handleInputChangesearch =(event)=> {
        let valueControl = event.target.value;
        let nameControl = event.target.name;
       
        setKeySearch((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: valueControl
            }
          })
     
    }

    
    const  deleteEmploy = (idEmp) => { 
       
    
        const deleteIdModel = {
            Id:  idEmp,
           
          };
          EmployeeService.delete(
            deleteIdModel,
            handleDeleteSucess, 
            handleDeleteError);
    }
    const handleDeleteSucess = (data) => {
        if(data.statusCode == 200)
        {   
                getData();
                Swal.fire(
                'Đã xóa!',
                'Đã xóa thành công.',
                'success'
                )
        }
        else 
        {
                toast.error('Có lỗi khi xóa:'+ data.value, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                });
        }

    }

    const handleDeleteError = (data) => {

    }
    
    const handleDeleteEmpl = (id)=> {
         Swal.fire({
            title: 'Bạn chắc chắn xóa',
            text: "Bạn sẽ không lấy lại được dữ liệu",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý!'
          }).then((result) => {
             if (result.isConfirmed) {
                deleteEmploy(id);
                 
            }
          })

    }


    return (

        <>

<div className="user">
            <div className='box-tbl'>
                <h4 className='box-tit'>
                    <FaTable className="icon-tit" />
                     Báo cáo lịch sử tương tác
                </h4>

                

                <div className="list-feature">

                <form className='form-login'>
                    <div>

                        <Form>
                            <Row>
                                <Col>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Từ ngày:</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                                            <Form.Control
                                                type="date"
                                                name="from"
                                                value={dateForPicker(obejctSearch.from)}
                                                placeholder="Từ ngày"
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Đến ngày:</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text className="input-group-icon"><FaAt /></InputGroup.Text>
                                            <Form.Control
                                                type="date"
                                                name="to"
                                                value={dateForPicker(obejctSearch.to)}
                                                placeholder="Đến ngày"
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                {
                                isAdmin? 

                            
                                <Col >

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>line gọi:</Form.Label>
                                        <InputGroup className="mb-2">
                                        <Form.Control
        type="text" name ="lineCode"  onChange={handleInputChange} value ={obejctSearch.lineCode} 
      />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>

                                
                              :<></>
                            }

<Col >

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Trạng thái:</Form.Label>
               <InputGroup className="mb-2">
                      

                        <Form.Select name ="statusSearch" onChange={handleInputChange} value = {obejctSearch.statusSearch}>
                       
                            
                                <option  selected value ="-1" >Chọn trạng thái</option>
                             {
                                  statusList.map((item, index) => {
                                            return  <option value={item.id}>{item.code +"-" +item.fullName }</option>
                                  })
                              }
                        </Form.Select>

                       

                    </InputGroup>
    </Form.Group>
</Col>
                            </Row>
                            

                           
                        </Form>

                       



                    </div>
                </form>

                        <div className="button-feature">
                    
                        
                           
                        </div>
                        <div className="search-feature">
                                {/* <button className="btn-search" onClick={()=>importFile()}>Nhập dữ liệu</button> */}
                                <button className="btn-search" onClick={exportData2}>Xuất dữ liệu BC</button>
                                <button className="btn-search" onClick={exportData}>Xuất dữ liệu</button>
                                <button  className="btn-search"  onClick= {searchData}>Tìm kiếm</button>
                        </div>
                </div>

              
            </div>

          


        </div>
            <Row>
                <Col  className='col-4'>
                <Chartsection  dataRaw = {objectDraw} />
                </Col>

                <Col >
                <TableRate dataRaw = {objectDraw}/>
                </Col>
                
            </Row>
   
        <div className="user">
            <div className='box-tbl'>
                <Table theadData={ DataJson.tbheadReportHistory } dataDraw={dataEmployee} handleDelete = {handleDeleteEmpl} handleViewById = {handleViewById} handleUpdateById = {handleUpdateById} tbodyData={ DataJson.tbodyDataUser } tblClass="tbl-custom-data" />
                <Paging dataPaging = {obejctPaging} handlePaging = {handlePaging}/>
            
            </div>

            { isOpenModel && <Model handleClose ={handleShowModel} content={<ModelPopup dataItem= {employeeItem} typeMasterData = { obejctPaging.type }  handleAdd={handleAddUser}  handleUpdate={handleUpdate}  handleClose={handleShowModel} />} /> }

            {
                isOPenUploadFile && <Model                                        
                    handleClose ={handleShowModelUploadFile}
                    content={<UploadFile/>} />
             }
        </div>
        </>
    );
};

export default Reporthistorical;