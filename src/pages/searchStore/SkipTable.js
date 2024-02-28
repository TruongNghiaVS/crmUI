
import moment from "moment"; 
const SkipTable = ({data}) => {
    return (
        <>

        <table className='tbl-custom-data'>

            <tbody>
            <tr className='headRow'>
                <th>Tên</th>
                <th>Phân loại KH</th>
                <th>QH với</th>
                <th>Ngày sinh</th>
                <th>Số ĐT</th>
                <th>Địa chỉ liên hệ</th>
                <th>Thời gian đi làm</th>
                <th>Chức danh</th>
                <th>Mức lương</th>
                <th>Tên đơn vị</th>
                <th>Nơi làm việc</th>
                <th>Ngày thêm</th>
            </tr>
            {


              data!=null && data.map((item, i) => {    
                return ( 
                        <tr >
                        <td >{item.name}</td>
                        <td>{item.typeCustomer}</td>
                        <td>{item.relation}</td>
                        <td >{moment(item.dob).format("DD/MM/YYYY")}</td>
                        <td >{item.phoneNumber}</td>
                        <td >{item.address}</td>
                        <td >{item.timeWork}</td>
                        <td>{item.position}</td>
                        <td>{item.salaryDe}</td>
                        <td> {item.companyName}</td>
                        <td> {item.workPlace}</td>
                        <td >{moment(item.createAt).format("DD/MM/YYYY")}</td>
                        
                    </tr>)
                })
            }
            </tbody>
        </table>
        
        </>
    );
};

export default SkipTable;