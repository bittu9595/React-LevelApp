import {AppBar, Button, Toolbar} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { setProfileData } from "../actions/login.action";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import { useState } from "react";

const Header = (props)=> {
  const [anchorEl, setAnchorEl] = useState(null);

  let navigate = useNavigate();
  const profileData = useSelector(state => state.login.profileInfo);
  const dispatch = useDispatch();

  const navigateToSignup = ()=> {

    navigate('/signup')

  }
  const navigateToLogin = ()=> {

    navigate('/login')

  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = ()=> {
dispatch(setProfileData({}));
handleClose();
navigate('/');
  }
    return (
        <div>
             <AppBar position="static">
        <Toolbar>
        <Link to={'/'} style = {{color: 'white',marginLeft: '10px'}}>Home</Link>

          <Link to={'/persons'} style = {{color: 'white',marginLeft: '10px'}}>Persons</Link>
          <Link to={'/tododata'} style = {{color: 'white',marginLeft: '10px'}}>My Todo List</Link>

          {/* <Link style = {{color: 'white'}}>Cockpit</Link> */}
          <div style={{marginLeft: "auto"}}>
          <Button onClick={navigateToSignup} style = {{color: 'cyan'}}>Sign Up</Button>
          {
            (profileData?.email) ? (
              <div>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  Open Menu
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={()=> {
    handleClose();
    navigate('/profile')
  }}>Profile</MenuItem>
  <MenuItem onClick={logout}>Logout</MenuItem>
</Menu>
</div>
            ): <Button onClick={navigateToLogin} style = {{color: 'cyan'}}>Login</Button>
          }
   </div>
        </Toolbar>
      </AppBar>
        </div>
    )
}
export default Header;