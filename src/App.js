import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Recipe from './components/Recipe';
import getDataService from './services/getDataService';
import { useReducer, useState, useEffect } from 'react';

function App() {

  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  

  async function populateData(){
    let res = await getDataService();
    

    setState(res);
    setLoading(false);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>populateData()}>Refresh</button>
        {!loading ? 
        <Home>
        <Recipe title={state.strDrink} thumbnail={state.strDrinkThumb} instructions={state.strInstructions}/>
        
        </Home> : null}
      </header>   
    </div>
  );
}

export default App;
