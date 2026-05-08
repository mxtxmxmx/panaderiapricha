import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import type { Producto } from '../types/Producto';

export const useProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [busqueda, setBusqueda] = useState<string>('');
  
  // Cambiamos "todas" a "Todas" para mantener el formato de tu SQL
  const [categoria, setCategoria] = useState<string>('Todas');

  // Las categorías exactas basadas en tu archivo SQL
  const categorias = ['Todas', 'Pan', 'Pastel', 'Galletas', 'Bebida'];

  const traerProductos = async () => {
    try {
      // Tu tabla se llama 'panaderia' en la base de datos
      const { data, error } = await supabase.from('panaderia').select('*');
      
      if (error) {
        console.error('Error de Supabase:', error);
        return;
      }
      
      if (data) {
        setProductos(data);
      }
    } catch (error) {
      console.error('Error al traer los productos:', error);
    }
  };

  useEffect(() => {
    traerProductos();
  }, []);

  const buscarProducto = productos.filter((p) => {
    return p.nombre.toLowerCase().includes(busqueda.toLowerCase());
  });

  const filtrarPorCategoria = productos.filter((p) => {
    if (categoria === 'Todas') {
      return true;
    }
    return p.categoria === categoria;
  });

  const totalProductos = productos.length;
  const sumadeTodos = productos.reduce((suma, p) => suma + p.precio, 0);
  const precioPromedio = totalProductos > 0 ? sumadeTodos / totalProductos : 0;

  // Asegurarnos de retornar TODO lo que App.tsx necesita para sus .map()
  return {
    buscarProducto,
    filtrarPorCategoria,
    busqueda,
    setBusqueda,
    categoria,
    setCategoria,
    categorias,
    totalProductos,
    precioPromedio
  };
};

export default useProductos;