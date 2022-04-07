import React from "react";
import { FaTable, FaFilter, FaAngleRight } from "react-icons/fa";
import Table from "./Table";
import DataJson from "../../utils/Data";
import { Link } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
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
                    <h4 className="tit-info">Tổng cuộc gọi 0</h4>
                    <Link className="link-info" to="/">
                        <span>View details</span>
                        <FaAngleRight className="icon-link" />
                    </Link>
                </div>
                <div className="box-detail-info">
                    <h4 className="tit-info">Tổng hợp đồng 0</h4>
                    <Link className="link-info" to="/">
                        <span>View details</span>
                        <FaAngleRight className="icon-link" />
                    </Link>
                </div>
                <div className="box-detail-info">
                    <h4 className="tit-info">Kết nối 0%</h4>
                    <Link className="link-info" to="/">
                        <span>View details</span>
                        <FaAngleRight className="icon-link" />
                    </Link>
                </div>
                <div className="box-detail-info">
                    <h4 className="tit-info">Talktime 00:00:00</h4>
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

                <Table theadData={ DataJson.theadDataDashboard } tbodyData={ DataJson.tbodyDataDashboard } tblClass="tbl-custom-data" />

                <p className="totalTable">Tổng: { DataJson.tbodyDataDashboard.length }</p>
            </div>
        </div>
    );
};

export default Dashboard;