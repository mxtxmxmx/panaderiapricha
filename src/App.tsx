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

  // Lógica para decidir qué array mostrar: si hay texto en el buscador, muestra la búsqueda; si no, muestra el filtro de categorías
  const productosAMostrar = busqueda !== '' ? buscarProducto : filtrarPorCategoria;

  return (
    <>
      {/* Componente de Navegación */}
      <Navbar />

      <main className="app-container">
        <header>
          <h1>Catálogo de Panadería</h1>
        </header>

        <section className="controles">
          {/* Componente de Búsqueda */}
          <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />

          {/* Botones de Categorías */}
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

          {/* Componente de Estadísticas */}
          <Estadisticas total={totalProductos} promedio={precioPromedio} />
        </section>

        {/* Grid de Productos */}
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