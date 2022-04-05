import React, { useState } from "react";
import { FaTable, FaFilter } from "react-icons/fa";
import Table from "./Table";
import DataJson from "../../utils/Data";
import Model from "../../components/model/Model";
import ModelAddUser from "./ModelUser";
import "./User.scss";

const User = () => {
    const [isOpenModel, setIsOpenModel] = useState(false);

    const handleAddUser = () => {
        console.log('add user');
        setIsOpenModel(!isOpenModel);
    }

    const handleShowModel = () => {
        setIsOpenModel(!isOpenModel);
    }

    return (
        <div className="user">
            <div className='box-tbl'>
                <h4 className='box-tit'>
                    <FaTable className="icon-tit" />
                    Người dùng
                </h4>

                <div className="list-feature">
                <div className="button-feature">
                    <button className="btn-ft btn-add" onClick={() => handleShowModel()}>Thêm</button>
                    <button className="btn-ft btn-export">Xuất Excel</button>
                    <button className="btn-ft btn-more">Mở rộng</button>
                </div>
                <div className="search-feature">
                    <FaFilter />
                    <input className="input-search" type="text" placeholder="Tìm kiếm" />
                    <button className="btn-search">Tìm kiếm</button>
                </div>
                </div>

                <Table theadData={ DataJson.theadDataUser } tbodyData={ DataJson.tbodyDataUser } tblClass="tbl-custom-data" />

                <p className="totalTable">Tổng: { DataJson.tbodyDataUser.length }</p>
            </div>

            { isOpenModel && <Model content={<ModelAddUser handleAdd={handleAddUser} handleClose={handleShowModel} />} handleClose={handleShowModel} /> }
        </div>
    );
};

export default User;