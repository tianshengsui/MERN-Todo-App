import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

const NavBar = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#039be5' }}>
            <Toolbar>
                <Typography className={classes.title} variant="h6">
                React Todo
                </Typography>
                <IconButton color="inherit" target="_blank" href="https://github.com/tianshengsui/MERN-Todo-App"> 
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
            </AppBar>
        </div>
     );
}
 
export default NavBar;