const Signup = (props)=> {
    console.log('Signup props----',props);
    return (
        <form>
            <div>
                <label>Enter Email</label>
                <input type = "email"/>
            </div>
            <div>
                <label>Enter Password</label>
                <input type = "password"/>
            </div>
            <input type = "submit"/>
        </form>
    )
}

export default Signup;