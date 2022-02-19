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
import SearchBoardData from './SearchBoardData.js';
import CreateBoardData from './CreateBoardData.js';
import { ContactsOutlined } from '@mui/icons-material';





function BoardViewData() {

 // 조회 or 등록화면 전환
 const [viewTp, setViewTp] = useState('search');



  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
       console.log('렌더링 된다');
    }, [viewTp]
  );

 

  return (
         
     <>
     {viewTp === "search" ?  <SearchBoardData setViewTp={setViewTp}/> : <CreateBoardData/>}

         
    </>
  );
}

export default BoardViewData;