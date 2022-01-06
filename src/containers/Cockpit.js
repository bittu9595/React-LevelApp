import React from "react";
import withHoc from "../hoc/withmyhoc";

const Cockpit = (props)=> {
    console.log('Cockpit Lodaed')
    return (
        <React.Fragment>
 <h1></h1>
        <div>
            <h1>Cockpit Loading...</h1>
        </div>
        </React.Fragment>
       
    )
}
export default withHoc(React.memo(Cockpit));