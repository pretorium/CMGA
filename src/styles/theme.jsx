/* eslint-disable import/no-anonymous-default-export */
import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: '#EB0A1E', // Intense red
  secondary: '#FF2147', // Soft red
  red: '#FF0000',
  gray: '#F6F6F6', // Background gray
  grayDark: '#DCDCDC',
  grayThree: '#575E67',
  grayFour: '#D4D4D4',
  grayFive: '#9C9C9C',
  graySix: '#E5E5E5',
  grayStrong: '#646464',
  black: '#000000',
  white: '#FFFFFF',
};

const fonts = {
  regular: 'Toyota-Regular, sans-serif',
  medium: 'Toyota-Medium, sans-serif',
  bold: 'Toyota-Bold, sans-serif',
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
