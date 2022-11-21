import './App.css';
import IndexPage from './pages/indexpage';
import ProveedoresPage from './pages/proveedores';
import ProductosPage from './pages/productos';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <div>
        <Routes>
          <Route path ='/' element={<IndexPage />} />
          <Route path ='/listaProductos' element={<ProductosPage />}/>
          <Route path ='/listaProveedores' element={<ProveedoresPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
