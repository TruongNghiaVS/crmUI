import { Row, Form, InputGroup, Col, FormControl, Button } from 'react-bootstrap';
import moment from "moment"; 
const Skip = ({data , saveSkip, handleInputChange}) => {
    
    return (
        <>  
      
            <Form.Label htmlFor="basic-url">Skip</Form.Label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={8} name ="skipContent" onChange={handleInputChange} 
                       value = {data.skipContent}  />
                </Form.Group>
                <div className="mt-3 text-center">
             

                    <Button onClick= {saveSkip} variant="outline-primary">Cập nhật skip</Button>
                </div>
        </>
    );
};

export default Skip;