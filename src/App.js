import logo from './logo.svg';
import './App.css';
import CapitalizeInput from './Components/CapitalizeInput';
import Counter from './Components/Counter';
import PrintNames from './Components/PrintNames';
import {Parent, Child} from './Components/ParentAndChild';
const persons = [{firstName:"Yossef" , lastName: "Kadosh" , tel: "0547944234"},
{firstName:"Bruno" , lastName: "Fernandes" ,tel: "+1054794434"}];



function App() {
  return (
    <div className="App">
      <div className='box'>
      <CapitalizeInput startText ="start text"/>
      </div>
      <div className='box'>
     <Counter startNumber = {5} />
     </div>
     <div className='box'>
     <PrintNames persons= {persons} />
     </div>
     <div className='box'>
     <Parent />
     </div>
    </div>
  );
}

export default App;
