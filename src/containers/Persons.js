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


    render() {

        console.log('Person.js render called')
        let disabled = (isNaN(Number(this.state.basicSalary)) || isNaN(Number(this.state.bonusSalary)));
        if (this.state.basicSalary === '' || this.state.bonusSalary === '') {
            disabled = true;
        }

        console.log('disabled', disabled);
        const styleObj = {
            border: "1px solid red"
        }



        return (
            <div>
                <div>
                    <button onClick={this.togglePersonhandler} >Toggle Employee</button>
                </div>
                <h1>Employee Details</h1>


                {
                    this.state.showPersonInfo &&
                    this.state.employees.map((el, index) => {
                        return (
                            <div>


                                <div>
                                    <p>Person Name: {el.name}</p>
                                </div>
                                <div style={styleObj}>
                                    <div>
                                        <label>Enter Basic Salary</label>
                                        <input onChange={(event) => {
                                            if (!isNaN(Number(event.target.value))) {
                                                this.setState({
                                                    basicSalary: event.target.value,
                                                    basicSalaryerrorMessage: ''
                                                });

                                            } else {
                                                this.setState({
                                                    basicSalaryerrorMessage: "Please enter a numeric value"
                                                })
                                            }
                                        }} type="text" />
                                        {this.state.basicSalaryerrorMessage}


                                    </div>
                                    <div>
                                        <label>Enter Bonus</label>
                                        <input onChange={this.setBonusSalary} type="text" />
                                        {this.state.bonusSalaryerrorMessage}

                                    </div>

                                    {/* <div>
                                <label>Enter Salary</label>
                                <input type="text"/>
                            </div>
                            <
                             */}
                                    <div>
                                        <button disabled={disabled} onClick={this.onClickHandler}>Calculate</button>
                                    </div>

                                    <div Style={{ border: "1px solid cyan" }}>

                                        <div>
                                            Total Salary: {this.state.totalSalary}
                                        </div>

                                        <div>
                                            PF: {this.state.basicSalary * 12 / 100}
                                        </div>
                                        <div>
                                            Tax: {this.state.totalSalary * 5 / 100}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )
                    })

                }



            </div>
        )
    }

}

export default Persons;
