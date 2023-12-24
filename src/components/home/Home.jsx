
import './home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from '../../context/CarritoContext';
import NavBar from './Navbar/Navbar';
import ItemListContainer from '../products/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from '../products/ItemDetailContainer/ItemDetailConteiner';
import Cart from '../Carrito/Cart/Cart';
import Checkout from '../Carrito/Checkout/Checkout';
import Presentacion from './presentacion/Presentacion';

const Home = () => {
    return (
        <>
            <BrowserRouter>
                <CarritoProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Presentacion />} />
                      {/*   <Route path="/" element={<ItemListContainer />} /> */}
                        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
                        <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='*' element={<h2>Sitio en Construccion</h2>} />
                    </Routes>
                </CarritoProvider>
            </BrowserRouter>
        </>
    );
};

export default Home;
