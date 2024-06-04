import { useState, useEffect, Component } from "react";
// reglas de los hooks:
// - no se llaman dentro de loops (while, for, if, foreach, etc.). tiene que estar al nivel mas alto del componente
// - solo se llaman en 2 partes:
//    # Componentes de react
//    # Custom hooks (componentes personalizados) <- Cuando creemos un custom hook, su nombre debe ser "use"+[nombre del hook]
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };

  return [contador, incrementar];
};

// const Interval = ({ contador }) => {
//   useEffect(() => {
//     const i = setInterval(() => console.log(contador), 1000);
//     return () => clearInterval(i); // desuscribirse. se para el intervalo anterior y se ejecuta el nuevo
//   }, [contador]);
//   return <p>Intervalo</p>;
// };

class Interval extends Component {
  intervalo = "";
  componentDidMount() {
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalo);
  }
  render() {
    return <p>Intervalo</p>;
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0);
  useEffect(() => {
    document.title = contador;
  }, [contador]);
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador={contador} />
    </div>
  );
};
export default App;
