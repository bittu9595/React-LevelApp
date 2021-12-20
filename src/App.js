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

this.setState({
  textArray: []
},()=> {
  const dataArrayObj = [];
  for(let el of [...data]){
    const obj = {
      id: Math.random(),
      value: el
    };
    dataArrayObj.push(obj)
  }
  
  console.log('datarrayobj---',dataArrayObj);
  
  
  
  this.setState({
    textArray: dataArrayObj
  });
  
});

// const dataArray = [...data];
// console.log('data array---',dataArray);

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
              <button>Remove</button>
            </div>
          )
        })
      }

    </div>
  );
}
}

export default App;
