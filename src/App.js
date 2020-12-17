import { Nav } from 'react-bootstrap';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Calculadora from './components/section1/CalculatorApp'
import ViewAppImc from './components/section2/ViewAppImc'
import UsuarioContext from './context/UsuarioContext'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UsuarioContext.Provider value={{
          id: 10,
          nombres: "Oscar",
          apellidos: "Mesa",
          edad: 23,
          correo: 'oscar.mesa@gmail.com'
        }}>

          <Nav fill variant="tabs" defaultActiveKey="/imc-toma">
            <Nav.Item>
              <Link to = "/imc-toma" className = "nav-link" data-rb-event-key="link-1" role="button">Toma de paciente IMC</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to = "/imc-estadistica" className = "nav-link" data-rb-event-key="link-1" role="button">Estadisticas IMC</Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
    </Nav.Link>
            </Nav.Item>
          </Nav>


          <Switch>
            <Route path="/" exact >
              <Redirect to = "/imc-toma"></Redirect>
            </Route>
            <Route path="/imc-toma" exact render={(props) => { return <Calculadora {...props} nombre="oscar" /> }} />
            <Route path="/usuario/iniciar-sesion" exact />
            <Route path="/imc-paciente" exact />
            <Route path="/imc-estadistica" exact children={() => <ViewAppImc />} />
          </Switch>
        </UsuarioContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
