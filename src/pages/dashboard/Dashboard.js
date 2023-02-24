import React ,{ useState } from "react";
import { Row, Form, InputGroup, Col, FormControl, Button } from 'react-bootstrap';
import { FaTable, FaFilter, FaAngleRight } from "react-icons/fa";
import {
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import Table from "./Table";
import moment from "moment";
import DataJson from "../../utils/Data";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import DashboardService from '../../services/DashboardService';
import { useEffect,useRef  } from 'react';
const Dashboard = () => {
    const [objectDataOverview, setobjectDataOverview] = useState({
            dataOverview: {}
    });
    const [obejctPaging, setObjectPaging] = useState({
            limt: 10,
            totalRecord: 28,
            totalPage: 3,
            currentPage: 1
    });

    const [objectDetail, setobjectDetail] = useState({
        data: []
});

const [obejctSearch, setKeySearch] = useState({
    tokenSearch: ""
});
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


const jsonProfile =  JSON.parse(localStorage.getItem('user-info'));

const roleUser = jsonProfile.role;

var isAdmin = false;
if(roleUser === "2") {
    isAdmin = true;
}

const dateForPicker = (dateString) => {
    return moment(new Date(dateString)).format('YYYY-MM-DD')
};

    const [isInit, setInit] = useState(false);
    const toHHMMSS = (secs) => {
        if(!isNaN(parseFloat(secs)) && isFinite(secs))
        {
              
        }
        else 
        {
            return  "";
        }
        var sec_num = parseInt(secs, 10)
        var hours   = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60
    
        return [hours,minutes,seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v,i) => v !== "00" || i > 0)
            .join(":")
    }

    const percentFix2 = (number) => {
        if(!isNaN(parseFloat(number)) && isFinite(number))
        {
                return number.toFixed(2) +"%";
        }
        return "";
    }

     const searchData = () => {
        getData();

    }
    const getData = ()=> {
           

            let fromDate = obejctSearch.from;
            if(fromDate=="")
            {
                fromDate = null;
            }
            let bodySearch = {
                // Token: obejctSearch.tokenSearch,
                Page: obejctPaging.currentPage,
                Limit: obejctPaging.limt,
                LineCode: obejctSearch.lineCode,
                from:fromDate,
                to: obejctSearch.endTime

            };
            
            DashboardService.getInformationOverviewDashboard(bodySearch, (response) => {
                        if (response.statusCode === 200) {
                            console.log(response.value);

                            setobjectDataOverview((prevalue) => {
                                return {
                                ...prevalue,   // Spread Operator               
                                 dataOverview: response.value.data[0]
                                }
                            })
                          
                            

                        } else {
                            
                        }
            }, (error) => {
                
            });
            
            DashboardService.getDetailOverview(bodySearch, (response) => {
              
                        if (response.statusCode === 200) {
                            setobjectDetail((prevalue) => {
                                            return {
                                            ...prevalue,   // Spread Operator               
                                            data: response.value.data
                                            }
                            })
                        }
                        else{

                        }

            }, (error) => {

            });

    }
    useEffect(() => {
        if(!isInit)
        {
             getData();

             setInit(true);
        }
    }, [objectDataOverview,objectDetail]);



    return (
        <div className="dashboard">
            <h2 className="tit-dash">Dashboard</h2>

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
                                                name="endTime"
                                                value={dateForPicker(obejctSearch.endTime)}
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
                            </Row>
                          
                           

                           
                        </Form>

                       



                    </div>
                </form>
                <div className="list-feature">
                    
                    <div className="search-feature">
                      
                        
                        <button className="btn-search"  onClick={searchData} >Tìm kiếm</button>
                    </div>
                </div>


            <div className="list-box-info">
                <div className="box-detail-info">
                    <h4 className="tit-info">Tổng cuộc gọi {objectDataOverview.dataOverview.sumCall}</h4>
                    <Link className="link-info" to="/">
                        <span>View details</span>
                        <FaAngleRight className="icon-link" />
                    </Link>
                </div>
                <div className="box-detail-info">
                    <h4 className="tit-info">Tổng hợp đồng {objectDataOverview.dataOverview.sumNoAgree}</h4>
                    <Link className="link-info" to="/">
                        <span>View details</span>
                        <FaAngleRight className="icon-link" />
                    </Link>
                </div>
                <div className="box-detail-info">
                    <h4 className="tit-info">Kết nối {percentFix2(objectDataOverview.dataOverview.perpercent)}</h4>
                    <Link className="link-info" to="/">
                        <span>View details</span>
                        <FaAngleRight className="icon-link" />
                    </Link>
                </div>
                <div className="box-detail-info">
                    <h4 className="tit-info">Talktime {toHHMMSS(objectDataOverview.dataOverview.timeTalking)}</h4>
                    <Link className="link-info" to="/">
                        <span>View details</span>
                        <FaAngleRight className="icon-link" />
                    </Link>
                </div>
            </div>

            <div className='box-tbl'>
                <h4 className='box-tit'>
                    <FaTable className="icon-tit" />
                    BC Talktime
                </h4>

                <Table theadData={ DataJson.theadDataDashboard } tbodyData={ objectDetail.data } tblClass="tbl-custom-data" />

            
            </div>
        </div>
    );
};

export default Dashboard;