import React, { useState, useEffect ,useContext} from 'react';
import {axiosGet,axiosPost} from '../../utill/getAxios';
import { makeStyles } from '@material-ui/core/styles';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {ItemContext} from '../provider/ItemContext.js'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const thStyle = {
    textAlign: 'left',
    backgroundColor  : '#d9ddde'
}

function ShowBoardData(props) {

 //화면전환 여부

  const userInfo  = useContext(ItemContext);
  //console.log('dd',userInfo);

 var dataRows = [];

  const goToSearchBoardData = () =>{
    props.setViewTp('search');
  }


  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => { 
       // selectBoard();
       console.log('ShowBoardData 컴포넌트 실행')
       console.log(props.selectedRows);
       return () => {
        console.log('CreateBoardData 컴포넌트가 화면에서 사라짐');
      };
    }, []
  );
 

  return (
         
     <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              p: 1,
              m: 1,
              height:65,
              width:'82%',
              mb:-2
            }}
          >
           
                  <Button
                      variant="contained"
                      sx={{ mb:2 }}
                      onClick = {goToSearchBoardData}
                  > 목록으로</Button>
                 
        </Box>
        <Box sx={{ height:'100%', width:'82%' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead sx={{ height: 40 }} >
                        <TableRow>
                            <TableCell sx={thStyle}>주요뉴스</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sc={{height:'90%'}}>
                        {dataRows.map((row) => (
                        <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell  component="tr" >
                                <TableCell  component="a" target='_blank'>
                                dddd
                                </TableCell>    
                            </TableCell>

                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
         
          

        
    
        </div>
  );
}

export default ShowBoardData;