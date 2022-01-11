import {AppBar, Button, Toolbar} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { setProfileData } from "../actions/login.action";

const Header = (props)=> {
  let navigate = useNavigate();
  const profileData = useSelector(state => state.login.profileInfo);
  const dispatch = useDispatch();
  console.log('Header.js---Profileinfo',profileData);

  const navigateToSignup = ()=> {

    navigate('/signup')

  }
  const navigateToLogin = ()=> {

    navigate('/login')

  }
  const logout = ()=> {
dispatch(setProfileData({}))
  }
    return (
        <div>
             <AppBar position="static">
        <Toolbar>
        <Link to={'/'} style = {{color: 'white',marginLeft: '10px'}}>Home</Link>

          <Link to={'/persons'} style = {{color: 'white',marginLeft: '10px'}}>Persons</Link>
          {/* <Link style = {{color: 'white'}}>Cockpit</Link> */}
          <div style={{marginLeft: "auto"}}>
          <Button onClick={navigateToSignup} style = {{color: 'cyan'}}>Sign Up</Button>
          {
            (profileData?.email) ? <Button onClick={logout} style = {{color: 'cyan'}}>Logout</Button>: <Button onClick={navigateToLogin} style = {{color: 'cyan'}}>Login</Button>
          }
   </div>
        </Toolbar>
      </AppBar>
        </div>
    )
}
export default Header;