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

export const ContactUsContainer = styled(Grid)`
  ${css({
    position: 'relative',
    backgroundColor: '#221F20',
    justifyContent: 'center',
    borderBottom: ['1px solid #BB993E', '1px solid #BB993E', '1px solid #BB993E', '0.069vw solid #BB993E'],
  })}
`;

export const Footer = styled(Grid)`
  ${css({
    display: 'flex',
    backgroundColor: '#221F20',
    justifyContent: 'center',
    color: '#BB993E',
    padding: ['17px 0', '20px 0', '20px 0', '1.38vw 0'],
    fontSize: ['10px', '12px', '12px', '0.82vw',],
  })}
`;

export const Content = styled(Grid)`
  ${css({
    paddingTop: ['63px', '75px', '75px', '5.17vw'],
    paddingBottom: ['69px', '82px', '82px', '5.65vw'],
    justifyContent: 'center',
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      title: {
        color: props.theme.colors.gold,
        fontSize: ['30px', '36px', '36px', '2.48vw'],
        lineHeight: '1',
        textAlign: 'center',
        paddingBottom: ['25px', '27px', '27px', '1.86vw'],
        fontFamily: props.theme.fonts.spartanBold,
      },
      paragraph: {
        color: 'white',
        fontSize: ['13px', '16px', '16px', '1.10vw'],
        textAlign: 'center',
        lineHeight: ['15.23px', '17,92px', '17,92px', '1.23vw'],
        paddingBottom: ['32px', '38px', '38px', '2.62vw'],
        fontFamily: props.theme.fonts.spartanLight,
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

export const Button = styled.button`
  ${(props) => css({
    color: 'white',
    width: ['207px', '244px', '244px', '16.83vw'],
    background: '#BB993E',
    border: ['1.5px solid #BB993E', '1.5px solid #BB993E', '1.5px solid #BB993E', '0.103vw solid #BB993E'],
    borderRadius: ['6px', '8px', '8px', '0.55vw'],
    paddingBottom: ['16px', '19px', '19px', '1.31vw'],
    paddingTop: ['16px', '19px', '19px', '1.31vw'],
    fontSize: ['11px', '13px', '13px', '0.89vw'],
    fontFamily: props.theme.fonts.spartanRegular,
  })}
`;

export const Label = styled.label`
  ${(props) => css({
    color: 'white',
    fontSize: ['13px', '16px', '16px', '1.10vw'],
    lineHeight: ['15px', '18px', '18px', '1.24vw'],
    fontFamily: props.theme.fonts.spartanLight,
  })}
`;

export const Input = styled.input`
  ${(props) => css({
    height: ['42px', '50px', '50px', '3.34vw'],
    width: '100%',
    padding: ['0 8px', '0 10px', '0 10px', '0 .69vw'],
    background: '#F7F7F7',
    borderRadius: ['8px', '10px', '10px', '0.69vw'],
    border: ['1px solid #DBDCE8', '1px solid #DBDCE8', '1px solid #DBDCE8', '0.069vw solid #DBDCE8'],
    marginTop: ['11px', '14px', '14px', '0.96vw'],
    fontFamily: props.theme.fonts.spartanRegular,
    ':focus':{
      boxShadow: [
        '0px 0px 0px 2px #BB993E',
        '0px 0px 0px 2px #BB993E',
        '0px 0px 0px 2px #BB993E',
        '0px 0px 0px 0.13vw #BB993E'
      ],
    }
  })}
`;

export const TextArea = styled.textarea`
  ${(props) => css({
    height: ['127px', '150px', '150px', '10.35vw'],
    width: '100%',
    padding: ['8px', '10px', '10px', '.69vw'],
    background: '#F7F7F7',
    borderRadius: ['8px', '10px', '10px', '0.69vw'],
    border: ['1px solid #DBDCE8', '1px solid #DBDCE8', '1px solid #DBDCE8', '0.069vw solid #DBDCE8'],
    marginTop: ['11px', '14px', '14px', '0.96vw'],
    fontFamily: props.theme.fonts.spartanRegular,
    ':focus':{
      boxShadow: [
        '0px 0px 0px 2px #BB993E',
        '0px 0px 0px 2px #BB993E',
        '0px 0px 0px 2px #BB993E',
        '0px 0px 0px 0.13vw #BB993E'
      ],
    }
  })}
`;

export const ContainerInputs = styled(Grid)`
  ${css({
    position: 'relative',
    paddingBottom: ['18px', '22px', '22px', '1.51vw'],
  })}
`;
