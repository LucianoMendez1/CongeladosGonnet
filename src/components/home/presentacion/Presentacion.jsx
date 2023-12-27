import "./presentacion.css";
import Description from "../description/Description";

const Presentacion = () => {
  return (
    <div>
      <div className="container-presentation">
      <video className='videoHero' src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1703645246/Congelados%20gonnet/1226_e57kdd.mp4" autoPlay loop muted></video>
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
