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
    alignItems: 'flex-start',
    justifyContent: 'center',
    div: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    }
  })}
`;

export const BannerRight = styled(Grid)`
  ${css({
    alignItems: 'flex-start',
    justifyContent: 'center',
    div: {
      alignItems: 'flex-start',
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
        paddingBottom: ['26px'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      rightText: {
        color: 'white',
        fontSize: ['48px'],
        textAlign: 'right',
        paddingTop: ['55px'],
        lineHeight: '1',
        paddingBottom: ['48px'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      textLogo: {
        color: props.theme.colors.gold,
        fontSize: ['24px'],
        textAlign: 'left',
        lineHeight: '.9',
        fontFamily: props.theme.fonts.spartanRegular,
      },
    }
  })}
`;

export const Span = styled.span`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      '1': {
        color: 'white',
        lineHeight: '.8',
        fontWeight: '800',
        fontSize: ['80px'],
        whiteSpace: 'nowrap',
      },
      '2': {
        color: props.theme.colors.red,
        lineHeight: '.8',
        fontWeight: '800',
        fontSize: ['80px'],
        whiteSpace: 'nowrap',
      },
      '3': {
        color: 'white',
        lineHeight: '.8',
        fontWeight: '750',
        fontSize: ['55px'],
        whiteSpace: 'nowrap',
      },
      '4': {
        color: 'white',
        lineHeight: '.8',
        fontWeight: '500',
        fontSize: ['50px'],
        whiteSpace: 'nowrap',
      },
      '5': {
        color: props.theme.colors.red,
        lineHeight: '.8',
        fontWeight: '750',
        fontSize: ['60px'],
        whiteSpace: 'nowrap',
      },
      '6': {
        color: 'white',
        lineHeight: '.8',
        fontWeight: '500',
        fontSize: ['50px'],
        whiteSpace: 'nowrap',
      },
      'textLogo-top': {
        fontWeight: '200',
        fontSize: ['22px'],
        whiteSpace: 'nowrap',
      },
      'textLogo-mid': {
        fontWeight: '750',
        fontSize: ['40px'],
        whiteSpace: 'nowrap',
      },
      'textLogo-bottom': {
        fontWeight: '800',
        fontSize: ['17px'],
        whiteSpace: 'nowrap',
      },
    }
  })}
`;

export const LogoContainer = styled(Grid)`
  ${css({
    justifyContent: ['center !important', 'flex-end !important'],
    alignItems: 'center !important',
  })}
`;

export const Logo = styled.div`
  ${css({
    height: ['91px'],
    width: ['115px'],
    marginRight: ['18px'],
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url('/svg/logo.svg')",
  })}
`;
