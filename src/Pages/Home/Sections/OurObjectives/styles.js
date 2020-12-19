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

export const OurObjectivesContainer = styled(Grid)`
  ${css({
    position: 'relative',
    backgroundColor: '#221F20',
  })}
`;

export const ContentLeft = styled(Grid)`
  ${css({
    justifyContent: 'flex-end',
    paddingTop: ['94px'],
    paddingBottom: ['101px'],
  })}
`;

export const ContentRight = styled(Grid)`
  ${css({
    justifyContent: 'flex-start',
    paddingTop: ['92px'],
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      titleTop: {
        color: props.theme.colors.white,
        fontSize: ['46px'],
        fontWeight: '600',
        lineHeight: '.9',
        marginBottom: '0',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      titleBottom: {
        color: props.theme.colors.gold,
        fontSize: ['40px'],
        fontWeight: '800',
        lineHeight: '.9',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      paragraph: {
        color: 'white',
        fontSize: ['16px'],
        fontWeight: '200',
        lineHeight: ['24px'],
        fontFamily: props.theme.fonts.spartanLight,
      },
    }
  })}
`;

export const Points = styled.div`
  ${css({
    width: ['224px'],
    height: ['56px'],
    marginTop: ['16px'],
    marginRight: ['28px'],
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
    paddingTop: ['195px'],
    paddingBottom: ['195px'],
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
