
const withHoc = (MyComp) => {

    return (props)=> {

        return (
            <div style = {{background: 'cyan'}}>
                <MyComp {...props}/>
            </div>
        )
    }



}

export default withHoc;

