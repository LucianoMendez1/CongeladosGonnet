
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../Carrito/CartWidget/CartWidget';
import './navbar.css';

const NavBar = () => {
    return (
        <header className="navbar-header">
            <Link to="/" className="logo-link">
               <img className='logonav' src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1703386480/Congelados%20gonnet/logo_gonnet_redondo_ftzo1h.png" alt="" />
            </Link>

            <nav className="main-nav">
                <ul>
                    <li className='nav-item'>
                        <NavLink to="/categoria/1" activeClassName="active">Frutas</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/categoria/2" activeClassName="active">Verduras</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/categoria/3" activeClassName="active">Rebosados</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/categoria/4" activeClassName="active">Pizzas</NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    );
};

export default NavBar;
