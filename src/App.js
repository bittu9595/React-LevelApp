import logo from './logo.svg';
import './App.css';
import Persons from "./containers/Persons";

//jsx -> javascript structured xml

function App() {
  return (
    <div className="App">
     
      <Persons salary = "$20000" designation = "Software Develeoper" />
      {/* <Persons salary = "$50000" designation = "Program Director" ></Persons> */}

    </div>
  );
}

export default App;
