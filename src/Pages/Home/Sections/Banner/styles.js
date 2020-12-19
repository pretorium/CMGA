import styled from 'styled-components';
import css from '@styled-system/css';
import { Grid } from '@material-ui/core';
import { variant } from 'styled-system';

export const BannerContainer = styled(Grid)`
  ${css({
    paddingTop: ['60px', '35px', '35px', '2.41vw'],
    paddingBottom: ['95px', '95px', '95px', '6.55vw'],
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
    justifyContent: ['center', 'flex-start'],
    div: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    }
  })}
`;

export const Shield = styled.div`
  ${css({
    display: 'flex',
    height: ['242px', '287px', '287px', '19.80vw'],
    width: ['260px', '302px', '302px', '20.83vw'],
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundSize: 'contain',
    paddingTop: ['35px', '42px', '42px', '2.89vw'],
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
        fontSize: ['100px', '120px', '120px', '8.28vw'],
        fontWeight: '750',
        lineHeight: '.8',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      bottomNumber: {
        color: 'white',
        fontSize: ['14px', '16px', '16px', '1.10vw'],
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: ['8.5px', '10px', '10px', '0.69vw'],
        lineHeight: '1.15',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      bottomText: {
        color: 'white',
        fontSize: ['14px', '16px', '16px', '1.10vw'],
        fontWeight: '550',
        textAlign: 'center',
        paddingTop: ['34px', '40px', '40px', '2.76vw'],
        paddingBottom: ['22px', '26px', '26px', '1.79vw'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      rightText: {
        color: 'white',
        fontSize: ['40px', '48px', '48px', '3.31vw'],
        textAlign: ['center', 'right'],
        paddingTop: ['46px', '55px', '55px', '3.79vw'],
        lineHeight: '1',
        paddingBottom: ['40px', '48px', '48px' , '3.31vw'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      textLogo: {
        color: props.theme.colors.gold,
        fontSize: ['20px', '24px', '24px', '1.65vw'],
        textAlign: ['left'],
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
        fontSize: ['68px', '80px', '80px', '5.52vw'],
        whiteSpace: 'nowrap',
      },
      '2': {
        color: props.theme.colors.red,
        lineHeight: '.8',
        fontWeight: '800',
        fontSize: ['68px', '80px', '80px', '5.52vw'],
        whiteSpace: 'nowrap',
      },
      '3': {
        color: 'white',
        lineHeight: '.8',
        fontWeight: '750',
        fontSize: ['46px', '55px', '55px', '3.79vw'],
        whiteSpace: 'nowrap',
      },
      '4': {
        color: 'white',
        lineHeight: '.8',
        fontWeight: '500',
        fontSize: ['42px', '50px', '50px', '3.34vw'],
        whiteSpace: 'nowrap',
      },
      '5': {
        color: props.theme.colors.red,
        lineHeight: '.8',
        fontWeight: '750',
        fontSize: ['50px', '60px', '60px', '4.14vw'],
        whiteSpace: 'nowrap',
      },
      '6': {
        color: 'white',
        lineHeight: '.8',
        fontWeight: '500',
        fontSize: ['42px', '50px', '50px', '3.34vw'],
        whiteSpace: 'nowrap',
      },
      'textLogo-top': {
        fontWeight: '200',
        fontSize: ['18px', '22px', '22px', '1.51vw'],
        whiteSpace: 'nowrap',
      },
      'textLogo-mid': {
        fontWeight: '750',
        fontSize: ['34px', '40px', '40px', '2.76vw'],
        whiteSpace: 'nowrap',
      },
      'textLogo-bottom': {
        fontWeight: '800',
        fontSize: ['14px', '17px', '17px', '1.17vw'],
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
    height: ['77px', '91px', '91px', '6.27vw'],
    width: ['97px', '115px', '115px', '7.93vw'],
    marginRight: ['15px', '18px', '18px', '1.24vw'],
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url('/svg/logo.svg')",
  })}
`;
