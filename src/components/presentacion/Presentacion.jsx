
import './presentacion.css';
import Description from '../description/Description';
const Presentacion = () => {
    

    return (
        <div>
            <div className="container-presentation">
                <div className="title"><h1>Congelados Gonnet</h1></div>
                <div className="subtitle">Hace tu Pedido</div>
            
            </div>
            
            <Description/>
        </div>
        
    );
};

export default Presentacion;