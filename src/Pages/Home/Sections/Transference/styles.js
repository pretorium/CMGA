import styled from 'styled-components';
import css from '@styled-system/css';
import { Grid } from '@material-ui/core';
import { variant } from 'styled-system';

export const Divider = styled(Grid)`
  ${css({
    left: '0',
    top: ['-51px', '-60px', '-60px', '-4.14vw'],
    height: ['51px', '60px', '60px', '4.14vw'],
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
    paddingTop: ['90px', '107px', '107px', '7.38vw'],
  })}
`;

export const ContentRight = styled(Grid)`
  ${css({
    justifyContent: ['center', 'flex-start'],
    paddingTop: ['45px', '107px', '107px', '7.38vw'],
    paddingBottom: ['49px', '70px', '70px', '4.83vw'],
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      title: {
        color: props.theme.colors.wine,
        fontSize: ['35px', '42px', '42px', '2.89vw'],
        fontWeight: '750',
        lineHeight: '1',
        paddingBottom: ['34px', '41px', '41px', '2.82vw'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      paragraph: {
        color: 'black',
        fontSize: ['13px', '16px', '16px', '1.10vw'],
        fontWeight: '400',
        lineHeight: ['20px', '24px', '24px', '1.65vw'],
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

export const ContainerPartners = styled(Grid)`
  background: #BAA97C;
  text-align: center;
`;