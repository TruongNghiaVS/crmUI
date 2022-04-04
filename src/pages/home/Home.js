import { FaTable, FaFilter } from "react-icons/fa";
import Table from "../../components/table/Table";
import DataJson from "../../utils/Data";

const Home = () => {
  return (
    <div className='home'>
      <div className='box-tbl'>
        <h4 className='box-tit'>
          <FaTable className="icon-tit" />
          Chiến dịch
        </h4>

        <div className="list-feature">
          <div className="button-feature">
            <button className="btn-ft btn-add">Thêm</button>
            <button className="btn-ft btn-export">Xuất Excel</button>
            <button className="btn-ft btn-more">Mở rộng</button>
          </div>
          <div className="search-feature">
            <FaFilter />
            <input className="input-search" type="text" placeholder="Tìm kiếm" />
            <button className="btn-search">Tìm kiếm</button>
          </div>
        </div>

        <Table theadData={ DataJson.theadData } tbodyData={ DataJson.tbodyData } tblClass="tbl-custom-data" />

        <p className="totalTable">Tổng: { DataJson.tbodyData.length }</p>
      </div>
    </div>
	);
}

export default Home;