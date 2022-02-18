import React, { useState, useEffect } from 'react';
import {axiosGet} from '../../utill/getAxios';
import { makeStyles } from '@material-ui/core/styles';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



function BoardViewData() {
  // IP주소 변수 선언
  const [rows, setRows] = useState([]);
  //ag-grid col info
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "NO",field:"id", sortable: true, filter: true,valueGetter: "node.rowIndex + 1" },
    { headerName: "ID",field:"id", sortable: true, filter: true },
    { headerName: "제목",field:"subject", sortable: true, filter: true},
    { headerName: "컨텐츠",field:"contents", sortable: true, filter: true },
    { headerName: "작성자",field:"user_id", sortable: true, filter: true },
]);


  const  selectBoard = async () =>{
   
    let contents = await axiosGet('/getContents');
    console.table(contents);
    setRows(contents);
  
  }


  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
        selectBoard();
    }, []
  );


  const classes = useStyles();
  return (
    
  
    /* 
         {rows.map((data) => (
            <li key={data.id}> {data.user_id} 
            </li>

          ))} */
         
     <>
         <Stack direction="row" justifyContent="end" alignItems="end"   sx={{ mt:-85 }}>
              <Button
            
                  variant="contained"
                  sx={{  mr: 36,mb:3 }}
              > 조회</Button>
          </Stack>


        
        <div className="ag-theme-alpine" style={{height: 600, width: 1200}}>
          <AgGridReact
              rowData={rows}
              columnDefs={columnDefs}>
          </AgGridReact>
        </div>
        </>
  );
}

export default BoardViewData;