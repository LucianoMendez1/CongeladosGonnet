import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className="productos-container ">
        <div className='cardProducto'>
            <img src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p>1KG: ${precio}</p>
           {/*  <p>ID: {id}</p> */}
            <p>Stock: {stock}</p>
            <Link to={`/item/${id}`}>Pedir</Link>
        </div>
        </div>
    );
};

export default Item;
