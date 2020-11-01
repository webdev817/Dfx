import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import { Link,useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthService from '../services/AuthService'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    AuthService.logout();
    location.href='/'
  }

  return (
    <div>
      <Grid container justify="center" alignItems="center" onClick={handleClick}>
                  <Avatar alt="Remy Sharp" src="./images/avatar/1.jpg" />
                </Grid> 
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className='stylemenu'>                 
            <List component="div" disablePadding>
              <ListItem button className='user-menu' component={Link} to="/profile">
                  <ListItemText className='user-menu-text' primary="Profile" />
              </ListItem>
              <ListItem button>
                  <ListItemText className='user-menu-text' primary="Login & Security" />
              </ListItem>
              <ListItem button>
                  <ListItemText className='user-menu-text' primary="Billing & Wallet" />
              </ListItem>
              <ListItem button>
                  <ListItemText className='user-menu-text' primary="Privacy" />
              </ListItem>
              <ListItem button>
                  <ListItemText className='user-menu-text' primary="Notifications" />
              </ListItem>
              <ListItem button>
                  <ListItemText className='user-menu-text' primary="Recently Viewed" />
              </ListItem>
              <ListItem button>
                <ListItemIcon  className='logout-btn'>
                  <ExitToAppIcon/>
                </ListItemIcon>
                <ListItemText className='user-menu-text logout-text' primary="Logout" onClick={handleLogout}/>
              </ListItem>
            </List>
        </div>
      </StyledMenu>
    </div>
  );
}