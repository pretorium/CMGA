import styled from 'styled-components';
import css from '@styled-system/css';

export const HeaderContainer = styled.div`
  ${css({
    top: '0',
    width: '100%',
    height: ['60px'],
    display: 'flex',
    position: 'sticky',
    justifyContent: 'flex-end',
    ':hover': {
      div: {
        minHeight: '100%',
      },
    },
  })}
`;

export const Overlay = styled.div`
  ${(props) => css({
    top: '0',
    zIndex: '9',
    width: '100%',
    minHeight: '0',
    position: 'absolute',
    transition: 'min-height .5s',
    backgroundColor: props.theme.colors.wine,
  })}
`;

export const ListOptions = styled.ul`
  ${css({
    zIndex: '10',
    display: 'flex',
    alignItems: 'center',
    paddingRight: ['171px'],
  })}
`;

export const Option = styled.li`
  ${(props) => css({
    a: {
      color: 'white',
      fontSize: ['14px'],
      paddingRight: ['20px'],
      fontFamily: props.theme.fonts.robotoRegular,
      transition: 'font-size .1s',
      ':hover': {
        fontSize: ['15px'],
        color: '#cfcec6',
      },
    },
  })}
`;

