import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AuthService from '../services/AuthService'
import ProfileMenu from './ProfileMenu'

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

  export default function Header() {
    const classes = useStyles();
    const handleSearch = (e) => {
      e.preventDefault()
      const search = e.target.elements.search.value.trim()
    } 
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    const loginedUser = JSON.parse(localStorage.getItem('user'))
    var token = null;
      if(!loginedUser){
        token = null;
      }
      else{
        token =  loginedUser.token
      
      }
    return(
        <div className="header">
          <div className="header__logo">
            <img className="header__logo--img" alt="Dashboard FX Logo" src="./images/logo.png" />
          </div>
          <div className="header__form">
            <form onSubmit={handleSearch}>
              <input className="header__input header__input--no-outline" type="search" results="0" name="search" placeholder="Search for Lessons or Mentors" />
            </form>
          </div>
          {token ? 
              <ProfileMenu/>
          : 
          <div className="header__navigation">
            <NavLink to="/" className="link header__link" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/about" className="link header__link" activeClassName="is-active">About Us</NavLink>
            <NavLink to="/contact" className="link header__link" activeClassName="is-active">Contact Us</NavLink>
            <NavLink to="/signin" className="link header__link" activeClassName="is-active">Sign In</NavLink>
            <NavLink to="/register" className="header__navigation--join">Join</NavLink>
          </div>
        } 
        </div>
      );
}
