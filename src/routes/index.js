import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import UserForm from '../pages/UserForm';
import PerfilForm from '../pages/PerfilForm';
import Finder from '../pages/Finder';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form/user" component={UserForm} />
        <Route path="/form/perfil" component={PerfilForm} />
        <Route path="/finder" component={Finder} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
