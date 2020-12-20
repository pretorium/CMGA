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

export const TakePartContainer = styled(Grid)`
  ${css({
    position: 'relative',
    backgroundColor: '#FCF9EA',
    paddingTop: ['75px', '131px', '131px', '9.03vw'],
    paddingBottom: ['75px', '155px', '155px', '10.69vw'],
  })}
`;

export const ContentLeft = styled(Grid)`
  ${css({
    justifyContent: ['center', 'flex-end'],
    order: [3, 2]
  })}
`;

export const LogoBCP = styled(Grid)`
  ${css({
    width: ['178px', '210px', '210px', '14.49vw'],
    height: ['45px', '53px', '53px', '3.65vw'],
    background: "url('/svg/bcp.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginBottom: ['16px', '19px', '19px', '1.31vw'],
  })}
`;

export const Outline = styled(Grid)`
  ${css({
    justifyContent: 'center',
    border: ['2px dashed #BAA97C', '2px dashed #BAA97C', '2px dashed #BAA97C', '0.138vw dashed #BAA97C'],
    borderRadius: ['8px', '10px', '10px', '0.69vw'],
    paddingTop: ['42px', '50px', '50px', '3.34vw'],
    paddingBottom: ['42px', '50px', '50px', '3.34vw'],
  })}
`;

export const ContentRight = styled(Grid)`
  ${css({
    justifyContent: ['center', 'flex-start'],
    order: [2, 3],
    button: {
      marginBottom: ['40px', '0'],
    }
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      title: {
        color: props.theme.colors.wine,
        fontSize: ['40px', '48px', '48px', '3.31vw'],
        textAlign: 'right',
        paddingBottom: ['17px', '20px', '20px', '1.38vw'],
        marginBottom: '0',
        lineHeight: '1',
        fontFamily: props.theme.fonts.spartanExtraBold,
      },
      paragraphTopLeft: {
        color: 'black',
        fontSize: ['13px', '16px', '16px', '1.10vw'],
        lineHeight: ['20px', '24px', '24px', '1.65vw'],
        textAlign: 'center',
        paddingBottom: ['44px', '52px', '52px', '3.58vw'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      accounts: {
        color: 'black',
        fontSize: ['13px', '16px', '16px', '1.10vw'],
        lineHeight: ['20px', '24px', '24px', '1.65vw'],
        textAlign: 'center',
        marginBottom: '0',
        fontFamily: props.theme.fonts.spartanMedium,
      },
      paragraphMiddle: {
        color: 'black',
        fontSize: ['13px', '16px', '16px', '1.10vw'],
        lineHeight: ['20px', '24px', '24px', '1.65vw'],
        textAlign: 'right',
        paddingBottom: ['39px', '46px', '46px', '3.17vw'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
    }
  })}
`;

export const Span = styled.span`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      'spanTitle': {
        color: props.theme.colors.beige,
        fontFamily: props.theme.fonts.spartanBold,
      },
    }
  })}
`;
