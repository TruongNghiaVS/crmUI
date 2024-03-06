
import moment from "moment"; 
const SkipTable = ({data}) => {
    function numberWithCommas(x) {

        if(x =='' || x == null)
        {
            return '';
        }
        return x.toLocaleString();
    }
    return (
        <>

        <table className='tbl-custom-data dataSkip'>

            <tbody>
            <tr className='headRow'>
                <th>STT</th>
                <th>Tên</th>
                <th>Phân loại - QH</th>
             
                <th>Ngày sinh</th>
                <th>CCCDT</th>
                <th>Số ĐT </th>
                <th>Địa chỉ HK/LH</th>
                
                <th>Từ tháng - Đến tháng</th>
                <th>Thời gian tham gia</th>
                 <th>Chức danh</th>
                <th>Mức lương-HSL</th>
                <th>Công ty</th>
                <th>Nơi làm việc(Cty)</th>
                <th>Địa chỉ liên hệ(Cty)</th>
                <th>Số ĐT công ty</th>
                <th>Người đại diện</th>
              

                <th>Người đại diện(NĐD)</th>
                <th>SĐT NĐD</th>
                <th>Email NĐD</th>
           
                <th>Ngày thêm</th>

                
            </tr>
            {


              data!=null && data.map((item, i) => {    
                return ( 
                        <tr >
                        <td>{i+1}</td>
                        <td >{item.name}</td>
                        <td> <p> {item.typeCustomer}  </p> 
                              <p className="boldTextDis"> {item.relation} </p>
                        </td>
                      
                        <td >{moment(item.dob).format("DD/MM/YYYY")}</td>
                       
                        <td> {item.cmnd}  
                             
                        </td>
                        <td> <p className="boldTextDis"> {item.phoneNumber} </p> </td>
                        <td >
                             {
                                    item.address !=""  &&
                                    <p> <strong>HK: </strong> {item.address}   </p>
                             }

                            {

                                item.address2.lenght !=""  &&
                                <p> <strong>Liên hệ: </strong> {item.address2}   </p>
                             }
                             
                        
                            
                        </td>
                      
                        <td ><p> {item.fromDay}  </p> 
                              <p> {item.toDay}  </p> 
                        </td>

                        <td >{item.timejoin}</td>

                       
                        <td>{item.position}</td>

                        <td> <p className="boldTextDis"> {numberWithCommas(item.salaryDe)}   </p> 
                              <p > {item.hsl} </p>
                        </td>

                        <td>{item.companyName}</td>
                        <td>{item.workPlace}</td>
                        <td>{item.workContact}</td>
                        <td>{item.phoneCompany}</td>
                        
                        <td ><p> {item.whoseCompany}  </p> 
                            
                              
                        </td>
                        <td>{item.personContact}</td>
                        <td>{item.personContactEmail}</td>
                        <td>{item.personContactPhone}</td>
                      
                        
                        
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