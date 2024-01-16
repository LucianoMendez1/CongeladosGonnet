import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './catalogo.css';

const Catalogo = () => {
  const [ setModalVisible] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="catalogo-container">
      <h2>Seleccione una categoría</h2>
      <nav className="catalogo-nav">
        <ul>
          <li className='catalogo-item'>
            <ul>
              <li className='catalogo-item'>
                <NavLink to="/categoria/1" activeClassName="active" onClick={handleCloseModal}>Frutas</NavLink>
              </li>
              <li className='catalogo-item'>
                <NavLink to="/categoria/2" activeClassName="active" onClick={handleCloseModal}>Verduras</NavLink>
              </li>
              <li className='catalogo-item'>
                <NavLink to="/categoria/3" activeClassName="active" onClick={handleCloseModal}>Rebosados</NavLink>
              </li>
              <li className='catalogo-item'>
                <NavLink to="/categoria/4" activeClassName="active" onClick={handleCloseModal}>Pizzas</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Catalogo;
