import { useState } from 'react';
import "./presentacion.css";
import Description from "../description/Description";
import Catalogo from "../catalogo/Catalogo"; // Asegúrate de importar el componente de catálogo

const Presentacion = () => {
  const [mostrarCatalogo, setMostrarCatalogo] = useState(false);

  const handleVerCatalogoClick = () => {
    setMostrarCatalogo(true);
  };

  const handleCloseCatalogo = () => {
    setMostrarCatalogo(false);
  };

  return (
    <div>
      <div className="container-presentation">
        <video className='videoHero' src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1703645246/Congelados%20gonnet/1226_e57kdd.mp4" autoPlay loop muted></video>
        <div className="title">
          <h1>Congelados Gonnet</h1>
        </div>
        <div className="subtitle">
          Hace tu Pedido online.
          <button className="button-presentacion" onClick={handleVerCatalogoClick}>Ver Catálogo</button>
        </div>
      </div>

      {mostrarCatalogo && (
        <div>
          {/* Fondo difuminado */}
          <div className="catalogo-background" onClick={handleCloseCatalogo}></div>

          {/* Modal del catálogo */}
          <div className="catalogo-modal">
            <Catalogo />
          </div>
        </div>
      )}
      
      <Description />
    </div>
  );
};

export default Presentacion;
