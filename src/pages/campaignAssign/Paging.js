
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css
import React, { useState } from "react";
import { useEffect,useRef  } from 'react';
import "./paging.scss";
// import Pagination from "react-pagination-library";
// import "react-pagination-library/build/css/index.css"; 
const Paging = (props) => {
  
  const [modelPage  , setmodelPage]=useState({
            currentPage: 1,
            totalRecord: 10,
            totalPage: 1
    });
    useEffect(() => {
      
            var item = props.dataPaging;
            setmodelPage((prevalue) => {
                  return {
                    ...prevalue,   // Spread Operator               
                    currentPage: item.currentPage,
                    totalPage:item.totalPage,
                    totalRecord:item.totalRecord
                 }
            })
   },  [modelPage]);
    
    const changeCurrentPage = (numPage) => {
      
        props.handlePaging(numPage);
         
     
    };
     return (
            <div className="align-right">
                  <Pagination
                    currentPage={modelPage.currentPage}
                    totalPages={modelPage.totalPage}
                    changeCurrentPage={changeCurrentPage}
                    theme="square-i"
                  />
                   <p className="totalTable">Tổng: {modelPage.totalRecord}</p>
            </div>
    );
};

export default Paging;