import React, { useState, useEffect,useContext } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import SearchBoardData from '../board/SearchBoardData.js';
import CreateBoardData from '../board/CreateBoardData.js';
import ShowBoardData from '../board/ShowBoardData.js';
import ShowPhoto from './ShowPhoto.js';


import { ContactsOutlined } from '@mui/icons-material';

import {ItemContext} from '../provider/ItemContext.js'



function PhotoView() {

 // 조회 or 등록화면 전환
 const [viewTp, setViewTp] = useState('showImage');

 // 선택한 로우 정보
 const [selectRows, setSelectRows] = useState(null);



  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
       console.log('PhotoView.js 렌더링 된다');
    }, [viewTp]
  );



  return (
         
     <div>
    
        {
            (viewTp === "showImage" && <ShowPhoto setViewTp={setViewTp}  />) 
         
                                  

        }
         
    </div>
  );
}

export default PhotoView;