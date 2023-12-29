import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../../context/CarritoContext";
import { db } from "../../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
   
    const [direccion, setDireccion] = useState("");
    const [descripcionPedido, setDescripcionPedido] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !direccion || !descripcionPedido) {
            setError("Por favor completa todos los campos !!");
            return;
        }

        
        const telefonoRegex = /^\d+$/;
        if (!telefonoRegex.test(telefono) || telefono.length > 10) {
            setError("El campo de teléfono debe contener solo números ");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
        
            direccion,
            descripcionPedido
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch(error => {
                        console.log("Error al crear la orden", error);
                        setError("Se produjo un error al crear la orden");
                    });
            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock", error);
                setError("No se puede actualizar el stock");
            });
    };

    return (
        <div>
            <h2>Completar los datos para continuar</h2>

            <form onSubmit={manejadorFormulario} className="formulario">
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} x {producto.cantidad} </p>
                        <p>{producto.item.precio}</p>
                        <hr />
                    </div>
                ))}
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Telefono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>

          

                <div className="form-group">
                    <label htmlFor="">Dirección</label>
                    <input type="text" onChange={(e) => setDireccion(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Descripción del Pedido</label>
                    <textarea onChange={(e) => setDescripcionPedido(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}> {error} </p>}

                <button type="submit"> Confirmar Compra </button>

                {ordenId && (
                    <strong className="orderId">¡Gracias por tu compra! Tu número de orden es: {ordenId} </strong>
                )}
            </form>
        </div>
    );
};

export default Checkout;
