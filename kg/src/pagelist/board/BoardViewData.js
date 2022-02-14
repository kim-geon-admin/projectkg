import React, { useState, useEffect } from 'react';
import {axiosGet} from '../../utill/getAxios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



function BoardViewData() {
  // IP주소 변수 선언
  const [rows, setRows] = useState([]);


  const  selectBoard = async () =>{
   
    let contents = await axiosGet('/getContents');
    //console.table(contents);
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
    
    <>
    {/* 
         {rows.map((data) => (
            <li key={data.id}> {data.user_id} 
            </li>

          ))} */}
          
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">제목</TableCell>
            <TableCell align="right">컨텐츠</TableCell>
            <TableCell align="right">작성자</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.subject}</TableCell>
              <TableCell align="right">{row.contents}</TableCell>
              <TableCell align="right">{row.user_id}</TableCell>
             
            </TableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </>
  );
}

export default BoardViewData;