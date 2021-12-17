import './App.css';
import Persons from "./containers/Persons";
import React from 'react';

//jsx -> javascript structured xml

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      textArray : []
    }


  }

  onChangeHandler = (data)=> {
console.log('App.js data---',data);

// const dataArray = [...data];
// console.log('data array---',dataArray);
const dataArrayObj = [];
for(let el of [...data]){
  const obj = {
    id: Date.now(),
    value: el
  };
  dataArrayObj.push(obj)
}

console.log('datarrayobj---',dataArrayObj);



this.setState({
  textArray: dataArrayObj
});

  }

  render(){

  

  return (
    <div className="App">
     
      <Persons change = {this.onChangeHandler} />
      {/* <Persons salary = "$50000" designation = "Program Director" ></Persons> */}

      {
        this.state.textArray.map((el) => {
          return (
            <div key={el.id} style = {{border: '2px solid cyan',borderRadius: '2px'}}>
              <p>{el.value}</p>
            </div>
          )
        })
      }

    </div>
  );
}
}

export default App;
