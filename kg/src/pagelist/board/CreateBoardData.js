import React, { useState, useEffect ,useContext} from 'react';
import {axiosGet} from '../../utill/getAxios';
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
import {ItemContext} from '../provider/LoginContext.js'



function CreateBoardData() {
  // IP주소 변수 선언
  const [rows, setRows] = useState([]);

  const userInfo  = useContext(ItemContext);
  console.log('dd',userInfo);

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


  return (
         
     <div>
         <Stack direction="row" justifyContent="end" alignItems="end"   sx={{ mt:-85 }}>
              <Button
            
                  variant="contained"
                  sx={{  mr: 36,mb:1 }}
              >등록</Button>
          </Stack>
          <Box sx={{ height:55,width:1200 }}>
              <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="subject"
                        label="글제목"
                        name="subject"
                        autoFocus
                      />
          </Box>
          <Box sx={{ height:255,mt:5,width:1200 }}>
          <TextareaAutosize
                
                minRows={30}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
                style={{ width: '100%' }}
              />
          </Box>
          

        
    
        </div>
  );
}

export default CreateBoardData;