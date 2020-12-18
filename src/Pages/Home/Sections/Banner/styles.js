import styled from 'styled-components';
import css from '@styled-system/css';
import { Grid } from '@material-ui/core';
import { variant } from 'styled-system';

export const BannerContainer = styled(Grid)`
  ${css({
    paddingTop: ['35px'],
    paddingBottom: ['95px'],
  })}
`;

export const BannerLeft = styled(Grid)`
  ${css({
    justifyContent: 'center',
    div: {
      justifyContent: 'center',
    }
  })}
`;

export const BannerRight = styled(Grid)`
  ${css({
    justifyContent: 'center',
    div: {
      justifyContent: 'center',
    }
  })}
`;

export const Shield = styled.div`
  ${css({
    display: 'flex',
    height: ['287px'],
    width: ['302px'],
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundSize: 'contain',
    paddingTop: ['42px'],
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url('/svg/shield.svg')",
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      number: {
        color: 'white',
        textAlign: 'center',
        fontSize: ['120px'],
        fontWeight: '750',
        lineHeight: '.8',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      bottomNumber: {
        color: 'white',
        fontSize: ['16px'],
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: ['10px'],
        lineHeight: '1.15',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      bottomText: {
        color: 'white',
        fontSize: ['16px'],
        fontWeight: '550',
        textAlign: 'center',
        paddingTop: ['40px'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
    }
  })}
`;
