import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import {
    Toolbar,
    Typography,
    IconButton,

} from '@mui/material';
import AppBarContainer, { type AppBarContainerProps } from './appbar-container';

type ApplicationBarProps = {
    AppBarContainerProps: Omit<AppBarContainerProps, 'fixed' | 'open'>,
    open?: boolean,
    handleDrawerOpen: VoidFunction,
  };

const AppBarComponent:React.FC<ApplicationBarProps> = ({
     open,
     handleDrawerOpen,
     AppBarContainerProps,
}) => (
  <AppBarContainer position="fixed" open={open} {...AppBarContainerProps}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Mini variant drawer
      </Typography>
    </Toolbar>
  </AppBarContainer>
  );

export default AppBarComponent;
