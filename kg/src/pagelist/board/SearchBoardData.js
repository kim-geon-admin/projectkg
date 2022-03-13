import React, { useState, useEffect,useContext } from 'react';
import {axiosGet} from '../../utill/getAxios';
import { makeStyles } from '@material-ui/core/styles';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import  '../../css/common.css';

const useStyles = makeStyles({
  table: {
  //  minWidth: 650,
  },
});

const agGirdCellStyle = {
  textAlign:'center'
  
}




function SearchBoardData(props) {


  // 게시판 데이터
  const [rows, setRows] = useState([]);

  useEffect(
    () => {
       console.log('최초 렌더링 된다');
       selectBoard();
       return () => {
        console.log('SearchBoardData 컴포넌트가 화면에서 사라짐');
      };
    },[]
  );


  //ag-grid col info
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "NO",field:"id",width:'100' ,sortable: true, filter: true,valueGetter: "node.rowIndex + 1" ,cellStyle:agGirdCellStyle},
   //  { headerName: "ID",field:"id", sortable: true, filter: true },
    { headerName: "제목", field:"subject",width:'600',sortable: true, filter: true},
  //   { headerName: "컨텐츠",field:"contents", sortable: true, filter: true },
    { headerName: "작성자",field:"user_id",width:'150', sortable: true, filter: true ,cellStyle:agGirdCellStyle},
    { headerName: "생성일시",field:"creation_timestamp",width:'200' ,sortable: true, filter: true,cellStyle:agGirdCellStyle },
    { headerName: "조회수",field:"click_count",width:'150' ,sortable: true, filter: true ,cellStyle:agGirdCellStyle}
]);

  //조회 버튼 클릭시 조회 
   const  selectBoard = async () =>{
   
    let contents = await axiosGet('/board/getContents');    
    setRows(contents);
  
  }

  const createBoard = () =>{
      console.log(props);
      props.setViewTp('create');
     // alert('등록');
  }

  const onDoubleClicked = (event)=> {
    console.log(event.data.id );
    props.selectRows(event.data);
    props.setViewTp('show');
}


  // 첫번째 렌더링을 다 마친 후 실행합니다.
  /*
  useEffect(
    () => {
        selectBoard();
    }, []
  );
*/

  const classes = useStyles();
  return (
    
  
    /* 
         {rows.map((data) => (
            <li key={data.id}> {data.user_id} 
            </li>

          ))} */
         
     <>
        <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          p: 1,
          m: 1,
          height:80,
          width:'82%',
          mb:-2
        }}
      >
                <Button
                variant="contained"
                sx={{  mb:3  }}
                onClick = {createBoard}
              > 등록</Button>
              <Button
                  variant="contained"
                  sx={{  mr: 1,mb:3 }}
                  onClick = {selectBoard}
              > 조회</Button>
            
  </Box>
        <div className="ag-theme-alpine" style={{height: '98%',width:  '82%'}}>
          <AgGridReact 
              rowData={rows}
              columnDefs={columnDefs}
              pagination={true}
              paginationPageSize={15}
              onRowDoubleClicked = {onDoubleClicked}
              > 
          </AgGridReact>
        </div>
 
    </>
  );
}

export default SearchBoardData