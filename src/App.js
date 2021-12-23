import './App.css';
import Persons from "./containers/Persons";
import React from 'react';

//jsx -> javascript structured xml
//mounting -> constructor -> getDerivedStateFromProps -> render -> child render -> componentdidMount
//updating -> getderivedstatefromprops -> shouldcomponentupdate -> getsnapshotbeforeupdate -> render -> child render -> componentdidupdate
//unmountng -> componentwillunmount

class App extends React.Component {

  constructor(props){
    console.log('App.js constructor');
    super(props);

    this.state = {
      textArray : [],
      showPerson: false
    };


  }

  static getDerivedStateFromProps(prevProps,prevState){
console.log('App getderivedstatefromprops--')
return prevProps
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('App.js should componentupdate');
    return true;
  }

  getSnapshotBeforeUpdate(){
    console.log('App.js getsnapshotbeforeupdate---');
    return {
      'snapshot': 'snapdata'
    }
  }

  componentDidUpdate(prevProps,prevState,snapshot){
console.log('App.js Componentdidupdate',snapshot);
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

  componentDidMount(){
    //side effect
    console.log(
      'App.js Componentdidmount'
    );
  }

  render(){
console.log('App.js render')
  

  return (
    <div className="App">
      <button onClick = {()=> {
        const value = this.state.showPerson
        this.setState({
          showPerson: !value
        })
      }} >Toggle</button>

      {
        this.state.showPerson &&  <Persons change = {this.onChangeHandler} />

      }
     
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
