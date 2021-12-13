//class component
import React from 'react';

class Persons extends React.Component {

    constructor(props){
        
        super();
        console.log('props--',props);

    }
//public method
    onClickHandler = (nameParam) => {


        alert(this.props.designation);
        alert(nameParam);
    }


    render(){
        const styleObj = {
            border: "1px solid red"
        }
        return(
            <div>
                <h1>Persons Details</h1>
                <div style = {styleObj}>
                <div>
                    Designation : {this.props.designation}

                </div>
                <div>
                    Salary : {this.props.salary}

                </div>
                {/* <div>
                    <label>Enter Salary</label>
                    <input type="text"/>
                </div>
                <
                 */}
                 <div>
                     <button onClick = {this.onClickHandler.bind(this,'pavan')}>Display</button>
                 </div>
                </div>
            </div>
        )
    }

}

export default Persons;
