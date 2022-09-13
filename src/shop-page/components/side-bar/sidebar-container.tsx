import {
    Drawer as MuiDrawer,
    DrawerProps,
    styled,
    Theme,
    CSSObject,
} from '@mui/material';

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  export type SidebarContainerProps = DrawerProps & {
    drawerWidth: number,
  };

  const propForStyling = ['drawerWidth'];
  const shouldForwardProp = (propName:string) => !propForStyling.includes(propName);

  const SidebarContainer = styled(
    MuiDrawer,
     { shouldForwardProp },
)<SidebarContainerProps>(
    ({ theme, open, drawerWidth }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme, drawerWidth),
        '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  export default SidebarContainer;
