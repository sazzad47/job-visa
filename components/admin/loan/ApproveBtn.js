import { Button } from "@mui/material";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { useNotify, useRecordContext } from "react-admin";
import {patchData} from '../../../utils/fetchData'

const ApproveBtn = () => {
  const notify = useNotify()
  const record = useRecordContext();
  if (!record) return null;
  let id = record.id
    const handleApprove = () => {
        
      patchData(`loanApplicants/${id}`, {status: 'approved'})
      notify('Application approved!', {type: 'success'})
         
          
    }
    return (
        <Button color="primary" onClick={handleApprove}><BeenhereIcon className="me-2" sx={{fontSize:'0.9rem'}}/>  Approve</Button>
    )
}

export default ApproveBtn