import { makeStyles } from '@material-ui/core/styles';
import drawerWidth from './constats'

export default makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px",

      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },

      navBtns: {
        marginRight: "1rem",
        display: "flex",
        alignItems: "center",

        "& a": {
            textDecoration: "none"
        }
      },

      btn: {
        margin: "0 0.5rem"
      }
}));