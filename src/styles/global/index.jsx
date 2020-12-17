import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import reset from './reset';
import elements from './elements';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  ${elements}
`;
export default GlobalStyle;
