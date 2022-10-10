import React from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString()
  },
  {
    id: "download",
    label: "Download",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString()
  }
];

 function downloadPDF () {
   const handleDownload = () => {
    fetch("https://res.cloudinary.com/sazzadhossen/image/upload/v1665296965/sazzad-upload/nakywullk3zzbe3bekw3.pdf").then(response => {
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

function createData(title, date, download) {
 
  return { title, date, download };
}



const useStyles = makeStyles({
  root: {
    width: "100%",
    
  },
  container: {
    maxHeight: 440
  }
});

export default function StickyHeadTable() {

  const rows = [
    createData(<a href="https://res.cloudinary.com/sazzadhossen/image/upload/v1665296965/sazzad-upload/nakywullk3zzbe3bekw3.pdf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>, "10-10-2022", downloadPDF()),
    createData(<a href="https://res.cloudinary.com/sazzadhossen/image/upload/v1665296965/sazzad-upload/nakywullk3zzbe3bekw3.pdf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>, "10-10-2022", downloadPDF()),
    createData(<a href="https://res.cloudinary.com/sazzadhossen/image/upload/v1665296965/sazzad-upload/nakywullk3zzbe3bekw3.pdf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>, "10-10-2022", downloadPDF()),
    createData(<a href="https://res.cloudinary.com/sazzadhossen/image/upload/v1665296965/sazzad-upload/nakywullk3zzbe3bekw3.pdf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>, "10-10-2022", downloadPDF()),
    createData(<a href="https://res.cloudinary.com/sazzadhossen/image/upload/v1665296965/sazzad-upload/nakywullk3zzbe3bekw3.pdf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>, "10-10-2022", downloadPDF()),
    
    
  ];
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className="notice-table-container">
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}