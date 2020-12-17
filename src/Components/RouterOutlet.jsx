import React from 'react'; 

const { Route } = require('react-router-dom');

function RouterOutlet(route) {
  const render = (props) => {
    props.history.listen(() => {
      if (document && document.top !== false) {
        window.scrollTo(0, 0);
      }
    });

    const component = (
      <route.component
        {...props}
        routes={route.routes}
        config={route}
      />
    );

    return component;
  };

  const routeProps = {
    path: route.path,
    render,
  };

  return <Route {...routeProps} />;
}

export default RouterOutlet;
