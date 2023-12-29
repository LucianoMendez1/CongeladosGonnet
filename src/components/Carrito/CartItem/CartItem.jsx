import { useContext } from "react";
import { CarritoContext } from "../../../context/CarritoContext";
import './cartitem.css';

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div className="cart-item-container">
            <div className="cart-item-info">
               
                <h3>{item.nombre}</h3>
                <p>Cantidad: {cantidad}</p>
                <p>Precio por unidad: {item.precio}</p>
                <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                <hr />
            </div>
        </div>
    );
}

export default CartItem;
