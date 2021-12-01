import './App.css';
import ItemListContainer from './components/screens/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/screens/ItemDetailContainer';
import { CartContext, CartProvider } from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer tipoFiltro={"productos"}/>}/>
            <Route path="/category/:id" element={<ItemListContainer tipoFiltro={"porCategoria"}/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
