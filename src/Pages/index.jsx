import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const Pages = () => (
  <>
    <Switch>
      {routes.map((route) => (
        <Route key={route.name} {...route} />
      ))}
    </Switch>
  </>
);

export default Pages;
