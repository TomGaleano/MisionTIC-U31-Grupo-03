import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/listaProductos">Productos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/listaProveedores">Proveedores</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link disabled">Login...</Link>
            </li>
        </ul>

    );
}

export default Menu;