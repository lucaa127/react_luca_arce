import logo from './logo.svg';
import './App.css';
import react from 'react';
import NavBarBS from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer';



function App() {
  return (
    
    <div className="App">
      
      <NavBarBS />
      <ItemListContainer />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

      
        </p> */}

        
 
        
{/*       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

