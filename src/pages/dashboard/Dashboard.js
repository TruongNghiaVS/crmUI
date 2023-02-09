import React ,{ useState } from "react";
import { FaTable, FaFilter, FaAngleRight } from "react-icons/fa";
import Table from "./Table";
import DataJson from "../../utils/Data";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import DashboardService from '../../services/DashboardService';
import { useEffect,useRef  } from 'react';
const Dashboard = () => {
    const [objectDataOverview, setobjectDataOverview] = useState({
            dataOverview: {}
    });

    const [objectDetail, setobjectDetail] = useState({
        data: []
});
    const [isInit, setInit] = useState(false);
    const toHHMMSS = (secs) => {
        var sec_num = parseInt(secs, 10)
        var hours   = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60
    
        return [hours,minutes,seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v,i) => v !== "00" || i > 0)
            .join(":")
    }
    const getData = ()=> {
            DashboardService.getInformationOverviewDashboard( (response) => {
                        if (response.statusCode === 200) {
                        
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
            
            DashboardService.getDetailOverview( (response) => {
                console.log("3",response);
                debugger;
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

            <div className="list-feature custom-feature">
                <div className="search-feature">
                    <FaFilter />
                    <input className="input-search" type="text" placeholder="Tìm kiếm" />
                    <input className="input-search" type="text" />
                    <button className="btn-search">Tìm kiếm</button>
                </div>
            </div>

            <div className="out-bound">
                <p>Outbound</p>
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
                    <h4 className="tit-info">Kết nối {objectDataOverview.dataOverview.perpercent}%</h4>
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

                <p className="totalTable">Tổng: { DataJson.tbodyDataDashboard.length }</p>
            </div>
        </div>
    );
};

export default Dashboard;