import styled from 'styled-components';
import css from '@styled-system/css';
import { Grid } from '@material-ui/core';
import { variant } from 'styled-system';

export const Divider = styled(Grid)`
  ${css({
    left: '0',
    top: ['-60px'],
    height: ['60px'],
    width: '100%',
    position: 'absolute',
  })}
`;

export const TransferenceContainer = styled(Grid)`
  ${css({
    position: 'relative',
    backgroundColor: '#FCF9EA',
  })}
`;

export const ContentLeft = styled(Grid)`
  ${css({
    justifyContent: 'flex-end',
    paddingTop: ['107px'],
  })}
`;

export const ContentRight = styled(Grid)`
  ${css({
    justifyContent: 'flex-start',
    paddingTop: ['107px'],
    paddingBottom: ['70px'],
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      title: {
        color: props.theme.colors.wine,
        fontSize: ['42px'],
        fontWeight: '750',
        lineHeight: '1',
        marginBottom: ['41px'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      paragraph: {
        color: 'black',
        fontSize: ['16px'],
        fontWeight: '400',
        lineHeight: ['24px'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
    }
  })}
`;

export const Span = styled.span`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      'spanStadium': {
        fontWeight: '750',
      },
    }
  })}
`;
