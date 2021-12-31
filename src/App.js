// import logo from './logo.svg';
import './App.css';
// import react from 'react';
import NavBarBS from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer';
// import ItemCount from './component/ItemCount';



function App() {
  return (
    
    <div className="App">
      
      <NavBarBS />
      
      <ItemListContainer greeting='Bienvenido a nuestra tienda!' />

      {/* <ItemCount minimo={1} maximo={10} /> */}



    </div>
  );
}

export default App;

