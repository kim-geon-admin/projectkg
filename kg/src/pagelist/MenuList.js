import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';

import MailIcon from '@mui/icons-material/Mail';


const menuList = (
  <div>
 
    <Divider />
    <List>
      {['자유게시판', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} onClick={()=>{alert('ddd')}} />
        </ListItem>
      ))}
    </List>
    <Divider />
 
  </div>
);

export default menuList;