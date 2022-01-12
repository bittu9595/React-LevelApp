import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfileData } from "../actions/login.action";

const Login = (props)=> {

    const inputEmailRef = React.createRef();
    const inputPasswordRef = React.createRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (event)=> {
        event.preventDefault();
        const email = inputEmailRef.current.value;
        const password = inputPasswordRef.current.value;
        alert(email);
        navigate('/');
    }

    const successLogin = (response)=> {
        console.log('response----',response);
        const profileData = response.profileObj;
        dispatch(setProfileData(profileData));
        navigate('/');
        alert('google login successfull');
    }

    const failureLogin = ()=> {
        alert('Google Login failed!!');
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>

            
            <div>
                <label>Enter Email</label>
                <input ref={inputEmailRef} type="email"/>

            </div>
            <div>
                <label>Enter Password</label>
                <input ref={inputPasswordRef} type="password"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
            </form>
            <br/>
            <h4>Or</h4>
            <div>
            <GoogleLogin
    clientId="57218857014-lv2f93c6j45jnjoep06un0tpvvmbrdvi.apps.googleusercontent.com"
    buttonText="Google Login"
    onSuccess={successLogin}
    onFailure={failureLogin}
    cookiePolicy={'single_host_origin'}
  />,
            </div>
        </div>
    )

}
export default Login;