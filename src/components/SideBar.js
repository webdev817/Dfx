import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div className='sidebar'>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
            >
            <ListItem button>
                <ListItemIcon className='icon-cell'>
                <LocalMallOutlinedIcon className='icon'/>
                </ListItemIcon>
                <ListItemText className='list-text' primary="Marketplace" />
            </ListItem>
            <div className='dashboard'>
                <ListItem button component={Link} to="/" onClick={handleClick}>
                    <ListItemIcon className='icon-cell'>
                    <DesktopWindowsIcon className='icon dash'/>
                    </ListItemIcon>
                    <ListItemText className='list-text' primary="Dashboard" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button  component={Link} to="/gigs" className={classes.nested}>
                        <ListItemText className='list-text' primary="Gigs" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText className='list-text' primary="Recommended Student" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText className='list-text' primary="Bookings" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText className='list-text' primary="Messages" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText className='list-text' primary="News Wall Posts" />
                    </ListItem>
                    </List>
                </Collapse>
            </div>            
            <ListItem button component={Link} to="/howitworks">
                <ListItemIcon className='icon-cell'>
                <ErrorOutlineIcon className='icon'/>
                </ListItemIcon>
                <ListItemText className='list-text' primary="How it works" />
            </ListItem>
            <ListItem button component={Link} to="/">
                <ListItemIcon className='icon-cell'>
                <RecordVoiceOverOutlinedIcon className='icon'/>
                </ListItemIcon>
                <ListItemText className='list-text' primary="Testimonials" />
            </ListItem>
            <ListItem button component={Link} to="/faq">
                <ListItemIcon className='icon-cell'>
                <HelpOutlineOutlinedIcon className='icon'/>
                </ListItemIcon>
                <ListItemText className='list-text' primary="FAQ" />
            </ListItem>
            <ListItem button component={Link} to="/about">
                <ListItemIcon className='icon-cell'>
                <SupervisorAccountOutlinedIcon className='icon'/>
                </ListItemIcon>
                <ListItemText className='list-text' primary="About us" />
            </ListItem>
            <ListItem button component={Link} to="/">
                <ListItemIcon className='icon-cell'>
                <BuildOutlinedIcon className='icon'/>
                </ListItemIcon>
                <ListItemText className='list-text' primary="Support" />
            </ListItem>      
            </List>
      </div>    
  );
}