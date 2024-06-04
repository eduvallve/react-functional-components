import { useState } from "react";
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

const App = () => {
  const [contador, incrementar] = useContador(0);
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};
export default App;
