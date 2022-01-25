import './App.css';
import NavBarBS from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cart from './component/Cart';
import ItemDetailContainer from './component/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';



function App() {
  return (
    <CartContextProvider>

    <div className="App">
      
      <BrowserRouter>
        <NavBarBS />
        
          <Routes>
            
          <Route exact path= '/' element= {<ItemListContainer greeting='Bienvenidos a nuestra tienda!' />} />
          <Route exact path= '/categorias/:categoriaId' element= {<ItemListContainer greeting='Bienvenidos a nuestra tienda!' />} />
          <Route exact path= '/detalle/:detalleId' element= {<ItemDetailContainer greeting='Bienvenidos a nuestra tienda!' />} />
          <Route exact path= '/cart' element= {< Cart />} />
          
          </Routes>

      </BrowserRouter>
        

    </div>
    </CartContextProvider>
  );
}

export default App;

