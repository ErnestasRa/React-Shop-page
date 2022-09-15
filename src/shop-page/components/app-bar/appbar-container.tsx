import {
    AppBar as MuiAppBar,
    AppBarProps,
    styled,
} from '@mui/material';

export type AppBarContainerProps = AppBarProps & {
    open?: boolean,
  };

const AppBarContainer = styled(
    MuiAppBar,
)<AppBarContainerProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: theme.common.drawerWidth,
      width: `calc(100% - ${theme.common.drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

export default AppBarContainer;
