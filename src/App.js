import Calculadora from './components/section1/CalculatorApp'
import UsuarioContext from './context/UsuarioContext'
function App() {
  return (
    <div className="App">
      <UsuarioContext.Provider value = {{
           id : 10,
           nombres : "Oscar",
           apellidos : "Mesa",
           edad : 23,
           correo : 'oscar.mesa@gmail.com'
      }}>
        <Calculadora />
      </UsuarioContext.Provider>
    </div>
  );
}

export default App;
