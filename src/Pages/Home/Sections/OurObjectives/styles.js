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
    order: 1,
  })}
`;

export const OurObjectivesContainer = styled(Grid)`
  ${css({
    position: 'relative',
    backgroundColor: '#221F20',
  })}
`;

export const ContentLeft = styled(Grid)`
  ${css({
    justifyContent: ['center', 'flex-end'],
    paddingTop: ['79px', '94px', '94px', '6.48vw'],
    paddingBottom: ['85px', '101px', '101px', '6.96vw'],
    order: [3, 2],
  })}
`;

export const ContentRight = styled(Grid)`
  ${css({
    justifyContent: 'flex-start',
    paddingTop: ['78px', '92px', '92px', '6.34vw'],
    order: [2, 3],
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      titleTop: {
        color: props.theme.colors.white,
        fontSize: ['39px', '46px', '46px', '3.17vw'],
        fontWeight: '600',
        lineHeight: '.9',
        marginBottom: '0',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      titleBottom: {
        color: props.theme.colors.gold,
        fontSize: ['34px', '40px', '40px', '2.76vw'],
        fontWeight: '800',
        lineHeight: '.9',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      paragraph: {
        color: 'white',
        fontSize: ['13px', '16px', '16px', '1.10vw'],
        fontWeight: '200',
        lineHeight: ['20px', '24px', '24px', '1.65vw'],
        fontFamily: props.theme.fonts.spartanLight,
      },
    }
  })}
`;

export const Points = styled.div`
  ${css({
    width: ['190px', '224px', '224px', '15.45vw'],
    height: ['47px', '56px', '56px', '3.86vw'],
    marginTop: ['13px', '16px', '16px', '1.10vw'],
    marginRight: ['23px', '28px', '28px', '1.93vw'],
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: "url('/svg/points.svg')",
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

export const BannerStadium = styled(Grid)`
  ${css({
    zIndex: '4',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: "url('/images/stadium.png')",
    paddingTop: ['165px', '195px', '195px', '13.45vw'],
    paddingBottom: ['165px', '195px', '195px', '13.45vw'],
    justifyContent: 'center',
    ':before': {
      top: '0',
      left: '0',
      content: "''",
      width:'100%',
      height: '100%',
      zIndex: '5',
      position: 'absolute',
      background: 'rgba(0, 0, 0, 0.6)',
    }
  })}
`;
