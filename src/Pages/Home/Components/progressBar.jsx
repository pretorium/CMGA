import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import css from '@styled-system/css';
import { variant } from 'styled-system';

const Container = styled(Grid)`
  ${css({
    backgroundColor: 'white',
    borderRadius: ['6.8px', '8px', '8px', '0.55vw'],
    padding: ['22px 13px', '27px 16px', '27px 16px', '1.86vw 1.10vw'],
    width: 'fit-content',
  })}
`;

const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      textTop: {
        color: 'black',
        textAlign: 'center',
        fontSize: ['13px', '16px', '16px', '1.10vw'],
        whiteSpace: 'nowrap',
        paddingBottom: ['16px', '19px', '19px', '1.31vw'],
        fontFamily: props.theme.fonts.spartanBold,
      },
      textBottomLeft: {
        color: props.theme.colors.yellow,
        textAlign: 'left',
        fontSize: ['15px', '18px', '18px', '1.24vw'],
        paddingTop: ['12px', '15px', '15px', '1.03vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanBold,
      },
      textBottomRight: {
        color: props.theme.colors.gray,
        textAlign: 'right',
        fontSize: ['15px', '18px', '18px', '1.24vw'],
        paddingTop: ['12px', '15px', '15px', '1.03vw'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanBold,
      },
    }
  })}
`;
const BarContainer = styled(Grid)`position: relative;`;

const Bar = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      container: {
        width: '100%',
        height: ['20px', '24px', '24px', '1.65vw'],
        borderRadius: ['20px', '24px', '24px', '1.65vw'],
        margin: '0',
        backgroundColor: props.theme.colors.gray,
      },
      progress: {
        top: '0',
        left: '0',
        width: '50%',
        height: ['20px', '24px', '24px', '1.65vw'],
        position: 'absolute',
        borderRadius: ['20px', '24px', '24px', '1.65vw'],
        background: 'linear-gradient(90deg, #EE8326 -55.16%, #F08D28 -25.56%, #F4A82C 24.55%, #F9C430 68.07%)',
      },
    }
  })}
`;


const ProgressBar = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <Text styles="textTop">
          Objetivos 1er trimestre - Diciembre 2020
        </Text>
      </Grid>
      <BarContainer item xs={12}>
        <Bar styles="container" />
        <Bar styles="progress" />
      </BarContainer>
      <Grid container item xs={12} justify="space-between">
        <Grid item xs={6}>
          <Text styles="textBottomLeft">
          S/.91,62 0
          </Text>
        </Grid>
        <Grid item xs={6}>
          <Text styles="textBottomRight">
          S/. 300,000
          </Text>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProgressBar;