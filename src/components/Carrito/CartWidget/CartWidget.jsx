import { useContext } from 'react';
import { CarritoContext } from '../../../context/CarritoContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    return (
        <div>
            <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} className='carrito' />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget;
