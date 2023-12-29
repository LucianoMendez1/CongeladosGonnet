import { useState } from "react";
import './contador.css';
const Contador = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }

    return(
        <>
            <div>
                <button   className="decrementButton" onClick={restarContador}> - </button>
                <strong> {contador} </strong>
                <button className="incrementButton"  onClick={sumarContador}> + </button>
            </div>
            <button className="addToCartButton" onClick={() => funcionAgregar(contador)}>Agregar al Pedido</button>
        </>
    )

}
export default Contador