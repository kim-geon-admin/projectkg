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
  const [detailData, setDetailData] = useState({});
  const [rows, setRows] = useState('kg');
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

       selectDetailData(props.selectedRows);
       console.log('detailContents',detailData);
       return () => {
        console.log('ShowBoardData 컴포넌트가 화면에서 사라짐');
      };
    }, [props.selectedRows]
  );

  const  selectDetailData = async (selData) =>{
    //id,user_id
    let paramObj = {
        id : selData.id,
        user_id : selData.user_id
    }
    let detailContents = await axiosGet('/board/getDetailContents',paramObj);    
    
    //console.log('detailContents',detailContents);
    
    setDetailData(detailContents[0]);

 

  
  }
 

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
                            <TableCell sx={thStyle}>{detailData.subject } </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sc={{height:'90%'}}>
                      
                        <TableRow
                            key={detailData.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                         {detailData.contents}
                        </TableRow>
                    
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
         
          

        
    
        </div>
  );
}

export default ShowBoardData;