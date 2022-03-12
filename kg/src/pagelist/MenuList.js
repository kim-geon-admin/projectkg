import React, { useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';

import MailIcon from '@mui/icons-material/Mail';


function  MenuList(props){
const [selIndex,setSelIndex] = useState(0);

 

  return(
  <div>
    <Divider />
    <List>
      {['HOME', '자유게시판', '사진첩', '관리자페이지'].map((text, index) => (
        <ListItem button key={text} selected={index === selIndex}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} onClick={()=>{ 
                 props.title(text);  
                 setSelIndex(index);
            }} />
        </ListItem>
      ))}
    </List>
    <Divider />
 
  </div>
  )
};

export default MenuList;

