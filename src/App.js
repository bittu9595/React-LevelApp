import './App.css';
import Persons from "./containers/Persons";
import React from 'react';
import Header from './containers/Header';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Signup from './containers/Signup';
import Footer from './containers/Footer';
import ProductCardInfo from './containers/Producardinfo';
import ProductCardQueryParams from './containers/Productcardinfowithqueryparams';
import Login from './containers/Login';
import Profile from './containers/Profile';
import ToDoData from './containers/Tododata';

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
    console.log('App props',this.props);

    const obj = {
      name: 'abc',
      age: 23
    };
console.log('App.js render')
  

  return (
    <div className="App">
      <div className='App-header'>
      <Header/>

      </div>

<div className='App-layout' id ="layout">
<Routes>
        <Route path = "/" element = {<Dashboard/>} />
        <Route path = "/persons" element = {<Persons/>} />
        <Route path = "/signup" element = {<Signup/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = '/productcard/:category' element = {<ProductCardInfo/>}/>
        <Route path = '/productcardqueryparams' element = {<ProductCardQueryParams/>}/>
        <Route path = '/profile' element = {<Profile/>}/>
        <Route path = '/tododata' element = {<ToDoData/>}/>
      </Routes>
</div>
    <div className='App-footer'>
    <Footer/>

    </div>
    </div>
  );
}
}

export default App;
