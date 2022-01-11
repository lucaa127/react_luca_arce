// import logo from './logo.svg';
import './App.css';
import NavBarBS from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer';
// import ItemCount from './component/ItemCount';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cart from './component/Cart';



function App() {
  return (
    
    <div className="App">
      
        
      <NavBarBS />
      
      <BrowserRouter>
        <Routes>
          
        <Route exact path= '/' element= {<ItemListContainer greeting='Bienvenido a nuestra tienda!' />} />
        <Route exact path= '/cart' element= {< Cart />} />
        
        </Routes>
      </BrowserRouter>

            {/* <ItemCount minimo={1} maximo={10} /> */}
        

    </div>
  );
}

export default App;

