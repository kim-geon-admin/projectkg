import React, { useState, useEffect ,useContext} from 'react';
import {axiosGet,axiosPost} from '../../utill/getAxios';
import { makeStyles } from '@material-ui/core/styles';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {ItemContext} from '../provider/ItemContext.js'



function CreateBoardData(props) {
  // 제목 
  const [subject, setSubject] = useState([]);
  //본문
  const [contents, setContents] = useState([]);
 //화면전환 여부
 const [rows, setRows] = useState([]);
  const userInfo  = useContext(ItemContext);
  //console.log('dd',userInfo);

  const  insertBoardData = async () =>{
    let param = {
          subject : subject,
          contents : contents,
          user_id : userInfo.user_id
    }
    let result = await axiosPost('/board/insertContents',param);
    if(result == 'success'){
      console.log('등록이 정상적으로 되었습니다');
      props.setViewTp('search');
    }
    
    
  }

  const subjectHandler = (e) =>{
    setSubject(e.target.value);
   // console.log('subject',e.target.value);

  }

  const contentsHandler = (e) =>{
    setContents(e.target.value);
  //  console.log('Contents',e.target.value);
    
  }
  const goToSearchBoardData = () =>{
    props.setViewTp('search');
  }


  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
       // selectBoard();
       console.log('CreateBoardData 컴포넌트 실행')
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
                    sx={{  mb:1  }}
                    onClick = {insertBoardData}
                  > 등록</Button>
                  <Button
                      variant="contained"
                      sx={{  mr: 1,mb:1 }}
                      onClick = {goToSearchBoardData}
                  > 이전</Button>
                 
        </Box>
          <Box sx={{ height:55, width:'82%' }}>
              <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="subject"
                        label="글제목"
                        name="subject"
                        onChange = {subjectHandler}
                        autoFocus
                      />
          </Box>
          <Box sx={{ height:255,mt:5, width:'82%' }}>
          <TextareaAutosize
                
                minRows={30}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue=""
                onChange = {contentsHandler}
                style={{ width: '100%' }}
              />
          </Box>
          

        
    
        </div>
  );
}

export default CreateBoardData;