import React, { useState, useEffect ,useContext} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuList from './MenuList.js';
import BoardView from './board/BoardView.js';
import HomeView from './home/HomeView.js';
import PhotoView from './photo/PhotoView.js';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {useLocation} from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;

  const [title, setTitle] = React.useState('HOME');

  console.log(useLocation());


  useEffect(
    () => {
       console.log('Main js 렌더링');
     
     
    }
  );



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
       
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <MenuList title={setTitle}/>
        </Drawer>
      </Box>
    
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 12, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
         {/* Main 컨텐츠 보여주는 부분*/}
         {
           
           (title === 'HOME') && <HomeView/> ||  

           (title === '자유게시판') && <BoardView/> ||

           (title === '사진첩') && <PhotoView/>
           

          }
       
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;