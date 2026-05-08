import './App.css';
import useProductos from './hooks/useProductos';
import { Busqueda, Navbar, Producto, Estadisticas } from './components'; 

function App() {
  const { 
    buscarProducto, 
    filtrarPorCategoria, 
    setBusqueda, 
    busqueda, 
    categorias, 
    categoria, 
    setCategoria, 
    totalProductos, 
    precioPromedio 
  } = useProductos();

  
  const productosAMostrar = busqueda !== '' ? buscarProducto : filtrarPorCategoria;

  return (
    <>
      {}
      <Navbar />

      <main className="app-container">
        <header>
          <h1>Catálogo de Panadería</h1>
        </header>

        <section className="controles">
          {}
          <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />

          {}
          <div className="categorias-botones">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={categoria === cat ? 'activo' : ''} 
              >
                {cat}
              </button>
            ))}
          </div>

          {}
          <Estadisticas total={totalProductos} promedio={precioPromedio} />
        </section>

        {}
        <section className="productos-grid">
          {productosAMostrar.map((p) => (
            <Producto key={p.id} producto={p} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App; 

