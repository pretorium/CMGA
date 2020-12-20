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
        lineHeight: ['97px', '115px', '115px', '7.93vw'],
        fontFamily: props.theme.fonts.spartanBold,
      },
      bottomNumber: {
        color: 'white',
        fontSize: ['14px', '16px', '16px', '1.10vw'],
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      bottomText: {
        color: 'white',
        fontSize: ['14px', '16px', '16px', '1.10vw'],
        fontWeight: '550',
        textAlign: 'center',
        paddingTop: ['34px', '40px', '40px', '2.76vw'],
        paddingBottom: ['22px', '26px', '26px', '1.79vw'],
        fontFamily: props.theme.fonts.spartanMedium,
      },
      rightText: {
        color: 'white',
        textAlign: ['center', 'right'],
        paddingTop: ['46px', '55px', '55px', '3.79vw'],
        paddingBottom: ['40px', '48px', '48px' , '3.31vw'],
        lineHeight: '1',
      },
      textLogo: {
        color: props.theme.colors.gold,
        textAlign: ['left'],
        lineHeight: '1',
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
        fontSize: ['68px', '80px', '80px', '5.52vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanExtraBold,
      },
      '2': {
        color: props.theme.colors.red,
        fontSize: ['68px', '80px', '80px', '5.52vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanExtraBold,
      },
      '3': {
        color: 'white',
        fontSize: ['39px', '52px', '52px', '3.58vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanBold,
      },
      '4': {
        color: 'white',
        fontSize: ['35px', '42px', '42px', '2.89vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      '5': {
        color: props.theme.colors.red,
        fontSize: ['39px', '52px', '52px', '3.58vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanBold,
      },
      '6': {
        color: 'white',
        fontSize: ['35px', '42px', '42px', '2.89vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      'textLogo-top': {
        fontSize: ['17px', '20px', '20px', '1.38vw'],
        whiteSpace: 'nowrap',
        lineHeight: ['22px', '28px', '28px', '1.93vw'],
        fontFamily: props.theme.fonts.spartanLight,
      },
      'textLogo-mid': {
        fontSize: ['34px', '40px', '40px', '2.76vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanExtraBold,
      },
      'textLogo-bottom': {
        fontSize: ['11px', '18px', '18px', '1.24vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanBold,
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
