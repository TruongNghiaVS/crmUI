import React, { useState } from "react";
import { Row, Form, InputGroup, Col, FormControl, Button } from 'react-bootstrap';
import {
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import { FaTable, FaFilter } from "react-icons/fa";

import moment from "moment";
import DataJson from "../../utils/Data";


import "./User.scss";
import { useEffect, useRef } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/ReportService';

import { toast } from 'react-toastify';
import DateTimePicker from 'react-datetime-picker';

import Swal from 'sweetalert2'
let XLSX = require("xlsx");

const User = () => {
   

    useEffect(() => {
    });



    return (
            <>
                    <div className="user">
                        <div className='box-tbl'>
                            <h4 className='box-tit'>
                                <FaTable className="icon-tit" />
                                Danh sách tài nguyên
                            </h4>

                        </div>
                    </div>
                    <div className="template1"> 
                             <p> 
                                    <img src ="/checkSucess.png" />
                                    <span>Mẫu đơn khởi kiện </span>
                            </p>
                            <p> Mẫu đơn khởi kiện </p>
                     </div>
                </>
    );
};

export default User;