import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import reset from './reset';
import elements from './elements';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  ${elements}
  ${fonts}
`;
export default GlobalStyle;
