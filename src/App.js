import './App.css';
import NavBarBS from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cart from './component/Cart';
import ItemDetailContainer from './component/ItemDetailContainer';



function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
        <NavBarBS />
        
          <Routes>
            
          <Route exact path= '/' element= {<ItemListContainer greeting='Bienvenido a nuestra tienda!' />} />
          <Route exact path= '/categorias/:categoriaId' element= {<ItemListContainer greeting='Bienvenido a nuestra tienda!' />} />
          <Route exact path= '/detalle/:detalleId' element= {<ItemDetailContainer greeting='Bienvenido a nuestra tienda!' />} />
          <Route exact path= '/cart' element= {< Cart />} />
          
          </Routes>

      </BrowserRouter>
        

    </div>
  );
}

export default App;

