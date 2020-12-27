import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./clientes/Form"
import List from "./clientes/List"
import Edit from "./clientes/Edit"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <Nav/>
          <Switch>
            <Route path="/painel/listar" exact component={List} />
            <Route path="/painel/criar"  component={Form} />
            <Route path="/painel/editar/:id" component={Edit} />
          </Switch>
        </main>
      </Router>
    )
  }
}
// for <div id="main-clientes"></div>
ReactDOM.render(<Main />, document.getElementById('main-customer'));