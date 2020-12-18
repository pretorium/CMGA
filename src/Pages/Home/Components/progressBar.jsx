import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import css from '@styled-system/css';
import { variant } from 'styled-system';

const Container = styled(Grid)`
  ${css({
    backgroundColor: 'white',
    borderRadius: ['8px'],
    padding: ['27px 16px'],
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
        fontSize: ['16px'],
        fontWeight: '600',
        lineHeight: '1',
        whiteSpace: 'nowrap',
        paddingBottom: ['19px'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      textBottomLeft: {
        color: props.theme.colors.yellow,
        textAlign: 'left',
        fontSize: ['18px'],
        fontWeight: '750',
        lineHeight: '1',
        paddingTop: ['15px'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      textBottomRight: {
        color: props.theme.colors.gray,
        textAlign: 'right',
        fontSize: ['18px'],
        fontWeight: '750',
        lineHeight: '1',
        paddingTop: ['15px'],
        whiteSpace: 'nowrap',
        fontFamily: props.theme.fonts.spartanRegular,
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
        height: ['24px'],
        borderRadius: ['24px'],
        margin: '0',
        backgroundColor: props.theme.colors.gray,
      },
      progress: {
        top: '0',
        left: '0',
        width: '50%',
        height: ['24px'],
        position: 'absolute',
        borderRadius: ['24px'],
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