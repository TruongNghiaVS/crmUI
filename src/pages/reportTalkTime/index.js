import React, { useState } from "react";
import { Row, Form, InputGroup, Col, FormControl, Button } from 'react-bootstrap';
import {
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import { FaTable, FaFilter } from "react-icons/fa";
import Table from "./Table";
import moment from "moment";
import DataJson from "../../utils/Data";
import Model from "../../components/model/Model";
import ModelAddUser from "./ModelUser";
import "./User.scss";
import { useEffect, useRef } from 'react';
import ConstantData from '../../utils/Constants';
import Services from '../../services/ReportTalkTimeService';
import Paging from "./Paging";
import { toast } from 'react-toastify';
import DateTimePicker from 'react-datetime-picker';

import Swal from 'sweetalert2'
let XLSX = require("xlsx");

const User = () => {
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isInit, setInit] = useState(false);
    const [obejctPaging, setObjectPaging] = useState({
        limt: 10,
        totalRecord: 28,
        totalPage: 3,
        currentPage: 1
    });
    const [obejctSearch, setKeySearch] = useState({
        tokenSearch: ""
    });

    const [value, onChange] = useState(new Date());

    const [model, setmodel] = useState({

    });
    const dateForPicker = (dateString) => {
        return moment(new Date(dateString)).format('YYYY-MM-DD')
    };


    const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));

    const roleUser = jsonProfile.role;

    var isAdmin = false;
    if(roleUser === "2") {
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
    const handlePaging = (data) => {

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
        "id": "12",
        "fullName": "",
        "userName": "",
        "phoneNumber": "",
        "email": "",
        "address": "",
        "RoleIdL": "1",
        "companyName": "2"
    });



    const handleUpdateById = (id) => {
        setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                id: id
            }
        });
        setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                isView: false
            }
        });
        setIsOpenModel(!isOpenModel);
    }

    const handleViewById = (id) => {
        setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                id: id
            }
        });
        setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                isView: true
            }
        })


        setIsOpenModel(!isOpenModel);
    }

 
    const exportData = () => {
    
        let fromDate = obejctSearch.fromTime;
        if(fromDate=="")
        {
            fromDate = null;
        }
        let bodySearch = {
            Token: obejctSearch.tokenSearch,
            Page: obejctPaging.currentPage,
            Limit: obejctPaging.limt,
            LineCode: obejctSearch.lineCode,
            phoneLog: obejctSearch.phoneLog,
            Disposition: obejctSearch.status,
            from:fromDate,
            to: obejctSearch.endTime

        };

        Services.exportData(  bodySearch, (response) => {
            if (response.statusCode === 200) {
                exportDataExcel(response.value.data);
            } else {



            }
        }, (error) => {

        });

    }





    const [dataEmployee, setData] = useState({
        tbodyDataUser: [

        ],
    });


    useEffect(() => {

        if (!isInit) {

            document.title = "Danh sách nhân viên";
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const token = params.get('token');

            //  console.log(token)//123
            if (token != null && token != "") {
                let valueControl = token;
                let nameControl = "tokenSearch";

                setKeySearch((prevalue) => {
                    return {
                        ...prevalue,   // Spread Operator               
                        [nameControl]: valueControl
                    }
                })


            }
            getData();
            setInit(true);
        }




    }, [obejctPaging]);

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





    const getData = () => {

        let fromDate = obejctSearch.fromTime;
        if(fromDate=="")
        {
            fromDate = null;
        }
        let bodySearch = {
            Token: obejctSearch.tokenSearch,
            Page: obejctPaging.currentPage,
            Limit: obejctPaging.limt,
            LineCode: obejctSearch.lineCode,
            phoneLog: obejctSearch.phoneLog,
            Disposition: obejctSearch.status,
            from:fromDate,
            to: obejctSearch.endTime

        };
        Services.GetAll(bodySearch, (response) => {
            if (response.statusCode === 200) {
                renderData(response.value);
            } else {
            }
        }, (error) => {

        });

    }

    const exportDataExcel = (dataReder) => {

        var DataExport = dataReder;
        let workBook = XLSX.utils.book_new();
        const workSheet = XLSX.utils.json_to_sheet(DataExport);

        XLSX.utils.book_append_sheet(workBook, workSheet, `data`);

        let exportFileName = `talktimeReport.xls`;
        XLSX.writeFile(workBook, exportFileName);

    }

    const renderData = (dataReder) => {


        let totalPage = 1;

        if (dataReder.total < 1) {
            totalPage = 1;
        }
        if (obejctPaging.limt < 1) {
            totalPage = 1;


        }
        else {
            totalPage = Math.floor(dataReder.total / obejctPaging.limt) + 1;


        }

        setData(prew => ({ ...prew, tbodyDataUser: dataReder.data }));

        setObjectPaging((prevalue) => {
            return {
                ...prevalue,
                totalRecord: dataReder.total,
                totalPage: totalPage

            }
        })

    }
    const calendarIcon = () => {
        return <img src="/datetimecontrol/calander.png" />;
    }

    const handleShowModel = () => {

        setDataItem((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                id: "-1"
            }
        })
        setIsOpenModel(!isOpenModel);
        // setIsOpenModel(!isOpenModel);
    }

    const searchData = () => {
        getData();

    }

   

  


    const deleteEmploy = (idEmp) => {


        const deleteIdModel = {
            Id: idEmp,

        };
        Services.delete(ConstantData.URL_Employee_Delete, ConstantData.HEADERS,
            deleteIdModel,
            handleDeleteSucess,
            handleDeleteError);
    }
    const handleDeleteSucess = (data) => {
        if (data.statusCode == 200) {
            getData();
            Swal.fire(
                'Đã xóa!',
                'Đã xóa thành công.',
                'success'
            )
        }
        else {
            toast.error('Có lỗi khi xóa:' + data.value, {
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

    const handleDeleteEmpl = (id) => {
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
        <div className="user">
            <div className='box-tbl'>
                <h4 className='box-tit'>
                    <FaTable className="icon-tit" />
                    Báo cáo Talktime
                </h4>

            
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
                                                name="fromTime"
                                                value={dateForPicker(obejctSearch.fromTime)}
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
                                                name="endTime"
                                                value={dateForPicker(obejctSearch.endTime)}
                                                placeholder="Đến ngày"
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                            {
                                isAdmin? <Row>

                            
                                <Col>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>line gọi:</Form.Label>
                                        <InputGroup className="mb-2">
                                        <Form.Control
        type="text" name ="lineCode"  onChange={handleInputChange} value ={obejctSearch.lineCode} 
      />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>



                      
                                
                            </Row>:<></>
                            }
                           

                           
                        </Form>

                       



                    </div>
                </form>
                <div className="list-feature">
                    
                    <div className="search-feature">
                        <FaFilter />
                        
                        <button className="btn-search" onClick={searchData}>Tìm kiếm</button>
                        <button className="btn-search" onClick={exportData}>Xuất file</button>
                    </div>
                </div>

                <Table theadData={DataJson.theadDataReportTalkTime} dataDraw={dataEmployee} handleDelete={handleDeleteEmpl} handleViewById={handleViewById} handleUpdateById={handleUpdateById} tbodyData={DataJson.tbodyDataUser} tblClass="tbl-custom-data" />
                <Paging dataPaging={obejctPaging} handlePaging={handlePaging} />

            </div>

            {isOpenModel && <Model handleClose={handleShowModel} content={<ModelAddUser dataItem={employeeItem} handleAdd={handleAddUser} handleUpdate={handleUpdate} handleClose={handleShowModel} />} />}


        </div>
    );
};

export default User;