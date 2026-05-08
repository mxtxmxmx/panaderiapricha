interface Props {
  total: number;
  promedio: number;
}

const Estadisticas = ({ total, promedio }: Props) => {
  return (
    <div>
      <div>
        <span>Total de productos: </span>
        <span>{total}</span>
      </div>
      <div>
        <span>Promedio de precios: </span>
        <span>${promedio.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Estadisticas;