import { Button } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { useRecordContext } from "react-admin";
import {patchData} from '../../../utils/fetchData'
import {DataContext} from '../../../store/GlobalState'
import { useContext } from "react";
import { useNotify } from "react-admin";
const DeclineBtn = () => {
  const notify = useNotify()
  const record = useRecordContext();
         if (!record) return null;
    const {dispatch} = useContext(DataContext)
    const handleDecline = () => {
       
         let id = record.id
         
          patchData(`visaApplicants/${id}`, {status: 'declined'})
         
          notify('Application declined!', {type: 'success'})
    }
    return (
        <Button color="primary" onClick = {handleDecline}><CancelIcon className="me-2" sx={{fontSize:'0.9rem'}}/> Decline</Button>
    )
}

export default DeclineBtn