interface Props {
  busqueda: string;
  setBusqueda: (value: string) => void;
}

const Busqueda = ({ busqueda, setBusqueda }: Props) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Busque un producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
};

export default Busqueda;