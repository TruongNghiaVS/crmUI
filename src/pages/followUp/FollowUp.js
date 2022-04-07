import React, { useState, useEffect } from 'react';
import Table from "./Table";
import { FaTable, FaFilter } from "react-icons/fa";
import DataJson from "../../utils/Data";
import { useParams } from 'react-router-dom';

const FollowUp = (props) => {
    const [valTitle, setValTitle] = useState("Danh sách theo dõi");

    let { detail } = useParams();

    useEffect(() => {
        let isUseEffect = true; 
    
        if (isUseEffect) {
            if (detail === "new-list") {
                setValTitle("Danh sách mới phân");
            } else {
                setValTitle("Danh sách theo dõi");
            }
        }
    
        return () => { isUseEffect = false };
    }, [detail, valTitle]);

    return (
        <div className="follow-up">
            <div className='box-tbl'>
                <h4 className='box-tit'>
                    <FaTable className="icon-tit" />
                    {valTitle}
                </h4>

                <div className="list-feature custom-feature">
                    <div className="search-feature">
                        <FaFilter />
                        <input className="input-search" type="text" placeholder="Tìm kiếm" />
                        <button className="btn-search">Tìm kiếm</button>
                    </div>
                </div>

                <Table theadData={ DataJson.theadDataFollowUp } tbodyData={ DataJson.tbodyDataFollowUp } tblClass="tbl-custom-data" />

                <p className="totalTable">Tổng: { DataJson.tbodyDataFollowUp.length }</p>
            </div>
        </div>
    );
};

export default FollowUp;