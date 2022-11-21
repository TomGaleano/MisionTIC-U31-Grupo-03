import { useState } from "react";
import Menu from "../components/menu";
const IndexPage = () => {

    const [productos, setProducto] = useState([])
    const cargarProductos = () => {
        fetch('http://localhost:4000/apirest/producto')
            .then(res => res.json())
            .then(todosProd => setProducto(todosProd));
    }
    cargarProductos();
    return (
        <main>
            <h1>
                Tienda de Dulces
            </h1>
            <hr />

            <Menu />

            {productos.map(cadaProd => {
                return (
                    <div>
                        <hr/>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={cadaProd.img_producto} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{cadaProd.nombre_producto}</h5>
                                <p className="card-text">Precio: ${cadaProd.precio_producto}</p>
                                <a href="/" className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        
                    </div>
                );
            })}
        </main>
    );
}

export default IndexPage;