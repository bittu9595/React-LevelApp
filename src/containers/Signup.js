import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props)=> {
    console.log('Signup props----',props);
    //controlled 
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const submitFormHandler = (event) => {
event.preventDefault();
alert(email);
navigate('/')


    }

    const validatePasswordHandler = (event)=> {

        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

        

        const value = regex.test(event.target.value);
        if(value === true){
            setPassword(event.target.value)
        } else {
            setPassword('');
        }

    } 

    return (
        <form onSubmit={submitFormHandler}>
            <div>
                <label>Enter Email</label>
                <input  type="email" onChange={(event)=> {






                    setEmail(event.target.value)
                }} type = "email"/>
            </div>
            <div>
                <label>Enter Password</label>
                <input onChange={validatePasswordHandler}/>
            </div>
            <div>
                <label>Upload Resume</label>
                <input type = "file"/>
            </div>
           <button disabled={password === ""} >Submit</button>
        </form>
    )
}

export default Signup;