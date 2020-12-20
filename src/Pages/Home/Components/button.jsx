import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { variant } from 'styled-system';

const ButtonContainer = styled.button`
  ${(props) => css({
    height: ['51px', '60px', '60px', '4.14vw'],
    borderRadius: ['4px', '4px', '4px', '0.27vw'],
    padding: ['0 11px', '0 13px', '0 13px', '1.10vw'],
    border: '1px solid #BB993E',
  })}
  ${(props) => variant({
  prop: 'styles',
  variants: {
    white: {
      marginRight: ['12px', '15px', '15px', '1.03vw'],
      minWidth: ['136px', '160px', '160px', '11.04vw'],
      color: props.theme.colors.gold,
      backgroundColor: props.theme.colors.white,
    },
    gold: {
      minWidth: ['136px', '160px', '160px', '11.04vw'],
      color: props.theme.colors.white,
      backgroundColor: props.theme.colors.gold,
    },
    goldTwo: {
      minWidth: ['136px', '160px', '160px', '11.04vw'],
      color: props.theme.colors.white,
      backgroundColor: props.theme.colors.gold,
    },
  }
})}
`;

const Icon = styled.div`
  ${(props) => variant({
  prop: 'styles',
  variants: {
    white: {
      width: ['27px', '32px', '32px', '2.20vw'],
      height: ['34px', '40px', '40px', '2.76vw'],
      marginRight: ['7.65px', '9px', '9px', '0.62vw'],
      background: "url('/svg/paper.svg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    gold: {
      width: ['30px', '36px', '36px', '2.48vw'],
      height: ['34px', '40px', '40px', '2.76vw'],
      marginRight: ['7.65px', '9px', '9px', '0.62vw'],
      background: "url('/svg/peoples.svg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    goldTwo: {
      width: ['30px', '36px', '36px', '2.48vw'],
      height: ['34px', '40px', '40px', '2.76vw'],
      marginRight: ['7.65px', '9px', '9px', '0.62vw'],
      background: "url('/svg/contract.svg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
  }
})}
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  ${(props) => css({
    fontSize: ['10px', '12px', '12px', '0.82vw',],
    fontFamily: props.theme.fonts.robotoRegular,
  })}
`;

const Spinner = styled.div`
  ${(props) => css({
    margin: '100px auto',
    width: ['42px', '50px', '50px', '3.34vw'],
    height: ['25px', '30px', '30px', '2.07vw'],
    textAlign: 'center',
    fontSize: ['8px', '10px', '10px', '0.69vw'],
  })}

  div {
    ${(props) => css({
      width: ['5px', '6px', '6px', '0.41vw'],
      borderWidth: ['.1px', '.1px', '.1px', '0.0069vw'],
    })}
    background-color: ${props => props.styles === ('gold' || 'goldTwo') ? 'white' : props.theme.colors.gold};
    height: 100%;
    // width: 6px;
    border: .1px solid ${props => props.styles === ('gold' || 'goldTwo') ? props.theme.colors.gold : 'white'};
    display: inline-block;
    
    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% { 
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% { 
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
`;

const Button = (props) => {
  return (
    <ButtonContainer styles={props.styles} {...props}>
      {!props.loading ? (
          <Content>
            <Icon styles={props.styles} />
            {props.children}
          </Content>
      ) : (
        <Spinner styles={props.styles}>
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </Spinner>
      )}
    </ButtonContainer>
  );
};

export default Button;
