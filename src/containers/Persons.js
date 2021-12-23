//class component
import React from 'react';

class Persons extends React.Component {

    constructor(props) {

        super();
        console.log('props--', props);

        // this.state = {
        //     basicSalary : "",
        //     bonusSalary: "",
        //     totalSalary: ""
        // }

    }
    state = {
        basicSalary: "",
        bonusSalary: "",
        totalSalary: "",
        basicSalaryerrorMessage: "",
        bonusSalaryerrorMessage: "",
        showPersonInfo: false,
        employees: [
            {
                'id': '2399',
                'name': 'Alex'
            },
            {
                'id': '2389',
                'name': 'Maria'
            },
            {
                'id': '2359',
                'name': 'John'
            }

        ]

    };
    //public method
    onClickHandler = (nameParam) => {


        alert(this.state.basicSalary);
        alert(this.state.bonusSalary);
        let totalSalary = Number(this.state.basicSalary) + Number(this.state.bonusSalary);
        this.setState({
            totalSalary: totalSalary
        });
    }

    togglePersonhandler = () => {
        const value = this.state.showPersonInfo;
        this.setState({
            showPersonInfo: !value
        });
    }
componentWillUnmount(){
    console.log('Person.js unmount')
}

    // setBasicSalary = (event)=> {
    //     //event.target.value

    //     this.setState({
    //         basicSalary: event.target.value
    //     })
    // }

    setBonusSalary = (event) => {

        console.log(Number(event.target.value))


        if (!isNaN(Number(event.target.value))) {
            this.setState({
                bonusSalary: event.target.value,
                bonusSalaryerrorMessage: ''
            });
        } else {
            this.setState({
                bonusSalaryerrorMessage: "Please enter a numeric value"
            });
        }



    }

    onChangeHandler = (event) => {
        console.log('event.target',event.target.value);
        this.props.change(event.target.value);
    }


    render() {
        console.log('Persons.js render')


    return(
        <div>
<label>Enter Text</label>
<input onChange = {this.onChangeHandler} type = "text"/>

        </div>

    )
     
        
    }

}

export default Persons;
