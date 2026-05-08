import type { Producto as ProductoType } from '../../types/Producto';

interface Props {
  producto: ProductoType;
}

const Producto = ({ producto }: Props) => {
  return (
    <div>
      {}
      {producto.imagen && (
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
        />
      )}
      
      <div>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p>${producto.precio.toFixed(2)}</p>
        <p>Categoría: {producto.categoria}</p>
      </div>
    </div>
  );
};

export default Producto;