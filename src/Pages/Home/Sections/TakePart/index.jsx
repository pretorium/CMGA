import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '../../Components/button.jsx';
import { 
  TakePartContainer, ContentLeft, Divider,
  ContentRight, Text, Outline, LogoBCP, Span
} from './styles';

const TakePart = () => {
  return (
    <>
      <TakePartContainer container>
        <Divider id="como-participar"/>
        <ContentLeft container item xs={12} md={6}>
          <Outline container item xs={10} md={9}>
            <Grid item xs={12} md={8}>
              <Text styles="paragraphTopLeft">
                Aporte de S/1,000 para incorporarte como asociado, podrás
                contactarnos a la siguiente dirección <strong>contacto@cmga.pe</strong>
              </Text>
            </Grid>
            <LogoBCP />
            <Grid item xs={12} md={8}>
              <Text styles="accounts">
                194-99756662-0-02
              </Text>
              <Text styles="accounts">
                CI: 00219419975666200293
              </Text>
            </Grid>
          </Outline>
        </ContentLeft>
        <ContentRight container item xs={12} md={6}>
          <Grid container item xs={10} md={9} justify="flex-end" alignContent="center">
            <Text styles="title">
              <Span styles="spanTitle">CÓMO</Span><br/>
              PARTICIPAR
            </Text>
            <Grid item xs={10}>
              <Text styles="paragraphMiddle">
                Compromiso <strong>desinteresado</strong> con la Asociación soportado en el amor 
                a nuestros colores y la historia de la “U”.
              </Text>
            </Grid>
              <Button 
                styles="white"
                loading
              >
                FICHA DE<br/>POSTULANTE
              </Button>
              <Button 
                styles="goldTwo"
                // loading
              >
                DECLARACIÓN<br/>JURADA ACMGA
              </Button>
          </Grid>
        </ContentRight>
      </TakePartContainer>
    </>
  );
};

export default TakePart;