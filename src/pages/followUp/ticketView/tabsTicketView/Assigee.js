import { Row, Form, InputGroup, Col, FormControl, Button } from 'react-bootstrap';
import moment from "moment"; 
import Swal from 'sweetalert2';
import CampagnProfileService from '../../../../services/CampagnProfileService';
const Assigee = ({data , handleInputChange, dataView1,listUser,masterData  }) => {
    const handleSucessUpdate = (data) => {
        if(data.statusCode == 200)
        {
                Swal.fire({
                    
                    icon: 'success',
                    title: 'Lưu thành công',
                    showConfirmButton: true,
                    
                })
                //saveImpact();
                // props.handleUpdate(model);  
        }
        else 
        {
                Swal.fire({
                    icon: 'error',
                    title: 'lưu thất bại',
                    text: 'Thao tác thất bại',
                
                })
        }
}

const handleErrUpdate = (data) => {



}
const SaveAssi = ()=> {

    Swal.fire({
    title: 'Bạn chắc chắn xóa',
    text: "Bạn sẽ không lấy lại được dữ liệu",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Đồng ý!'
    })
    .then((result) => {
    if (result.isConfirmed) {
        
            const modelUpdate = {


            }
  
            modelUpdate.id = data.id;
            modelUpdate.assignedId = data.assignee;

            console.log(modelUpdate);
            CampagnProfileService.assigee(
                modelUpdate,
                handleSucessUpdate, 
                handleErrUpdate
            );
    
    }
    })
    
    }
    
 
        
    return (
        <>  

<Form.Label htmlFor="basic-url">Chuyển phiếu</Form.Label>
                {/* <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Phòng ban</InputGroup.Text>
                    <Form.Select aria-label="Default select example"
                        name = "department"
                        onChange={handleInputChange} 
                        value = {data.assignee}
                       
                    >

            <option value = "-1" selected>Chọn phòng ban</option>
   
                    {
                              masterData.data.map((item, i) => {    
                                if( item.type == "2")
                                {
                                    return ( <>
                                        <option value = {item.id}>{item.name}</option>
   
                                   </>)
                                }
                       
                        })
                        }
                    </Form.Select>
                </InputGroup> */}
              <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Nhân sự</InputGroup.Text>
                    <Form.Select aria-label="Default select example"   
                     name = "assignee"
                    onChange={handleInputChange} 

                    value = {data.assignee}
                     >
                    <option value = "-1" >Chọn nhân viên được phân công</option>
                    {
                    listUser.data.map((item, i) => {    

                        return ( <>
                            <option value = {item.id}>{item.userName}-{item.fullName}</option>
    
                                </>)
                   
                       
                        })
                        }
                    </Form.Select>
                </InputGroup>

                <div className="mt-3 text-center">
                    <Button variant="outline-primary" onClick= {SaveAssi}>Phân công</Button>
                </div>

        </>
    );
};

export default Assigee;