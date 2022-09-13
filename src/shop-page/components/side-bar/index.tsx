import * as React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
    List,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import DrawerHeader from '../../drawer-header';
import SidebarContainer, { type SidebarContainerProps } from './sidebar-container';

type SidebarProps = {
    SidebarContainerProps: Omit<SidebarContainerProps, 'open' | 'variant'>
    open: boolean,
    handleDrawerClose: VoidFunction,
};

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerClose, SidebarContainerProps }) => (
  <SidebarContainer variant="permanent" open={open} {...SidebarContainerProps}>
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </SidebarContainer>
  );

export default Sidebar;
