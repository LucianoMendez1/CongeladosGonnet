import "./presentacion.css";
import Description from "../description/Description";

const Presentacion = () => {
  return (
    <div>
      <div className="container-presentation">
        <div className="title">
          <h1>Congelados Gonnet</h1>
       
        <div className="subtitle">
          Hace tu Pedido online.
          <button className="button-presentacion">Ver Productos</button>
        </div>
      </div>
      </div>
      <Description />
    </div>
  );
};

export default Presentacion;
