import React from 'react';
import routes from './routes';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import RouterOutlet from './Components/RouterOutlet';
import { MuiThemeProvider } from '@material-ui/core/styles';

const App = () => (
  <>
    <MuiThemeProvider theme={theme.mateialBreakpoints}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          {routes.map((route) => (
            <RouterOutlet key={route.path} {...route} />
          ))}
        </Switch>
      </ThemeProvider>
    </MuiThemeProvider>
  </>
);

export default App;
