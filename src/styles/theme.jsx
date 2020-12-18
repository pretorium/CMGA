/* eslint-disable import/no-anonymous-default-export */
import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  wine: '#691717',
  gold: '#BB993E',
  beige: '#BAA97C',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#525656',
  secondBlack: '#221F20',
  yellow: '#F9C430',
  red: '#cf0000',
};

const fonts = {
  spartanLight: 'Spartan-Light, sans-serif',
  robotoRegular: 'Roboto-Regular, sans-serif',
  spartanRegular: 'Spartan-Regular, sans-serif',
  spartanMedium: 'Spartan-Medium, sans-serif',
  spartanBold: 'Spartan-Bold, sans-serif',
  spartanExtraBold: 'Spartan-ExtraBold, sans-serif',
  spartanBlack: 'Spartan-Black, sans-serif',
};

const mateialBreakpoints = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1154,
      xl: 1600,
    },
  },
  MuiTypography: {
    variantMapping: {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      p: 'p',
      span: 'span',
    },
  },
});

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const breakpoints = ['601px', '961px', '1155px', '1601'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  colors,
  mateialBreakpoints,
  space,
  breakpoints,
  fonts,
};
