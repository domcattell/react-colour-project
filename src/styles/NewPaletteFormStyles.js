import { makeStyles } from '@material-ui/core/styles';
import drawerWidth from './constats'

export default makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  
  drawerContainer: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  btns: {
    width: "100%",
  },

  btn: {
    width: "50%"
  },

}));
