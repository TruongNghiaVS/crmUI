 import { 
    FaUser, FaAt, FaLock, FaBuilding, FaPhone, FaEnvelope, FaPortrait
} from 'react-icons/fa';
import moment from "moment"; 
import { Row, Form, InputGroup, Col, FormControl,Button } from 'react-bootstrap';
import  { useState } from "react";
import { useEffect } from 'react';
import ConstantData from '../../utils/Constants';
import EmployeeService from '../../services/MasterDataService';
import { toast } from 'react-toastify';
import { IoAddOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";

const RowAssigee = (props) => {
    
    const [model , setmodel]=useState({

            fullName: props.dataDraw.fullName,
            rowSTT:  props.rowstt, 
            sumCounted: props.dataDraw.sumCount,
            AssigeeCounted:  props.dataDraw.sumCoun,
            sumCount: 0, 
            processingCount: 0,
            closedCount: 0,
            key: props.dataDraw.id, 
            id: props.dataDraw.id,
            numberHasAssigee: props.dataDraw.numberHasAssigee,
            numberHasClose: props.dataDraw.numberHasClose,
            numberHaveNotAssigee: props.dataDraw.numberHaveNotAssigee,
            numberProcessing : props.dataDraw.numberProcessing,
            numberNotProcess: props.dataDraw.numberNotProcess,
            numberHasSkip: props.dataDraw.numberHasSkip
    });
    
    useEffect(() => {


     }, [model]);

  
     const increaseCount = () =>  {
       let sumCountedNew = model.sumCounted +1;
        setmodel((prevalue) => {
              return {
                ...prevalue,   // Spread Operator               
                sumCounted: sumCountedNew
            }
        })

        props.updateDataSelect({
            sumCounted: sumCountedNew,
           
            key: props.dataDraw.id, 
           
        });
    
    }

     const decreaseCount = () =>  {
   
        let sumCountedNew = model.sumCounted -1;
        if(sumCountedNew<0)
        {
            sumCountedNew =0;
        }
        setmodel((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                sumCounted: sumCountedNew
            }
        })
        props.updateDataSelect({
            sumCounted: sumCountedNew,
            key: props.dataDraw.id, 
           
        });

    }
    const handleInputChange =(event)=> {
        
        let valueControl = event.target.value;
        let nameControl = event.target.name;
        setmodel((prevalue) => {
            return {
              ...prevalue,   // Spread Operator               
              [nameControl]: parseInt(valueControl)
            }
         })
         props.updateDataSelect({
            sumCounted: valueControl,
           
            key: props.dataDraw.id, 
           
        });
     }
      const dateForPicker = (dateString) => {
        return moment(new Date(dateString)).format('YYYY-MM-DD')
    };
    
 
    return (
        

        <tr className='assigneetr' >
        <td><input type="checkbox" name ="selectId"     defaultChecked={false} /></td>
        <td>{model.rowSTT}</td>
        <td>{model.fullName}</td>
        <td className='inputAssignee'>
              <InputGroup >
                     <FormControl  aria-label="Small" 
                     aria-describedby="inputGroup-sizing-sm"
                      name = "sumCounted"  placeholder="SL"
                      onChange={handleInputChange}
                      type ="number"
                      min ="0"
                      max = "1000"
                      value = {model.sumCounted}   required />
               </InputGroup>
        </td>
        <td  className='align_center'>
           <IoAddOutline onClick={increaseCount} className="icon-add" />
        </td>
        <td  className='align_center'>
             <GrSubtractCircle onClick={decreaseCount} className="icon-sub" />
        </td>
        <td>{model.numberHasAssigee}</td>
        <td>{model.numberProcessing}</td>
        <td>{model.numberNotProcess}</td>
        <td>{model.numberHasClose}</td>
        <td>{model.numberHasSkip}</td>
       
        
               
    </tr>
    );
};

export default RowAssigee;