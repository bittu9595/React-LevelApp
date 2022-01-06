import {AppBar, Button, Toolbar} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

const Header = (props)=> {
  let navigate = useNavigate();


  const navigateToSignup = ()=> {

    navigate('/signup')

  }
    return (
        <div>
             <AppBar position="static">
        <Toolbar>
        <Link to={'/'} style = {{color: 'white',marginLeft: '10px'}}>Home</Link>

          <Link to={'/persons'} style = {{color: 'white',marginLeft: '10px'}}>Persons</Link>
          {/* <Link style = {{color: 'white'}}>Cockpit</Link> */}
          <Button onClick={navigateToSignup} style = {{color: 'cyan',marginLeft: 'auto'}}> Sign Up</Button>
     
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
        </div>
    )
}
export default Header;