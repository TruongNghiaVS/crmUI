
import moment from "moment"; 
const ImpactHistory = ({data}) => {
    return (
        <>

        <table className='tbl-custom-data'>

            <tbody>
            <tr className='headRow' >
                <th>Gọi bởi</th>
                <th>Thời điểm gọi</th>
                <th>Ghi chú</th>
                <th>Mã lý do</th>
                <th>Ngày tạo</th>
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

export default ImpactHistory;