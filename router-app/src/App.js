import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Civilizacion from './components/Civilizacion';


function App() {
  return (
    <Router>
    <div className="container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">Inicio</Link>
        <Link to="/contacto" className="btn btn-dark">Contacto</Link>
        <Link to="/nosotros" className="btn btn-dark">Nosotros</Link>
      </div>
      <hr/>
      <Switch>
        <Route path="/nosotros/:id">
          <Civilizacion />
        </Route>
        <Route path="/contacto">
          <Contacto/>
        </Route>
        <Route path="/nosotros">
          <Nosotros/>
        </Route>
        <Route path="/" exact>
          <Inicio/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;