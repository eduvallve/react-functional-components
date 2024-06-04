// funcion pura nunca cambia el valor de retorno
// los componentes funcioanles en React son todos funciones puras
const MiComponente = ({ miProp }) => {
  return <div>Nombre: {miProp}</div>;
};

const App = () => {
  return <MiComponente miProp={"chanchito feliz"} />;
};

export default App;
