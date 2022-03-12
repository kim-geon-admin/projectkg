import React, { useState, useEffect,useContext } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import SearchBoardData from './SearchBoardData.js';
import CreateBoardData from './CreateBoardData.js';
import { ContactsOutlined } from '@mui/icons-material';

import {ItemContext} from '../provider/ItemContext.js'



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
         
     <div>
     {viewTp === "search" ?  <SearchBoardData setViewTp={setViewTp}/> : <CreateBoardData setViewTp={setViewTp}/>}

         
    </div>
  );
}

export default BoardViewData;