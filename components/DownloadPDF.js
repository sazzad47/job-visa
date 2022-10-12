import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const DownloadPDF = ({url}) => {
  const handleDownload = () => {
    fetch(url).then(response => {
    response.blob().then(blob => {
      
        const fileURL = window.URL.createObjectURL(blob);
       
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "notice.pdf";
        alink.click();
    })

      
  })
   }
   

  return (
    <span style={{cursor: 'pointer'}} onClick ={handleDownload}><FileDownloadIcon /></span>
  )
}

export default DownloadPDF