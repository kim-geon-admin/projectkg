import React, { useState, useEffect,useContext } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {axiosGet} from '../../utill/getAxios';
import SearchNews from './SearchNews';





function HomeView() {

 // 조회 or 등록화면 전환
 const [viewTp, setViewTp] = useState('search');

 //News 정보
 const [newsRows,setNewsRows] = useState(null);



  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
       console.log('home view 렌더링 된다');
       selectHomeNews();
    }, []
  );

    // 첫번째 렌더링을 다 마친 후 실행합니다.
    useEffect(
        () => {
           console.log('newData를 가져왔으므로 리랜더링 된다');
           
        }, [newsRows]
      );


    //조회 버튼 클릭시 조회 
    const  selectHomeNews = async () =>{
   
        let newsContents = await axiosGet('/home/getNews');    
        setNewsRows(newsContents);
        console.log('newsContents',newsContents);
      
      }


  return (
         
     <div>
         <Container maxWidth="xl" >
             
            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={1} columns={8} sx={{  height: '43%' ,mb:3}}>
                    <Grid item xs={8}>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '98%' }} />
                    </Grid>
                    
                </Grid>


                <Grid container spacing={2} columns={16} sx={{  height: '57%' }}>
                    <Grid item xs={8} >
                        <Box sx={{ bgcolor: '#cfe8fc',  height: '98%' }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{  height: '98%' }}>
                            {(newsRows != null && <SearchNews rows={newsRows}/>) 
                              

                            }
                        </Box>
                    </Grid>
                </Grid>
            
            </Box>


         </Container>

         
    </div>
  );
}

export default HomeView;