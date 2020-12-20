/* eslint-disable eqeqeq */
import styled from 'styled-components';
import css from '@styled-system/css';

export const HeaderContainer = styled.div`
  ${css({
    top: '0',
    zIndex: '100',
    width: '100%',
    height: ['51px', '60px', '60px', '4.14vw'],
    display: 'flex',
    position: 'sticky',
    justifyContent: 'flex-end',
  })}
`;

export const Overlay = styled.div`
  ${(props) => css({
    top: '0',
    zIndex: '9',
    width: '100%',
    minHeight: ['100%', props.active ? '100%' : '0'],
    position: 'absolute',
    transition: 'min-height .5s',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // background: [props.theme.colors.black, "url('/images/banner.jpg')"],
    background: [props.theme.colors.black],
  })}
`;

export const ListOptions = styled.ul`
  ${css({
    zIndex: '10',
    display: ['none', 'flex'],
    alignItems: 'center',
    paddingRight: ['0', '171px', '171px', '11.79vw'],
  })}
`;

export const Option = styled.li`
  ${(props) => css({
    a: {
      color: props.active ? props.theme.colors.gold : 'white',
      fontSize: props.active ? ['12px', '15px', '15px', '1.03vw'] : ['11px', '14px', '14px', '0.96vw'],
      paddingRight: ['17px', '20px', '20px', '1.38vw'],
      fontFamily: props.theme.fonts.robotoRegular,
      transition: 'font-size .1s',
    },
  })}
`;
